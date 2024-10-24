import * as d3 from "d3";
import cloud from "d3-cloud";
import React, { useEffect, useRef, useState } from "react";
import "./WordCloud.css";

const WordCloud = ({ words }) => {
  const svgRef = useRef();
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordTimeline, setWordTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  const debounceRender = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  useEffect(
    debounceRender(() => {
      if (!words || words.length === 0) return;

      const svg = d3.select(svgRef.current);
      const width = 500;
      const height = 300;

      // Clear any previous word cloud
      svg.selectAll("*").remove();

      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

      const maxFontSize = Math.min(width, height) / 10;
      const wordScale = d3
        .scaleLinear()
        .domain([0, d3.max(words, (word) => word.count)])
        .range([10, maxFontSize]);

      const layout = cloud()
        .size([width, height])
        .words(
          words.map((word) => ({
            text: word.text,
            size: wordScale(word.count),
          }))
        )
        .padding(7)
        .rotate(() => (Math.random() > 0.7 ? 0 : 90))
        .fontSize((d) => d.size)
        .on("end", draw);

      layout.start();

      function draw(words) {
        setLoading(false); // Hide loading spinner once drawing starts
        const tooltip = d3.select("#tooltip");

        svg
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", `translate(${width / 2},${height / 2})`)
          .selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .style("font-size", (d) => `${d.size}px`)
          .style("fill", (d) => colorScale(d.text))
          .attr("text-anchor", "middle")
          .attr(
            "transform",
            (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`
          )
          .attr("aria-label", (d) => `${d.text}, count: ${d.size}`)
          .attr("role", "text")
          .style("font-weight", (d) =>
            d.text === selectedWord ? "bold" : "normal"
          )
          .text((d) => d.text)
          .on("click", (event, d) => {
            setSelectedWord(d.text);
            showWordTimeline(d.text);
            d3.selectAll("text").style("font-weight", "normal");
            d3.select(event.target).style("font-weight", "bold"); // Highlight selected word
          })
          .on("mouseover", (event, d) => {
            tooltip
              .style("opacity", 1)
              .html(`Word: ${d.text} <br> Count: ${d.size}`)
              .style(
                "left",
                `${Math.min(event.pageX + 10, window.innerWidth - 150)}px`
              )
              .style("top", `${event.pageY + 10}px`);
          })
          .on("mouseout", () => {
            tooltip.style("opacity", 0);
          });

        // Adding transition effect to text
        svg.selectAll("text").transition().duration(1000).attr("opacity", 1);
      }
    }, 300),
    [words]
  );

  const showWordTimeline = (word) => {
    // Mocked timeline data for demonstration
    const timelineData = [
      { date: new Date(2024, 0, 1), count: 2 },
      { date: new Date(2024, 1, 1), count: 5 },
      { date: new Date(2024, 2, 1), count: 1 },
      { date: new Date(2024, 3, 1), count: 3 },
      { date: new Date(2024, 4, 1), count: 4 },
    ];

    setWordTimeline(timelineData);
  };

  useEffect(
    debounceRender(() => {
      if (!wordTimeline || wordTimeline.length === 0) return;

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width =
        svgRef.current.getBoundingClientRect().width ||
        1000 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = d3
        .select("#timeline")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
      svg.selectAll("*").remove(); // Clear previous elements

      const x = d3
        .scaleTime()
        .domain(d3.extent(wordTimeline, (d) => d.date))
        .range([0, width]);
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(wordTimeline, (d) => d.count)])
        .range([height, 0]);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // X axis with transition
      g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .transition()
        .duration(1000);

      // Y axis with transition
      g.append("g").call(d3.axisLeft(y)).transition().duration(1000);

      // Line with transition effect
      g.append("path")
        .datum(wordTimeline)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(d.date))
            .y((d) => y(d.count))
        )
        .attr("stroke-dasharray", function () {
          const totalLength = this.getTotalLength();
          return totalLength;
        })
        .attr("stroke-dashoffset", function () {
          const totalLength = this.getTotalLength();
          return totalLength;
        })
        .transition()
        .duration(1500)
        .attr("stroke-dashoffset", 0)
        .ease(d3.easeCubicInOut);
    }, 300),
    [wordTimeline]
  );

  return (
    <div className="word-cloud-container">
      {loading && <div>Loading...</div>}
      <svg ref={svgRef}></svg>
      <div id="tooltip" className="tooltip" style={{ opacity: 0 }}></div>

      {/* Render the timeline graph */}
      {selectedWord && (
        <div>
          <h3>Timeline for word: {selectedWord}</h3>
          <svg id="timeline"></svg>
        </div>
      )}
    </div>
  );
};

export default WordCloud;

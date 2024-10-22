import * as d3 from "d3";
import cloud from "d3-cloud";
import React, { useEffect, useRef, useState } from "react";
import "./WordCloud.css";

const WordCloud = ({ words }) => {
  const svgRef = useRef();
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordTimeline, setWordTimeline] = useState([]);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 300;

    // Clear any previous word cloud
    svg.selectAll("*").remove();

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const wordScale = d3
      .scaleLinear()
      .domain([0, d3.max(words, (word) => word.count)])
      .range([10, 50]);

    const layout = cloud()
      .size([width, height])
      .words(
        words.map((word) => ({
          text: word.text,
          size: wordScale(word.count),
        }))
      )
      .padding(5)
      .rotate(() => (Math.random() > 0.5 ? 0 : 90))
      .fontSize((d) => d.size)
      .on("end", draw);

    layout.start();

    function draw(words) {
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
        .attr("transform", (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text((d) => d.text)
        .on("click", (event, d) => {
          console.log(`User clicked on ${d.text}`);
          setSelectedWord(d.text);
          showWordTimeline(d.text); // Call function to show the graph for the clicked word
        });
    }
  }, [words]);

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

  useEffect(() => {
    if (!wordTimeline || wordTimeline.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 1000 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3.scaleTime().domain(d3.extent(wordTimeline, d => d.date)).range([0, width]);
    const y = d3.scaleLinear().domain([0, d3.max(wordTimeline, d => d.count)]).range([height, 0]);

    const svg = d3.select("#timeline")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add X axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
      .datum(wordTimeline)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(d => x(d.date))
        .y(d => y(d.count))
      );
  }, [wordTimeline]);

  return (
    <div className="word-cloud-container">
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

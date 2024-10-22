import * as d3 from "d3";
import cloud from "d3-cloud";
import React, { useEffect, useRef } from "react";
import "./WordCloud.css";

const WordCloud = ({ words }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!words || words.length === 0) return;

    const svg = d3.select(svgRef.current);
    const width = 1000;
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
          // Logic for showing related journal entries can be added here
        });
    }
  }, [words]);

  return (
    <div className="word-cloud-container">
      <svg ref={svgRef}></svg>
      <div id="tooltip" className="tooltip" style={{ opacity: 0 }}></div>
    </div>
  );
};

export default WordCloud;

// static/js/app.js

// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json")
    .then((data) => {
      // get the metadata field
      const metadata = data.metadata;
      
      // Filter the metadata for the object with the desired sample number
      const resultArray = metadata.filter(obj => obj.id === parseInt(sample));
      if (resultArray.length === 0) {
        console.warn("No metadata found for sample:", sample);
        return;
      }
      const result = resultArray[0];
      
      // Use d3 to select the panel with id of `#sample-metadata`
      const PANEL = d3.select("#sample-metadata");
      
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
      
      // Inside a loop, you will need to use d3 to append new
      // tags for each key-value in the filtered metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key}: ${value}`);
      });
    });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json")
    .then((data) => {
      // Get the samples field
      const samples = data.samples;
      
      // Filter the samples for the object with the desired sample number
      const resultArray = samples.filter(obj => obj.id === sample);
      if (resultArray.length === 0) {
        console.error("No sample data found for:", sample);
        return;
      }
      const result = resultArray[0];
      
      // Get the otu_ids, otu_labels, and sample_values
      const otu_ids = result.otu_ids;
      const otu_labels = result.otu_labels;
      const sample_values = result.sample_values;
      
      // Build a Bubble Chart
      const bubbleTrace = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      };
      const bubbleLayout = {
        title: "Bacteria Cultures Per Sample",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "Number of Bacteria" },
        margin: { t: 50, l: 80, r: 30, b: 50 }
      };
      
      // Render the Bubble Chart
      Plotly.newPlot("bubble", [bubbleTrace], bubbleLayout);
      
      // For the Bar Chart, map the otu_ids to a list of strings for your yticks
      const yticks = otu_ids
        .slice(0, 10)
        .map(id => `OTU ${id}`)
        .reverse();
      const xvalues = sample_values.slice(0, 10).reverse();
      const hoverText = otu_labels.slice(0, 10).reverse();
      
      // Build a Bar Chart
      const barTrace = {
        x: xvalues,
        y: yticks,
        text: hoverText,
        type: "bar",
        orientation: "h"
      };
      const barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        xaxis: { title: "Number of Bacteria" },
        margin: { t: 50, l: 100, r: 30, b: 50 }
      };
      
      // Render the Bar Chart
      Plotly.newPlot("bar", [barTrace], barLayout);
    });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json")
    .then((data) => {
      // Get the names field
      const names = data.names;
      
      // Use d3 to select the dropdown with id of `#selDataset`
      const selector = d3.select("#selDataset");
      
      // Use the list of sample names to populate the select options
      // Hint: Inside a loop, you will need to use d3 to append a new
      // option for each sample name.
      names.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
      
      // Get the first sample from the list
      const firstSample = names[0];
      
      // Build charts and metadata panel with the first sample
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

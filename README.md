# Belly Button Biodiversity Dashboard

## Overview

This assignment guides you through building an interactive dashboard that visualizes microbial populations in human navel samples. All data are fetched at runtime from a hosted JSON file. By selecting a subject ID from the dropdown menu, the dashboard displays:

- Demographic information (age, gender, ethnicity, location, washing frequency, etc.)  
- A horizontal bar chart of the top 10 bacterial cultures by abundance  
- A bubble chart showing all bacterial OTUs for the selected sample

Visualization and interactivity are provided by D3.js and Plotly.js, and no back-end server is required.

## Features

- Dynamic Dropdown: Automatically populates with every sample ID from the remote JSON file  
- Demographic Panel: Displays subject metadata, including age, gender, ethnicity, location, belly button type (bbtype), and weekly wash frequency (wfreq)  
- Horizontal Bar Chart (“Top 10 Bacteria Cultures Found”):  
  - X-axis: Number of Bacteria  
  - Y-axis: OTU labels (e.g., “OTU 1167”)  
- Bubble Chart (“Bacteria Cultures Per Sample”):  
  - X-axis: OTU ID  
  - Y-axis: Number of Bacteria  
  - Marker size proportional to sample count, colored by OTU ID  
- Responsive Layout: Built with Bootstrap 5 for a clean, mobile-friendly interface

## File Structure
```
belly-button-dashboard/
├── index.html            # Main HTML file (Bootstrap layout, script references)
├── README.md             # This documentation
└── static/
    └── js/
        └── app.js        # JavaScript logic (D3 data fetching + Plotly chart code)
```


- **index.html**  
  - Defines the page layout using Bootstrap  
  - Contains:  
    - `<select id="selDataset">` dropdown menu  
    - `<div id="sample-metadata">` for demographic info  
    - `<div id="bar">` for the horizontal bar chart  
    - `<div id="bubble">` for the bubble chart  
  - Loads D3.js, Plotly.js, and `static/js/app.js` via CDN and relative paths

- **static/js/app.js**  
  - Implements the following functions:  
    1. `init()`  
       - Fetches `samples.json` from the remote URL  
       - Populates the dropdown with all sample IDs  
       - Builds initial charts and metadata for the first ID  
    2. `buildMetadata(sample)`  
       - Filters `data.metadata` for the selected sample ID  
       - Clears existing content and populates the demographic panel  
    3. `buildCharts(sample)`  
       - Filters `data.samples` for the selected sample ID  
       - Renders a horizontal bar chart of the top 10 OTUs  
       - Renders a bubble chart of all OTUs in that sample  
    4. `optionChanged(newSample)`  
       - Invokes `buildMetadata(newSample)` and `buildCharts(newSample)` when the dropdown value changes  

## Technologies

- **HTML5** / **CSS3** / **JavaScript (ES6)**  
- **Bootstrap 5** (layout and styling)  
- **D3.js v7** (JSON fetching and DOM manipulation)  
- **Plotly.js** (interactive bar and bubble charts)  
- **Git** & **GitHub** (version control)

All libraries are loaded via CDN links in `index.html`, so no package manager or build step is required.

## Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/belly-button-dashboard.git
   cd belly-button-dashboard

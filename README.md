# Belly Button Biodiversity Dashboard

## Overview
Interactive dashboard to explore human navel microbiome data. Select a sample ID to view:
- Demographic info (age, gender, etc.)
- Top 10 bacterial cultures (bar chart)
- All bacterial OTUs (bubble chart)

Data is fetched from a remote JSON. Built with D3.js, Plotly.js, and Bootstrap.

## Files
```
belly-button-dashboard/
├── index.html        # HTML layout & containers
└── static/js/app.js  # D3 & Plotly logic
```

## How to Run Locally
1. Clone repo:
   ```
   git clone https://github.com/<your-username>/belly-button-dashboard.git
   cd belly-button-dashboard
   ```
2. Serve locally:
   - VS Code Live Server: Right-click `index.html` → Open with Live Server
   - Python HTTP server:
     ```
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000/index.html`

## Features
- **Dropdown**: Lists all sample IDs
- **Demographic Panel**: Shows metadata for the selected ID
- **Bar Chart**: “Top 10 Bacteria Cultures Found” (X-axis: Number of Bacteria)
- **Bubble Chart**: “Bacteria Cultures Per Sample” (X-axis: OTU ID, Y-axis: Number of Bacteria)

## Deployment
Enable GitHub Pages on the main branch. Live URL: `https://<bluejays101>.github.io/belly-button-dashboard/`

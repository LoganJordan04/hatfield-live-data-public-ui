# Design Doc: Hatfield Live Data Public UI
## Overview
An education and exploration-focused web app for the Hatfield Marine Science Center, showcasing a variety of data streams collected at the center as well as additional educational information about the HMSC and Yaquina estuary. UI is built in React, consisting of an interactive map containing modules for different data streams, each collected from their respective APIs or alternative sources.
## Architecture
- Web App (React, Tailwind): The main landing page featuring the map, and individual modules containing data streams and other information. 
- API Routes (Node): Navigation between landing page and modules.
## Interfaces
- REST API: routes for each module, e.g. /modules/{module_name}
- Data Visualizations: charts generated using a react-compatible library (HighCharts or ReCharts)
## Data Model
Different data streams are accessed through different methods, and in different formats.
- CORIOLIX API: json data containing sensor readings over a given time period.
- Pumped Water SCADA: retrieval method and format TBD
- Underwater/Bay Webcams: live YouTube video stream.
- Weather Station Data: json data via API if available, or scraped data from existing html page.
## Open Questions
- How will SCADA and weather station data be accessed?
- What library/package will be used for charts/visualization?
## Deferred Decisions
- Where will the site be hosted (CEOAS, HMSC Library, OSU CS Servers, etc)

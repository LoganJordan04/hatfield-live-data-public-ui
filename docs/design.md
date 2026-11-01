# Design Doc: Hatfield Live Data Public UI
## Overview
An education and exploration-focused web app for the Hatfield Marine Science Center, showcasing a variety of data streams collected at the center as well as additional educational information about the HMSC and Yaquina estuary. UI is built in React, consisting of an interactive map containing modules for different data streams, each collected from their respective APIs or alternative sources. The app is targeted toward people ages 8 and up, with the goal of informing people about the HMSC and Yaquina Estuary, and allowing them to explore the relationships between different pieces of data, e.g. water depth and salinity. 
## Architecture
- Web App (React, Tailwind): The main landing page featuring the map, and individual modules containing data streams and other information. 
- API Routes (Node): Navigation to landing page and modules.
## Interfaces
- REST API: routes for each module, e.g. /modules/{module_name}
- Data Visualizations: charts generated using a react-compatible library (HighCharts or ReCharts)
## Data Model
Different data streams are accessed through different methods, and in different formats.
- CORIOLIX API: [Dock-mounted sensor](https://hmsc-cms.dri.oregonstate.edu/sensor/info/ysiexo102132/) which records seawater parameters at 15-minute intervals. Data is retrieved through the [CORIOLIX API](https://hmsc-cms.dri.oregonstate.edu/api/decimateData/?model=SensorMixLg3&last_item=1&format=json) as a list of entries whose corresponding parameters are listed [here](https://hmsc-cms.dri.oregonstate.edu/parameter/list/short_name/sensor_id/). json data containing sensor readings over a given time period.
- Pumped Water SCADA: retrieval method and format TBD
- Underwater/Bay Webcams: Embedded live YouTube video stream.
- Weather Station Data: json data via API if available, or scraped data from existing [html page](https://weather.hmsc.oregonstate.edu/) which updates at 5 minute intervals.
## Open Questions
- How will SCADA and weather station data be accessed?
- What library/package will be used for charts/visualization?
## Deferred Decisions
- Where will the site be hosted (CEOAS, HMSC Library, OSU CS Servers, etc)

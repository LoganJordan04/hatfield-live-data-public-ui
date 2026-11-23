<!-- docs/rfcs/YYYY-MM-DD-short-title.md (or docs/adr/, whichever your repo uses) -->

# RFC: Data Visualization Methods

<!-- Decision record header. Leave Status as "Proposed" until your team decides,
     before or after the reviews. Then fill in the outcome and the decision date.
     The document stays where it is; this header is what makes it a record. -->

| Field         | Value      |
| ------------- | ---------- |
| Author        | JP Igloria |
| Date          | 2026-10-25 |
| Status        | Proposed   |
| Decision Date |            |
| Deciders      |            |
| Superseded By |            |

## Problem and Context

The Hatfield Live Data Public UI is an informational and educational tool designed for the Hatfield Marine Science Center (HMSC) and the Coastal Monitoring Station (CMS) operated there. "The data collected from the CMS is meant to benefit everyone, from oyster farmers and fisherfolk, to researchers and policymakers" [1]. Providing a unified location for HMSC visitors and the general public to learn about the CMS, the Yaquina Estuary, and the science and data they collect there, is the overarching goal of this project. The website consists of an interactive map of the HMSC with clickable 'Modules' that present information about a topic as well as a learning activity relating to the content. The four core modules outlined in the project will each display a live data stream, which are all being collected at the CMS, to the user in an accessible and easy-to-understand manner. These data streams and the science surrounding them are key parts of the work that Hatfield does, so determining the best method for presenting and visualizing that data is a key decision. The four data streams include local weather data parsed from a text file, seawater quality in the estuary accessed via a REST API, underwater camera footage embedded as a YouTube livestream, and measurements of seawater pumped in to the HMSC, the format of which is still to be determined. Each data stream comes from a different source and consists of different formats/types of data, so the best method for each individual stream may vary, but it is still central to the design and implementation process for each one.

The decision of what visualization method to choose should be done now, before the implementation process begins, because attempting to make a change down the line during implementation would likely mean a major rework of the module. The bulk of each module's structure will be comprised of the data stream. If the team does nothing, the likely outcome would be to rely on whatever pre-existing source or raw data input we have access to. The data would be presented to the user in whatever state we received it in, which in all likelihood would be unintuitive or impossible to read or understand.

## Options

### Option A: Custom Interactive Visualizations

This scenario would involve creating custom and interactive visualizations for each data stream that formats the data as well as adding styling and options for user input or manipulation. This would likely involve the utilization of chart generation libraries such as Recharts to design graphs for the data, allowing users to view changes in data over time and compare multiple parameters (e.g. water depth and temperature) to look for relationships between them. 

This option would by far require the highest cost in terms of development effort and maintenance, requiring extra time be put towards designing custom visualizations for each module. The benefit is that each module can be tailored and presented in a way that is accessible, engaging, and readable for users of all experience levels, and would be the right choice for emphasizing the learning objectives and accessibility of the site.

### Option B: Tables or Static Information

This option involves presenting the data in dense tables and sheets, with relatively minimal styling and maximum volume of information. Each visualization would consist of a formatted and organized collection of the data recieved from each stream, largely unchanged from the raw values.

This method would be simpler and less costly in terms of developemt effort than implementing custom visualizations. All of the data would be available in one place, making it convenient to access. The tradeoff to this approach is that the data would be difficult to parse through or comprehend the meaning of for anyone who is not already familiar with marine science or the data that is being collected. Without a specific purpose or data point to look for, the raw tables would be of little use. This option would be a good choice for allowing researchers or others with advanced knowledge and specific goals to access the data, but does not serve the general education purposes of the public well.

### Option C: Do Nothing

If we decide not to handle the visualization or formatting of the data streams, the project would rely on pre-existing sources or on the raw, unformatted data that is requested. A few of the data streams have pre-existing visualizations and plots that are publicly accessible, and the module could simply redirect the user to those resources. Otherwise, the data could be presented to the user in whatever format it was received in, such as raw JSON, with no formatting or cleaning.

The benefit of this approach is simplicity, requiring very little effort to execute. This approach fails to address many of the core problems and objectives of this project. The existing resources for viewing the data are either outdated or highly technical, and not accessible or digestible for broader audiences. Attempting to view raw data would be even harder to understand, even for advanced users with additional context. This approach would be acceptable if the only objective is to offer access to all of the data in one location.

## Analysis

### 1. Performance

- **Option A:** Utilizing additional libraries and rendering interactive charts would likely increase the load on the browser. Depending on the hardware that is used (e.g. Touchscreen computer at the HMSC exhibit or a mobile device), performance degradation and input delay could be a concern.

- **Option B:** The static tables would likely be less resource-intensive to display than dynamic and visually complex graphs, and require less processing and filtering of data.

- **Option C:** Displaying raw data and linking to external websites would require minimal processing on the part of our application, however loading multiple concurrent browser tabs could result in higher total resource consumption.

### 2. Complexity

- **Option A:** This approach would require the highest level of complexity. Though efficient libraries such as Recharts exist, they still need to be configured individually and require moderate effort to implement filtering and other user interaction.

- **Option B:** Standard tables require less complexity to implement than custom visualizations, and can be replicated across modules rather than creating individual charts and graphs. Less interaction means less user logic and a simpler UI.

- **Option C:** Very little complexity, requiring little user interaction and no data manipulation/processing.

### 3. Maintainability

- **Option A:** Maintenance and changes would require knowledge of the libraries utilized in addition to basic React skills. The level of complexity and individuality requires moderate effort and knowledge to modify. Forward-compatibility becomes more complex as additional libraries and tools are introduced to the design.

- **Option B:** Maintenanabilty increases with simpler design. Adding new data streams or updating the UI is simple as modules follow similar structire and components.

- **Option C:** Maintainability depends more heavily on external sources working properly, which may be completely out of the hands of the developers of this project.

### 4. Security

- **Option A:** Introducing third-party libraries and packages for visualizations or other features increases the risk of security incidents.

- **All Options:** All options rely on internal APIs for data, and it is critical to ensure that proper measures are taken to prevent exposing endpoints to the public.

### 5. Cost

- **Option A:** Development effort cost is highest, but likely manageable given the project timeframe and the existing options for creating charts and other components.

- **Option B:** Minimal cost required to engineer due to minimal UI and interactive functionality, as well as lower emphasis on style and educational content.

- **Option C:** Practically no cost beyond basic backend API setup.

### Uncertainties

- **Data Format:** Not every data source has a well-established method of receiving the data. The pumped seawater SCADA system is undergoing updates, and the data is currently being held on a server not directly accessible to us. The project partner is working on obtaining access, but it is not yet clear what the final data stream will look like. Similarly, the method of recieving weather station data on the CEOAS servers is currently unknown.

- **API Status/Endpoints:** The CORIOLIX system, the source of the restAPI containing the water parameter sensor data, is currently undergoing an update, and the new version may change the endpoints or structure of the API.

## Recommendation and Verification Plan

I would recommend going with option A. Though it is the more complex option, it is the one that best aligns with the goals and outcomes that we have determined for the project, especially in relation to the educational nature of the site. The level of complexity and cost, though higher than the other options, are still manageable under the constraints we have been given for time and resources. This approach emphaizes curiousity and exploration of the data for people of all ages.

In order to verify the success of our data visualizations, we can first analyze them against established frameworks and guidelines for creating effective visualizations to determine how well we have aligned with widely accepted best practices. It is important to keep these ideas in mind throughout the implementation process, but it is crucial to review our work after completion to ensure that we stayed in alignment. Reputable data visualization sources such as Tableau offer guidelines and best practices for making effective and helpful data visualizations which we can follow [2]. 

Another way to verify the success of our data visualization approach is to perform user tests. We plan on conducting live user tests with the full product by presenting it to visitors at the CMS exhibit in the HMSC. We will observe user interactions with the tool, collecting metrics such as retention time and whether or not they complete the learning objectives to determine how effective our project, and specifically the data visualization, is at conveying the information we want users to absorb. We may also conduct surveys to receive direct feedback from users and determine any areas of improvement that might exist.

## Constraints

Constraints on the method of visualizing the data include the method by which we are able to receive the data, and the performance of the collection instruments. Because none of this data is being collected by our team, if the source or the organization behind it were to go down or change, we would need to adapt accordingly.

## Delegation and Validation

All of the writing in this draft was done without the assistance of AI. AI tools were used when researching different data visualization options, which I validated by reviewing the sources that the AI cited to verify that the options it presented were accurate and valid.

## Decision

Proposed

## Sources
[1] Hatfield Marine Science Center. "Coastal Monitoring Station". *Hatfield Marine Science Center.* https://hmsc.oregonstate.edu/research/research-support/coastal-monitoring-station. Accessed 21 Nov. 2026.

[2] Tableau. "Data Visualization Tips and Best Practices". *Tableau*. https://www.tableau.com/visualization/data-visualization-best-practices. Accessed 22 Nov. 2026.

| Source | Feedback | Decision | Where or why |
| ------ | -------- | -------- | ------------ |
| Reviewer 1 and 2 | Make the verification plan more concrete | Accepted | Recommendation and Verification Plan: now includes evaluation and testing methodology, specific metrics we will collect, and objective frameworks we will follow |
| Reviewer 1 | Provide specific examples of the type of data that will be displayed | Accepted | Problem/Context: explicit describes the different data sources and their formats |
| Reviewer 2 and Instructor | Content section is vague | Accepted | Problem/Context: More specific information was added giving more background context for the project idea and needs. |
| Instructor | Include what 'modules' mean | Accepted | Problem/Context: Explanation of the project design and the idea behind modules is included in the context. |
| Instructor | Include reference section and citations | Accepted | Added cited information to strengthen arguments and context |



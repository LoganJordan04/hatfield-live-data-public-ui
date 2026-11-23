<!-- docs/rfcs/YYYY-MM-DD-short-title.md (or docs/adr/, whichever your repo uses) -->

# RFC: Data Visualization Methods


| Field         | Value      |
| ------------- | ---------- |
| Author        | JP Igloria |
| Date          | 2026-10-25 |
| Status        | Proposed   |
| Decision Date |            |
| Deciders      |            |
| Superseded By |            |

## Problem and Context

The Hatfield Live Data Public UI is an informational and educational tool designed for the Hatfield Marine Science Center (HMSC) and the Coastal Monitoring Station (CMS) operated there. "The data collected from the CMS is meant to benefit everyone, from oyster farmers and fisherfolk, to researchers and policymakers" [1]. Providing a unified location for HMSC visitors and the general public to learn about the CMS, the Yaquina Estuary, and the science and data they collect there, is the overarching goal of this project. The website consists of an interactive map of the HMSC with clickable 'Modules' that present information about a topic as well as a learning activity relating to the content. The four core modules outlined in the project will each display a live data stream, which are all being collected at the CMS, to the user in an accessible and easy-to-understand manner. These data streams and the science surrounding them are key parts of the work that Hatfield does, so determining the best method for presenting and visualizing that data is a key decision. The four data streams include local weather data parsed from a text file, seawater depth and salinity data in the estuary accessed via a REST API, underwater camera footage embedded as a YouTube livestream, and measurements of seawater pumped in to the HMSC, the format of which is still to be determined. Each data stream comes from a different source and consists of different formats/types of data, so the best method for each individual stream may vary, but it is still central to the design and implementation process for each one.

The decision of what visualization method to choose should be done now, before the implementation process begins, because attempting to make a change down the line during implementation would likely mean a major rework of the module. The bulk of each module's structure will be comprised of the data stream. If the team does nothing, the likely outcome would be to rely on whatever pre-existing source or raw data input we have access to. The data would be presented to the user in whatever state we received it in, which in all likelihood would be unintuitive or impossible to read or understand.

## Options

### Option A: Custom Interactive Visualizations

This scenario would involve creating custom and interactive visualizations for each data stream that formats the data as well as adding styling and options for user input or manipulation. This would likely involve the utilization of chart generation libraries such as Recharts to design graphs for the data, allowing users to view changes in data over time and compare multiple parameters (e.g. water depth and temperature) to look for relationships between them. An example of this would be the seawater quality module, which would involve a time-series chart showing the measurements taken over the last day and allowing users to see how the values change over time. They could then infer about the relationship between those parameters and what that could mean for the ecosystem in the estuary.

This option would by far require the highest cost in terms of development effort and maintenance, requiring extra time be put towards designing custom visualizations for each module. The benefit is that each module can be tailored and presented in a way that is accessible, engaging, and readable for users of all experience levels, and would be the right choice for emphasizing the learning objectives and accessibility of the site.

### Option B: Tables or Static Information

This option involves presenting the data in dense tables and sheets, with relatively minimal styling and maximum volume of information. Each visualization would consist of a formatted and organized collection of the data recieved from each stream, largely unchanged from the raw values. Some of the data sources already come in text-based formats which are technically readable, such as the weather data which is stored in a text file which simply contains one measurement per line. In this case, that text file could serve as the visualization, giving users the entire set of the information but not attempting to present it in a more readable or education-focused manner.

This method would be simpler and less costly in terms of developemt effort than implementing custom visualizations. All of the data would be available in one place, making it convenient to access. The tradeoff to this approach is that the data would be difficult to parse through or comprehend the meaning of for anyone who is not already familiar with marine science or the data that is being collected. Without a specific purpose or data point to look for, the raw tables would be of little use. This option would be a good choice for allowing researchers or others with advanced knowledge and specific goals to access the data, but does not serve the general education purposes of the public well.

### Option C: Do Nothing

If we decide not to handle the visualization or formatting of the data streams, the project would rely on pre-existing sources or on the raw, unformatted data that is requested. A few of the data streams have pre-existing visualizations and plots that are publicly accessible, and the module could simply redirect the user to those resources. Otherwise, the data could be presented to the user in whatever format it was received in, such as raw JSON, with no formatting or cleaning. For the seawater quality module, the API returns a massive json structure containing every single parameter that is measured at the HMSC, none of which are descriptively named. This would be practically unreadable for the average user who does not have access or extensive familiarity with the measurement system already.

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

- **Option B:** Maintainability increases with simpler design. Adding new data streams or updating the UI is simple as modules follow similar structure and components, and those would involve minimal stylistic content.

- **Option C:** Maintainability depends more heavily on external sources working properly, which may be completely out of the hands of the developers of this project.

### 4. Security

- **Option A:** Introducing third-party libraries and packages for visualizations or other features increases the risk of security incidents.

- **All Options:** All options rely on internal APIs for data, and it is critical to ensure that proper measures are taken to prevent exposing endpoints to the public.

### 5. Cost

- **Option A:** Development effort cost is highest, but likely manageable given the project timeframe and the existing options for creating charts and other components. The existing libraries and tools for creating visualizations, such as Recharts, provide premade, reusable, and modifiable React components with simple customization [4]. This should make the process of actually building the charts, graphs, and other visualizations relatively smooth and involve minimal custom component development. 

- **Option B:** This option should have minimal development cost, as the data may be left in it's original format or will be organized into basic tables which requires minimal effort to set up and can likely be done without having to make use of any external third-party tools or libraries.

- **Option C:** This option will require practically zero development cost. The maximum amount of effort that would be required would be in the case where the data is only accessible through some API or other format that needs to be parsed, such as the text file we get the weather data from. In this case, the implementation still only requires parsing the data into a format that is displayable and readable for a user.

### Uncertainties

- **Data Format:** Not every data source has a well-established method of receiving the data. The pumped seawater SCADA system is undergoing updates, and the data is currently being held on a server not directly accessible to us. The project partner is working on obtaining access, but it is not yet clear what the final data stream will look like. Similarly, the method of receiving weather station data on the CEOAS servers is currently unknown.

- **API Status/Endpoints:** The CORIOLIX system, the source of the restAPI containing the water parameter sensor data, is currently undergoing an update, and the new version may change the endpoints or structure of the API.

## Recommendation and Verification Plan

I would recommend going with option A. Though it is the more complex option, it is the one that best aligns with the goals and outcomes that we have determined for the project, especially in relation to the educational nature of the site. The level of complexity and cost, though higher than the other options, are still manageable under the constraints we have been given for time and resources. This approach emphasizes curiosity and exploration of the data for people of all ages.

In order to verify the success of our data visualizations, we can first analyze them against established frameworks and guidelines for creating effective visualizations to determine how well we have aligned with widely accepted best practices. It is important to keep these ideas in mind throughout the implementation process, but it is crucial to review our work after completion to ensure that we succeed. Reputable data visualization sources such as Tableau offer guidelines and best practices for making effective and helpful data visualizations which we can follow, such as chart selection, text usage, and color choice [2]. Accessibility guidelines are also important to follow in order to ensure that nobody is excluded from the information that our project provides. Organizations such as Harvard University provide guidelines to ensure that data visualizations are not only informative but also include accessibility features such as high contrast, labels, and alternate text [3].

Another way to verify the success of our data visualization approach is to perform user tests. We plan on conducting live user tests with the full product by presenting it to visitors at the CMS exhibit in the HMSC. We will observe user interactions with the tool, collecting metrics such as retention time, whether or not they complete the learning objectives, and the correctness of their answers, to determine how effective our project, and specifically the data visualization, is at conveying the information we want users to absorb. We may also conduct surveys to receive direct feedback from users and determine any areas of improvement that might exist. They can provide objective feedback on the system and its usability, as well as qualitative information such as how engaged they felt or how well they felt they understood the information, that can give us clues as to whether we have created a good user experience.

## Constraints

Constraints on the method of visualizing the data include the method by which we are able to receive the data, and the performance of the collection instruments. Because none of this data is being collected by our team, if the source or the organization behind it were to go down or change, we would need to adapt accordingly. All of the data we are accessing is collected directly at the HMSC and is owned by the HMSC and OSU, not by third parties. We are, however, facing a constraint on the SCADA system for the pumped seawater. While the data is collected by OSU, it is currently stored on a third party server owned by the company who installed the SCADA system. Our project partner is working with that organization to give us access to the data but we do not currently have a way to access it for the purposes of our project. We access the seawater quality data through the API of the CORIOLIX service, which is affiliated with OSU but is undergoing maintenance at the time of writing, so recent data is unavailable to access. We view both of these constraints as temporary issues and once they are resolved. The only third-party dependency we will be using for the data visualization is Recharts or an equivalent alternative. This tool is released under the MIT license, so we will be able to use it for our project [4].

## Delegation and Validation

All of the writing in this RFC was done without the assistance of AI, but Copilot was used to review and give suggestions for areas of improvement. AI tools were used when researching different data visualization options, which I validated by reviewing the sources that the AI cited to verify that the options it presented were accurate and valid.

## Decision

Proposed

## Sources
[1] Hatfield Marine Science Center. "Coastal Monitoring Station". *Hatfield Marine Science Center.* https://hmsc.oregonstate.edu/research/research-support/coastal-monitoring-station. Accessed 21 Nov. 2026.

[2] Tableau. "Data Visualization Tips and Best Practices". *Tableau*. https://www.tableau.com/visualization/data-visualization-best-practices. Accessed 22 Nov. 2026.

[3] Harvard University. “Data Visualizations, Charts, and Graphs.” *Accessibility.Huit.Harvard.Edu*, 2024, https://accessibility.huit.harvard.edu/data-viz-charts-graphs. Accessed 22 Nov. 2026.

[4] Recharts. "Recharts". *Recharts*. recharts.github.io. Accessed 22 Nov. 2026.

| Source | Feedback | Decision | Where or why |
| ------ | -------- | -------- | ------------ |
| Reviewer 1 and 2 | Make the verification plan more concrete | Accepted | Recommendation and Verification Plan: now includes evaluation and testing methodology, specific metrics we will collect, and objective frameworks we will follow |
| Reviewer 1 | Provide specific examples of the type of data that will be displayed | Accepted | Problem/Context: explicit describes the different data sources and their formats |
| Reviewer 2 and Instructor | Content section is vague | Accepted | Problem/Context: More specific information was added giving more background context for the project idea and needs. |
| Instructor | Include what 'modules' mean | Accepted | Problem/Context: Explanation of the project design and the idea behind modules is included in the context. |
| Instructor | Include reference section and citations | Accepted | Added cited information to strengthen arguments and context |



# RFC: Learning Objectives Scope

| Field | Value |
| --- | --- |
| Author | Levi Cook |
| Date | 2026-10-24 |
| Status | Proposed |
| Decision Date |  |
| Deciders |  |
| Superseded By | |

## Problem and Context

One of the major goals of this project is to ensure that the general population can learn about and interpret the Hatfield data. Including weather data, water quality, pumped seawater, and the multiple dock cameras. As it stands, Hatfield currently generate a lot of different data related to all of these sources. To someone who knows nothing about marine science and/or doesn't work in this field, a lot of this information could be uninteresting or unimportant. To ensure that our users are engaged with our web app, we need to select what information we want to both focus on and educate about.

On top of this, after selecting what information we deem as important, we then have to make sure that the information is digestible and understandable by users ages 8 and up. This will greatly dictate how we choose to display the data, what marine science topics we want to educate the users about, and the language in which we do this. We need to assume every user is at a different level of knowledge and familiarity, so our web app needs to be as accessible as possible.

While this isn't inherently a "technical" decision that needs to be made, the basis of all the UI we will create will be determined by the scope of the learning objectives we select and the methodology we deploy to make sure the users can achieve the learning objectives.

## Options

### Option A: Data Sandbox
In this scenario, we would provide this user with the ability to view all of the possible data streams and give them many options to do so. This would include creating very input heavy UI that allows users to generate and view the data they so desire in very specific ways. Or if they wish to view multiple streams and compare them, the UI would offer detailed ways to compare and contrast information from the data streams.

This could be very beneficial to any user who is very knowledgeable about marine science and just wants to learn about what Hatfields real world data is. This would also remove any decisions on which data we think could be excluded, as this framework would just give the user access to all of the available data streams. The goal of allowing users to explore and view Hatfield data in one place would also be solved very effectively.

The largest drawback of this option, is that users with less existing knowledge about marine science would be greatly overwhelmed. With so much data available, it makes it difficult to focus in on specific objectives. The large scale could also cause these kinds of users (likely children) to become quickly disinterested with app and end up not learning anything at all.

### Option B: Modular Learning

This option would involve separating the data streams and making decisions on what specifically the learning objective of each stream should be. This would include collaborating with our sponsor and potentially educators on what kinds of learning they believe are most important/beneficial for users. This method would also create a more modular design allowing users to view the data on stream at a time rather then all at the same time.

This option would be much more useful/beneficial for the general public/layman. The data will be narrowed in on specific objectives and the data will be given context that a user of ages 8 and up can understand what is being presented. The design will promote users to click through each stream and learn the objectives one by one promoting interactivity.

A limitation of this option is that users with a marine science background could find the website significantly less useful. While one of the goals of the project is to promote education, another goal was to integrate all of Hatfields live data into one place where people can view it. If we are limiting what data is displayed we would actively be working against this goal.

### Option C: Student and Expert Modes

This option would act as an extension/combination of options A and B. Modularity and simplicity would be provided to users that need it. However, there could be an option on the website to view an "expert" page that simply displays all of the data without extra context. This would require both options to be somewhat developed which would take up much more time.

The strongest benefit of this option is that it would satisfy both user groups. Those with no experience, and experts in the field. Kids would be able to take there time and view the modular learning objective sections, whereas experts could simply choose to see all of the live Hatfield data in a single place. Both of the main goals of the project would be held up.

The costs of this option would be time. We would need to not only develop UI centered around modularity regarding each data stream, but we would also have to develop a page that displays all of the data. In the process of having to do both of these things, it could end up making the end product worse.

### Option D: Do Nothing

This option would make the UI very easy. We would just create fetch requests in the backend and display the raw data streams. We wouldn't have to give it any context, or make it more readable.

The only benefit to this option would be that it would end up putting all of the data streams on a singular page. However, the cost would be that it would ruin any and all readability to the data. This would then in turn make it useless for all user types. Young users wouldn't have any ability to understand the data, and experienced users would have a hard time reading it.

## Analysis

Evaluating these options requires balancing public-facing usability against engineering overhead. Below is an analysis of the key technical dimensions across our proposed architectures, supported by standard web and IoT design patterns.

### 1. Performance

-   **Data Sandbox (Option A) & Dual-Mode (Option C):** Rendering multiple high-frequency data streams simultaneously—especially streaming video from the OSU underwater dock webcam alongside real-time time-series telemetry from CEOAS and SCADA servers—places a heavy load on the client browser. Without client-side downsampling or efficient state management, continuous polling or high-frequency WebSockets will cause UI stutter and high memory consumption, particularly on lower-end public kiosk tablets or mobile devices.
    
-   **Modular Learning (Option B):** By design, isolating views to a single stream or module per page load significantly reduces client-side resource consumption. Network requests are targeted only to the active module, preserving rendering performance.
    
-   **Do Nothing (Option D):** Minimal client-side processing, but poor perceived performance due to slow human interpretation of raw, unformatted data dumps.
    

### 2. Complexity

-   **Data Sandbox & Modular Learning (Options A & B):** Moderate complexity. Option A requires building robust multi-axis charting components and complex filtering logic. Option B requires authoring clear state machines for step-by-step educational flows, but keeps data views scoped.
    
-   **Dual-Mode (Option C):**  **High complexity.** Maintaining two distinct UI paradigms (a simplified pedagogical interface and an unconstrained telemetry dashboard) effectively doubles the frontend component tree, routing logic, and state management overhead.
    
-   **Do Nothing (Option D):** Lowest technical complexity, relying purely on pass-through API integration.
    

### 3. Maintainability & Forward-Compatibility

-   One of our explicit project objectives is **forward-compatible, modular, transferrable code**.
    
-   **Modular Learning (Option B):** Scores highest for maintainability. Encapsulating each data stream and its associated educational context into standalone components makes it straightforward to add a fifth data stream later or spin off a K-12 educational module without rewriting the core application.
    
-   **Dual-Mode (Option C):** Higher risk of technical debt. If timeline constraints compress development, the "expert" mode or the "student" mode is often neglected, leading to brittle, duplicated code paths.
    

### 4. Security & Network Boundaries

-   Integrating the **Pumped seawater SCADA-local Facilities server** introduces significant security considerations. SCADA systems govern physical facility hardware and must remain strictly protected behind institutional firewalls.
    
-   All options (A, B, and C) require a secure backend proxy layer (e.g., a Node.js or Python API gateway) to safely ingest internal SCADA telemetry and pass sanitized data to the public UI. Direct client-side access to internal SCADA endpoints is a critical security vulnerability and must be avoided regardless of the UI framework chosen.
    

### 5. Cost (Engineering Time & Resources)

-   **Option D:** Near-zero initial engineering cost, but fails project success criteria.
    
-   **Options A & B:** Moderate, manageable engineering cost aligned with a standard academic term or project sprint.
    
-   **Option C:** High cost-to-risk ratio. The overhead of building two completely different user experiences risks delivering a half-finished product that satisfies neither casual visitors nor experts fully.
    

### Evidence and Prior Art

-   **Educational Dashboards:** Prior art in public science communication (such as the _Exploratorium_ digital exhibits or NOAA education portals) demonstrates that uncurated data sandboxes yield high bounce rates among non-expert users, whereas guided, narrative-driven micro-modules significantly increase engagement duration for younger demographics (ages 8+).
    
-   **IoT Dashboard Patterns:** Real-time web applications combining video streams and sensor telemetry consistently rely on backend proxy caching and targeted stream subscription to prevent browser degradation.
    

### Known Uncertainties & Open Questions

-   **Network Latency & Access:** We are currently uncertain about the exact API rate limits and firewall permissions required to ingest live data from the local Facilities SCADA server and CEOAS servers.
    
-   **Target Audience Metrics:** We lack quantitative usage data on what percentage of our expected web traffic will consist of K-12/casual visitors versus marine science researchers, making the exact ROI of an "Expert Mode" (Option C) speculative.

## Recommendation and Verification Plan

Which option you propose and why it wins the analysis above. Then, concretely: how will the team know it worked? List the tests, metrics, or acceptance criteria that would detect failure, and when they will be checked.

I propose going with option B. As we have continue talks with our Sponsor, while we still have a lot of creative control over the project, education seems to be a higher priority. Designing a more modular and learning focused web application, I think we would achieve more engagement and be able to teach more people about marine sciences. While I think having an expert mode, or a mode where all of the data could just be read would be very useful for knowledgeable users. The larger majority of our userbase will consist of users that are unfamiliar with the meaning of these data streams, and will require more context/information.

I believe we should test the success of this decision by doing field tests with our product. We should go to Hatfield with prototypes of our website to see if this design choice is both enjoyed by users and proffered.
## Constraints

Possible constraints for this decision could be what our sponsor and any educators decide should be the "learning objectives". Any decision from these parties will likely constrain/decide for us how we modularize the streams and what information/context we add to them.

## Delegation and Validation
Currently, all that has been done is I have provided Gemini with the 4 options and prompted it to analyze them after also being provided the project description listed on the Capstone Website.

## Decision

Proposed.

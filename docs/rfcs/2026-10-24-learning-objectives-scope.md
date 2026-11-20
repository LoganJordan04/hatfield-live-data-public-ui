# RFC: Learning Objectives Scope

| Field         | Value      |
| ------------- | ---------- |
| Author        | Levi Cook  |
| Date          | 2026-11-19 |
| Status        | Proposed   |
| Decision Date |            |
| Deciders      |            |
| Superseded By |            |

## Problem and Context

This project is being requested by Oregon State University's Hatfield Marine Science Center (Hatfield). This facility is based in Newport, OR and is "Oregon State University's coastal campus for research, education, and outreach in marine sciences" [1]. This project will focus on the outreach portion of the facility, creating a web application to help educate users about marine life through Hatfield's own live data they collect in the facility. One of the major goals of this project is to ensure that the general population can learn about and interpret the Hatfield data. Including weather data, water quality, pumped seawater, and the multiple dock cameras. As it stands, Hatfield currently generates a lot of different data related to all of these sources. To someone who knows nothing about marine science and/or doesn't work in this field, a lot of this information could be uninteresting or unimportant. To ensure that our users are engaged with our web app, we need to select what information we want to both focus on and educate about.

On top of this, after selecting what information we deem as important, we then have to make sure that the information is digestible and understandable by users ages 8+. This will greatly dictate how we choose to display the data, what marine science topics we want to educate the users about, and the language in which we do this. We need to assume every user is at a different level of knowledge and familiarity, so our web app needs to be as accessible as possible.

While this isn't inherently a "technical" decision that needs to be made, the basis of all the UI we will create will be determined by the scope of the learning objectives we select and the methodology we deploy to make sure the users can achieve the learning objectives.

## Options

### Option A: Data Sandbox

In this scenario, we would provide this user with the ability to view all of the possible data streams and give them many options to do so. This would include creating very input heavy UI that allows users to generate and view the data they so desire in very specific ways. Or if they wish to view multiple streams and compare them, the UI would offer detailed ways to compare and contrast information from the data streams.

This could be very beneficial to any user who is very knowledgeable about marine science and just wants to learn about what Hatfield's real world data is. This would also remove any decisions on which data we think could be excluded, as this framework would just give the user access to all of the available data streams. The goal of allowing users to explore and view Hatfield data in one place would also be solved very effectively.

The largest drawback of this option, is that users with less existing knowledge about marine science would be greatly overwhelmed. With so much data available, it makes it difficult to focus in on specific objectives [2]. A large scale could also overwhelm non technical users and make them disinterested in the app.

### Option B: Modular Learning

This option would involve separating the data streams and making decisions on what specifically the learning objective of each stream should be. This would include collaborating with our sponsor and potentially educators on what kinds of learning they believe are most important/beneficial for users. This method would also create a more modular design allowing users to view the data one stream at a time rather than all at the same time. Currently, we have been given some of these learning modules but they are still largely incomplete and further communication will need to be done to see this option through.

This option would be much more useful/beneficial for the general public/layman. The data will be narrowed in on specific objectives and the data will be given context that a users 8+ can understand what is being presented. The design will promote users to click through each stream and learn the objectives one by one promoting interactivity. This fits how people tend to learn in informal settings like museums and science centers, where learning is voluntary and driven by the learner's own interests [3], and it follows the progressive disclosure pattern of showing basics first and deferring advanced detail [4].

A limitation of this option is that users with a marine science background could find the website significantly less useful. While one of the goals of the project is to promote education, another goal was to integrate all of Hatfield's live data into one place where people can view it. If we are limiting what data is displayed we would actively be working against this goal.

### Option C: Student and Expert Modes

This option would act as an extension/combination of options A and B. Modularity and simplicity would be provided to users that need it. However, there could be an option on the website to view an "expert" page that simply displays all of the data without extra context. This would require both options to be somewhat developed which would take up much more time.

The strongest benefit of this option is that it would satisfy both user groups. Those with no experience, and experts in the field. Kids would be able to take their time and view the modular learning objective sections, whereas experts could simply choose to see all of the live Hatfield data in a single place. Both of the main goals of the project would be held up.

The costs of this option would be time. We would need to not only develop UI centered around modularity regarding each data stream, but we would also have to develop a page that displays all of the data. In the process of having to do both of these things, it could end up making the end product worse.

### Option D: Do Nothing

If we were to do nothing, Hatfield would continue to have all its data displayed on separate web pages. This would make all the data difficult to access and not provide any learning possibilities for it. No new web application would be built, and there would be no exhibit for users to interact with at Hatfield.

## Analysis

Evaluating these options requires balancing public-facing usability against engineering overhead. Below is an analysis of the key technical dimensions across our proposed architectures, supported by the sources cited throughout and listed at the end.

### 1. Performance

- **Data Sandbox (Option A) & Dual-Mode (Option C):** Rendering multiple high-frequency data streams simultaneously—especially streaming video from the OSU underwater dock webcam alongside real-time time-series telemetry from CEOAS and SCADA servers—places a heavy load on the client browser. Without client-side downsampling or efficient state management, continuous polling or high-frequency WebSockets will cause UI stutter and high memory consumption, particularly on lower-end public kiosk tablets or mobile devices.

- **Modular Learning (Option B):** By design, isolating views to a single stream or module per page load significantly reduces client-side resource consumption. Network requests are targeted only to the active module, preserving rendering performance.

- **Do Nothing (Option D):** n/a

### 2. Complexity

- **Data Sandbox & Modular Learning (Options A & B):** Moderate complexity. Option A requires building robust multi-axis charting components and complex filtering logic. Option B requires authoring clear state machines for step-by-step educational flows, but keeps data views scoped.

- **Dual-Mode (Option C):** **High complexity.** Maintaining two distinct UI paradigms (a simplified pedagogical interface and an unconstrained telemetry dashboard) effectively doubles the frontend component tree, routing logic, and state management overhead.

- **Do Nothing (Option D):** n/a

### 3. Maintainability & Forward-Compatibility

- One of our explicit project objectives is **forward-compatible, modular, transferrable code**.

- **Modular Learning (Option B):** Scores highest for maintainability. Encapsulating each data stream and its associated educational context into standalone components makes it straightforward to add a fifth data stream later or spin off a K-12 educational module without rewriting the core application. Each data stream could have it's own seperate module both in the code and on the web app making it easy to add new features and fix any bugs.

- **Dual-Mode (Option C):** Higher risk of technical debt. If timeline constraints compress development, the "expert" mode or the "student" mode is often neglected, leading to brittle, duplicated code paths.

### 4. Security & Network Boundaries

- Integrating the **Pumped seawater SCADA-local Facilities server** introduces significant security considerations. SCADA systems govern physical facility hardware and must remain strictly protected behind institutional firewalls; NIST's guidance on operational technology security covers the threats, vulnerabilities, and countermeasures for systems like this [5].

- All options (A, B, and C) require a secure backend proxy layer (e.g., a Node.js or Python API gateway) to safely ingest internal SCADA telemetry and pass sanitized data to the public UI. Direct client-side access to internal SCADA endpoints is a critical security vulnerability and must be avoided regardless of the UI framework chosen.

### 5. Cost (Engineering Time & Resources)

- **Option D:** Near-zero initial engineering cost, but fails project success criteria.

- **Options A & B:** Moderate, manageable engineering cost aligned with a standard academic term or project sprint.

- **Option C:** High cost-to-risk ratio. The overhead of building two completely different user experiences risks delivering a half-finished product that satisfies neither casual visitors nor experts fully.

### Evidence and Prior Art

- **Cognitive Load:** Cognitive load theory holds that working memory is limited, and that when a learning task demands too much of it, learning suffers [2]. A sandbox that shows every stream at once risks this overload for non-expert users, whereas a modular design introduces one stream at a time.

- **Informal Science Learning:** The National Research Council's review of science learning in settings like museums and science centers describes these experiences as voluntary, interest-driven, and open-ended, and finds they can be tailored to learners from very different backgrounds [3].

- **Progressive Disclosure:** A standard interaction design pattern recommends showing basic information first and deferring advanced features to a secondary view, while cautioning that it should be based on observed user behavior [4]. This supports a modular first release, with an expert view as a possible later addition.

### Known Uncertainties & Open Questions

- **Network Latency & Access:** We are currently uncertain about the exact API rate limits and firewall permissions required to ingest live data from the local Facilities SCADA server and CEOAS servers. As of 11/19 we also have no concrete timeline on when we could have access to the SCADA servers that we were originally supposed to integrate into the app. 

- **Target Audience Metrics:** We lack quantitative usage data on what percentage of our expected web traffic will consist of K-12/casual visitors versus marine science researchers, making the exact ROI of an "Expert Mode" (Option C) speculative.

## Recommendation and Verification Plan

I propose going with option B. As we have continue talks with our Sponsor, while we still have a lot of creative control over the project, education seems to be a higher priority. Designing a more modular and learning focused web application, I think we would achieve more engagement and be able to teach more people about marine sciences [3]. While I think having an expert mode, or a mode where all of the data could just be read would be very useful for knowledgeable users. The larger majority of our userbase will consist of users that are unfamiliar with the meaning of these data streams, and will require more context/information.

I believe we should test the success of this decision by doing field tests with our product. We should go to Hatfield with prototypes of our website to see if this design choice is both enjoyed by users and preferred. While asking users about the website we will have a survey prepared asking users about how much they enjoyed the project, if they would interact with it again, if they saw it on display would they use it, and if they learned anything new. Each question will be asked on a scale of 1-5 so we can quantify the data. Then we will decide on criteria that will be considered failures. For example if on average users said they enjoyed the app only scores a 2/5 this would be a failure. Or if when asked if they learned anything new scored 2/5 this would be a failure.

## Constraints

Possible constraints for this decision could be what our sponsor and any educators decide should be the "learning objectives". Any decision from these parties will likely constrain/decide for us how we modularize the streams and what information/context we add to them.

## Delegation and Validation

Currently, all that has been done is I have provided Gemini with the 4 options and prompted it to analyze them after also being provided the project description listed on the Capstone Website. The sources cited in this RFC were added in a later revision and were located with the help of Claude.

## References

[1] Oregon State University, "About," Hatfield Marine Science Center. https://hmsc.oregonstate.edu/about

[2] J. Sweller, J. J. G. van Merriënboer, and F. Paas, "Cognitive Architecture and Instructional Design: 20 Years Later," *Educational Psychology Review*, vol. 31, pp. 261-292, 2019. https://link.springer.com/article/10.1007/s10648-019-09465-5

[3] National Research Council, *Learning Science in Informal Environments: People, Places, and Pursuits*. Washington, DC: National Academies Press, 2009. https://doi.org/10.17226/12190

[4] J. Nielsen, "Progressive Disclosure," Nielsen Norman Group. https://www.nngroup.com/videos/progressive-disclosure/ (see also https://ixdf.org/encyclopedia/progressive_disclosure.html)

[5] K. Stouffer et al., *Guide to Operational Technology (OT) Security*, NIST Special Publication 800-82 Rev. 3, 2023. https://doi.org/10.6028/NIST.SP.800-82r3

## Decision

Proposed.

| Source | Feedback | Decision | Where and Why |
| ------ | -------- | -------- | ------------- |
| Reviewer 1 and 2 | Explain what Hatfield is/who the stakeholder is | Accept | Add this to the problem and context section. This is something that would be more helpful and would explain more of the problem. For example that this is an educational facility provides more context. |
| Reviewer 1 | Add a modular option that shows the higher level information if wanted | Reject | This exists and is present in option C |
| Reviewer 1 and 2 | The verification plan is subjective. There is no way to quantify the feedback | Accept | Verification plan. Adding a specific test/method of feedback like a survey for individuals would quantify their data. This would then allow us to set objective measurements of success/failure. |
| Reviewer 2 | Do nothing option isn't actually doing anything. | Accept | Option D. I originally still wrote it so we wrote UI but if we were to truly do nothing we wouldn't make anything. |
| Reviewer 2 | Add cited sources | Accept | Citations added throughout the RFC, with a References list at the end, to help strengthen my argument. |
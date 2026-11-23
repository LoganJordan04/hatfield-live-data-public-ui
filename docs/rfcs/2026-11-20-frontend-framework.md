# RFC: Frontend Framework

| Field         | Value        |
| ------------- | ------------ |
| Author        | Logan Jordan |
| Date          | 2026-11-20   |
| Status        | Proposed     |
| Decision Date |              |
| Deciders      |              |
| Superseded By |              |

## Problem and Context

Hatfield Marine Science Center (HMSC) is Oregon State University's coastal campus in Newport, Oregon. Its Visitor Center is a public aquarium for all ages, with a focus on families and school field trips [1]. This project builds a public website for those visitors. The official audience is curious visitors aged 8 and up. The site brings four live data streams into one place. The first is a weather station. The second is water quality data from a mooring in the Yaquina estuary, which measures salinity, temperature, tide depth, pH, dissolved oxygen, nitrate, and turbidity [2]. The third is pumped seawater data from a facilities server. The fourth is a live underwater webcam at the dock. Visitors should explore each stream, wonder how the streams connect, and learn what the data means through learning modules.

This RFC decides how the team builds the interface code. The options are to continue with React and TypeScript, replace it with plain JavaScript, use React only for interactive parts, or leave the choice open. The decision affects the whole front end. At the time of writing, `src/` holds about 1,300 lines in 32 files, nearly all React components and hooks. Switching later would mean rewriting all of it while teammates keep adding modules. Handoff adds urgency, because it requires that HMSC staff can add a stream or change a source without a rewrite. Doing nothing has a visible cost today. The team inherited React from the starter, and not everyone is familiar with it (`docs/risks.md`, R-3).

## Options

### Option A: Continue with React and TypeScript

The team builds every new module as React components. The header, buttons, data page elements, and learning page elements all become shared components, and a fifth stream would follow the existing pattern. The costs are the learning curve for those new to React and the upkeep of dependencies. The consequence is a single style across the codebase, with type checks and accessibility lint rules already configured. This option is the right choice if the views will change independently and HMSC staff will keep building on them.

### Option B: Replace React with plain JavaScript

The team keeps Vite but rewrites the interface in JavaScript, HTML, CSS, and browser APIs. This removes the framework from the bundle and lowers the dependency count. The costs are a full rewrite of 32 files (at the time of writing), loss of the React-based accessibility lint rules, and a hand-made convention for updating the page and sharing state. This option is the right choice if the final interface turns out to be mostly static pages with little shared state.

### Option C: Hybrid, with React only for interactive panels

The team uses React for parts that hold state, such as the map and data panels, and writes static content as plain HTML and JavaScript. The React documentation supports this path, in which components mount into chosen elements on an existing page [3]. The costs are two mental models, two sets of conventions, and mount points that every contributor must understand. The consequence is a smaller React footprint on pages with no live data. This option is the right choice if only a couple of elements need state and the rest of the site stays static.

### Option D: Do nothing

The team keeps the starter as it is and lets each person build in their own style. The cost is the drift described under Problem and Context, plus a later cleanup once the styles collide, and handoff to HMSC staff gets harder with every module. This option is the right choice only for a throwaway prototype, and the project has moved past that stage.

## Analysis

### Performance

The current production build produces one JavaScript file of 651.94 kB (208.02 kB compressed) and one CSS file of 16.86 kB, and Vite warns that the chunk exceeds 500 kB. A bare page with React, React DOM, and React Router, built with the same Vite version, produces 257.59 kB (81.88 kB compressed). I ran both builds. The framework therefore accounts for roughly 40% of the JavaScript. Much of the remainder is the map, because `src/map/assets/hatfield-map.svg` is 360.64 kB and `src/map/InteractiveMap.tsx` imports it as raw text. The map can be optimized slightly, but removing React would not remove it. Option B would shrink the bundle, but I did not build it, so I cannot say by how much. Requirement NFR-1 asks for load in under two seconds (`docs/requirements.md`), and I have not measured load time on any option.

### Complexity and maintainability

React lets components share state by moving it to their closest common parent [4]. That pattern supports comparing streams and adding a fifth stream. The cost shows up in the current code. `src/map/useMapViewport.ts` triggers the `set-state-in-effect` error, and `src/map/InteractiveMap.tsx` triggers an `exhaustive-deps` warning. Both passed CI because CI runs tests and the build but not lint (`.github/workflows/ci.yml`). These findings show that tooling catches mistakes only when the team runs it. Option B would remove these hook mistakes but would replace them with hand-written update logic, which no linter in the repository checks. Option C inherits both sets of problems and adds a choice, for every new feature, about which side it belongs on.

### Connecting the streams

The site promises that visitors can wonder how streams connect, so the framework must support views that read from more than one stream. Today each page owns its own fetch and state (`src/pages/weather.tsx`), and the router discards that state on navigation. A comparison view needs a shared layer above the pages, either a provider holding the latest reading from each stream or a dedicated comparison route that fetches both. React supports the first pattern directly through lifted state [4]. Plain JavaScript can do the same with a small store, but the team would design and test it.

### Accessibility

No option makes the site accessible by itself. WCAG 2.1 requires that all functionality work from a keyboard [5] and that color never be the only way to convey information [6]. The repository checks part of this with `eslint-plugin-jsx-a11y` (`eslint.config.js`) and with role-based queries in `src/test/routetests.test.tsx`. Those checks apply only to JSX, so Option B would drop them unless the team found replacements. I have not tested keyboard or touch use.

### Cost and licensing

All main dependencies are free and open source. The installed package metadata lists React, React DOM, React Router, Vite, and Tailwind CSS under the MIT license, and Lucide React under ISC. No option needs a paid service.

### Uncertainty

I did not build a plain JavaScript or hybrid version, so the comparisons for Options B and C rest on the existing code and the cited documentation. I have not measured load time, run an accessibility audit, or tested with visitors. React skill among HMSC staff is unknown, which affects how much weight handoff deserves.

## Recommendation and Verification Plan

I recommend Option A. The analysis supports it for three reasons. The code already exists in React, so Options B and C cost a rewrite or a split that the evidence does not justify. The framework is about 40% of the bundle, so removing it saves less than it first appears. And lifted state gives the streams a practical path to shared views [4]. Option C would become the better choice if later work showed that most pages stay static.

The team can run this plan as written, and each check can fail.

1. **Automated checks.** `npm run lint`, `npm run typecheck`, `npm run test:run`, and `npm run build` all finish with zero errors, and CI runs all four.
2. **Fifth stream test.** The team adds a mock fifth stream. Pass: the change adds one page file, one entry in `src/map/mapAnchors.ts`, and one route in `src/App.tsx`, and `git diff --stat` shows no edits to existing page files.
3. **Offline test.** A Vitest test makes one stream's fetch fail. Pass: the other pages still render, and the failed page shows a text message in a `role="status"` element that names the problem without relying on color.
4. **Keyboard and touch test.** A teammate tabs through the home page with no mouse. Pass: focus reaches every marker and map control in reading order, Enter opens each module, and every control is operable on a phone or tablet. An automated scan with axe-core must report zero serious or critical violations.
5. **Performance test.** Lighthouse runs on the `npm run preview` build with the desktop preset. Pass: largest contentful paint under 2.0 seconds and compressed JavaScript at or below 250 kB, against 208 kB today.
6. **Comparison view test.** A prototype view shows two streams side by side, built on lifted state. Pass: it needs no change to either stream's page file other than exporting its data.
7. **Visitor test.** Five visitors age 8 or older try three tasks at the HMSC Visitor Center: find the current water temperature, open the webcam, and say how two streams might connect. Pass: at least four of five complete each task unaided, and the average ease rating is 4 or higher on a scale of 1 to 5.
8. **Check against the alternative.** One teammate builds the webcam module and one map marker in plain JavaScript within a four-hour limit. This test checks whether Option A was the better choice, which the other checks cannot show.
9. **Release scan.** Before each release, the team lists the production dependency licenses and searches the `dist/` folder for internal hostnames and addresses. Pass: every license is on the approved list in Constraints, and the search finds no matches.

The team reopens this RFC if two or more of checks 2, 4, 5, and 7 fail after one round of fixes, or if the plain JavaScript version in check 8 meets checks 3 and 4 with under 70% of the React code. Check 4 repeats after each added stream.

## Constraints

Three constraints bind this decision, and none rules out an option. The first is licensing. The dependencies use the MIT and ISC licenses, so the team only has to keep their license notices in distributed code. Check 9 lists the licenses before each release, and any charting library added later needs the same review.

The second is confidentiality. It treats the pumped seawater and Yaquina water quality systems as internal sources and forbids internal hostnames, credentials, and `VITE_` secrets in code. Every option ships its code to the browser, so the recommendation carries one condition: only public or approved values may appear in the bundle. Check 9 searches the production build for internal hostnames.

The third is Oregon State University branding, because the site represents an OSU campus. The brand guide covers the logo, cobranding, color palette, and typography, and official logo files and fonts come from university request forms [7]. The OSU logo is a registered trademark that cannot be altered, and units may not create their own logos [8]. These rules govern assets and styling, not the framework, so every option can meet them. The recommendation carries one condition: the team uses official logo files and does not recolor or redraw them. The guide pages do not describe an approval process, so the team confirms with the project partner whether a branding review is required. Check 9 includes a comparison of logos and colors against the guide.

## Delegation and Validation

Claude helped with the first draft of this RFC, which analyzed the options from the project description. For this final draft I gave Claude the draft, the rubric, and the reviewer feedback. Claude ran tests and build commands, measured the bundles, searched the cited sources, and gave revision suggestions.

Three checks made this delegation reasonable. The repository's own commands produced every project number, so anyone can repeat them. Each outside claim comes from a credible source and appears in the References. A teammate reviews this RFC before the team decides.

I validate three points myself, because each is costly if wrong. First, I rerun the build, lint, and test commands and the bare React build, because the 40% figure and the 250 kB limit both depend on these baselines. Second, I compare the stream and audience descriptions against what the sponsor has told us, because a wrong description misleads every reader. Third, I check the confidentiality constraints and the sponsor's guidance, because exposing internal details in a public repository can't be undone. I haven't built the plain JavaScript version, measured load time, or tested with visitors.

## References

[1] Oregon Sea Grant, "Hatfield Marine Science Visitor Center," Oregon State University. [Online]. Available: https://seagrant.oregonstate.edu/visitor-center. Accessed: Nov. 20, 2026.

[2] Hatfield Marine Science Center, "Climate-Grade Water Quality Instruments," Oregon State University. [Online]. Available: https://hmsc.oregonstate.edu/coastal-monitoring-station/climate-grade-water-quality-instruments. Accessed: Nov. 20, 2026.

[3] Meta Open Source, "Add React to an Existing Project," React Documentation. [Online]. Available: https://react.dev/learn/add-react-to-an-existing-project. Accessed: Nov. 20, 2026.

[4] Meta Open Source, "Sharing State Between Components," React Documentation. [Online]. Available: https://react.dev/learn/sharing-state-between-components. Accessed: Nov. 20, 2026.

[5] World Wide Web Consortium, "Understanding SC 2.1.1: Keyboard (Level A)," Web Content Accessibility Guidelines (WCAG) 2.1. [Online]. Available: https://www.w3.org/WAI/WCAG21/Understanding/keyboard. Accessed: Nov. 20, 2026.

[6] World Wide Web Consortium, "Understanding SC 1.4.1: Use of Color (Level A)," Web Content Accessibility Guidelines (WCAG) 2.1. [Online]. Available: https://www.w3.org/WAI/WCAG21/Understanding/use-of-color. Accessed: Nov. 20, 2026.

[7] Oregon State University, "Visual Identity," Brand Guide, University Relations and Marketing. [Online]. Available: https://communications.oregonstate.edu/brand-guide/visual-identity. Accessed: Nov. 20, 2026.

[8] Oregon State University, "Logo Guidelines," Brand Guide, University Relations and Marketing. [Online]. Available: https://communications.oregonstate.edu/brand-guide/visual-identity/logo-guidelines. Accessed: Nov. 20, 2026.

## Decision

Proposed.

## Revision Log

| Source     | Feedback                                                                       | Decision | Where and why                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Reviewer 1 | The opening never explains what the streams are                                | Changed  | Problem and Context, paragraph 1. Each of the four streams is now named and described.                                                           |
| Reviewer 1 | The opening never says what goes wrong if the team picks badly                 | Changed  | Problem and Context, paragraph 2. They state the rewrite cost, the handoff risk, and the drift already in the code.                              |
| Reviewer 1 | No option mixes React for panels with plain JavaScript elsewhere               | Changed  | Options, new Option C (hybrid), with costs and the condition that favors it.                                                                     |
| Reviewer 1 | The draft never says how the four streams connect to each other                | Changed  | Analysis, "Connecting the streams," plus Problem and Context paragraph 1 and verification check 6.                                               |
| Reviewer 1 | The verification plan shows React works, not that it was the better choice     | Changed  | Recommendation and Verification Plan, check 8 and the reopening rule, which compare against a plain JavaScript build.                            |
| Reviewer 1 | Explain in the first paragraph why the choice matters and what switching costs | Changed  | Problem and Context, paragraph 2 gives the cost of switching in files and lines. Paragraph 1 names the streams, as the first change above notes. |
| Reviewer 2 | Add actual user testing to catch usability problems                            | Changed  | Recommendation and Verification Plan, check 7, a visitor test with five visitors.                                                                |
| Reviewer 2 | Make the verification plan measurable, with specific success criteria          | Changed  | Recommendation and Verification Plan, checks 1 to 9, each with a numeric or countable pass condition.                                            |
| Reviewer 3 | Add detail about what the livestreams show                                     | Changed  | Problem and Context, paragraph 1, which lists the measured parameters [2] and the dock webcam.                                                   |
| Reviewer 3 | Add detail about who the users are, officially                                 | Changed  | Problem and Context, paragraph 1, which states the age 8 and up audience, families, and school field trips [1].                                  |
| Reviewer 3 | Add a reference section with correct bibliographic formatting                  | Changed  | References in IEEE style, cited by number in the text.                                                                                           |
| Reviewer 3 | The writing reads like an outline, for example sentence 2 of Constraints       | Changed  | Constraints and the whole document were rewritten as connected prose. Each constraint now says what it changes in the decision.                  |

# RFC: Frontend Framework

| Field         | Value        |
| ------------- | ------------ |
| Author        | Logan Jordan |
| Date          | 2026-10-25   |
| Status        | Proposed     |
| Decision Date |              |
| Deciders      |              |
| Superseded By |              |

## Problem and Context

Hatfield's four live streams give visitors a fun way to explore what's happening around the marine center and wonder how the streams might connect. We want the site to make sense to someone who's never studied marine science, including a curious eight-year-old, while still giving adults something interesting to explore. Simple explanations and short bits of context can help people understand a reading without burying them in text. The site should feel welcoming and work with different devices and input methods.

Our plan is a map with markers visitors can select to learn about each stream. The layout may change, but we need interactive panels that feel like parts of the same site. Keeping each stream in its own module should make it easier to change a source or add another later. We need to decide whether React will help organize these pieces or whether vanilla JavaScript is enough. The repo already has a React and TypeScript starter, so choosing now gives the team a shared starting point.

## Options

### Option A: Continue with React and TypeScript

Build on the scaffold. React components can represent markers, data panels, fullscreen views, and shared messages. Each stream can manage its own data and status while following the same patterns. This should make interactions easier to reuse and a fifth stream easier to add. The tradeoff is learning React and maintaining its dependencies. This fits if we expect the views to change independently and want HMSC staff to keep building on them.

### Option B: Replace React with vanilla JavaScript

Keep Vite but build with JavaScript, HTML/CSS, and browser APIs. This means fewer dependencies and can work well for a mostly static page. As we add markers, panels, fullscreen controls, loading messages, and keyboard support, we'd need our own conventions for updating the page and organizing state. This fits if the final interface turns out simpler than we expect.

### Option C: Do nothing

Keep the starter and put off the decision. That saves time now, but teammates may build in different ways or have to redo work later. Waiting could make sense during a short prototype if we're still unsure about the interface. Since we have an interactive direction and a React starter, agreeing on an approach now seems useful.

## Analysis

Either approach should be fast enough for four streams. React adds some JavaScript; vanilla has less framework overhead. Waiting for data or the webcam is more likely to affect visitors than the framework. We haven't benchmarked either option, so can't claim one is faster. React updates the interface from component state; vanilla can update the page directly. Both can handle refreshing data ([React: Managing State](https://react.dev/learn/managing-state), [MDN: DOM introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)).

I think React has an advantage for this interface as we can reuse markers, panels, and status messages while keeping each stream's view separate. Vanilla can work too, but we'd have to agree on and maintain our own update patterns. Neither option makes a site accessible automatically. Markers should work by keyboard and touch; panels need clear controls, a way to return focus when closed, and status cues that don't rely on color. Linting can catch some markup problems, but we'll still need to review the interface against WCAG 2.1 AA.

The repo already has React, TypeScript, Vite, and a small starter UI. Staying with React keeps the type, build, and accessibility checks already set up. Switching to vanilla means removing React and adjusting lint, but we'd still need to organize stream data and handle failures. Either way, private sources and credentials must stay out of public browser code.

## Recommendation and Verification Plan

I recommend Option A. React fits the interactive panels we have in mind, gives each stream its own view, and builds on the starter already in the repo. We can also reuse loading and offline messages across the site.

We'll know more after building a marker and panel. It should open, close, expand to fullscreen, and return visitors to the map. Markers should work by keyboard and touch; closing a panel should return focus to its marker. If one stream is offline, the others should still work, with a message that doesn't rely on color. We should try adding a mock fifth stream without rewriting existing views. The repo has lint, typecheck, and build commands, but they haven't been run for this RFC. A teammate should review the work, and we can ask a visitor or educator for feedback when possible.

Repeat the accessibility review after each stream is added and before presenting to public visitors.

## Constraints

The browser should only receive public or approved data. Keep secrets and internal system details out of public code. The interface displays data; it doesn't control equipment. React and Vite are open source, so no paid service is needed.

## Delegation and Validation

Claude helped analyse the options. I didn't build a prototype or run checks. I checked the goals against `AGENTS.md`, the repo, and the public project description. A teammate should review the proposal before the team decides. We haven't built a prototype or done a user study yet.

## Decision

Proposed.

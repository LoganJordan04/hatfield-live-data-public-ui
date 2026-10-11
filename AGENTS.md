# AGENTS.md

Context for AI coding tools working in this repo.
Link to docs rather than duplicating them. Per-tool files (e.g. CLAUDE.md) should just point here.

## Project
A web UI for Hatfield Marine Science Center (HMSC) that showcases four live
data streams in one place, so visitors can explore them and wonder how they
might be related.

| Stream | Source | Host |
|---|---|---|
| Weather station | CEOAS | CEOAS server |
| Yaquina water quality | hmsc-cms.dri.oregonstate.edu/plots/flowthrough/ | Data Center VM |
| Pumped seawater (SCADA) | Facilities | Local Facilities server |
| Underwater dock webcam | webcam.oregonstate.edu/krabby | OSU webcam |

**Mission:** make marine science accessible and relevant to the public.

**Audience:** anyone age 8 and up. Design and copy should be understandable
by a curious 8-year-old and still respectful to adults.

## Goals
- User-friendly, inviting UI; inclusive design (accessibility is a
  requirement, not polish).
- Forward-compatible, modular, transferrable code. HMSC staff should be able
  to hand this off, add a fifth stream, or swap a source without a rewrite.
- Stretch: K-12 educational component; end-user studies with SeaGrant
  educators or school classrooms.

## Stack
TBD: Currently undecided, preliminary discussions of using Typescript and REACT but nothing set in stone.
TODO: Update this when decided and code is beginning to be written.

## Conventions
- UI must meet WCAG 2.1 AA: keyboard navigable, sufficient contrast, alt
  text/captions, no information conveyed by color alone.
- Plain-language labels. Explain units and terms (e.g. "salinity: how salty
  the water is") rather than assuming jargon is known.
- Handle stream outages gracefully: show a friendly "this sensor is offline"
  state, never a blank panel or raw error.

## Confidentiality boundary
- Never commit credentials, API keys, tokens, or `.env` files.
- Do not commit internal hostnames, IPs, network details, or SCADA/Facilities
  system specifics. Use environment variables and placeholder config
  (`.env.example`).
- Treat the SCADA/Facilities and Data Center VM sources as internal. Access
  is read-only unless the stream owner explicitly approves otherwise.
- Don't paste non-public data or internal documents into AI tools.
- If unsure whether something is sensitive, ask the team rather than guess.

## To be added once code exists (TODO)
| Section | Owner |
|---|---|
| Build, run, and test commands | Alex |
| Directory layout / module map | JP |
| Deployment and hosting notes | Levi |
| Accessibility and design guidelines | Logan |

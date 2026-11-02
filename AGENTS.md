# AGENTS.md

Project context and working instructions for coding agents. Keep this file useful across tools; per-tool instruction files should point here instead of duplicating it. See [CONTRIBUTING.md](CONTRIBUTING.md) for contributor workflow and [README.md](README.md) for the human quick start.

## Project

This is a public-facing web UI for Hatfield Marine Science Center (HMSC). It brings four live data streams together so visitors can explore the readings and wonder how they might be related:

- Weather station
- Yaquina water quality
- Pumped seawater
- Underwater dock webcam

The mission is to make marine science accessible and relevant to the public. The audience includes curious visitors age 8 and up; use plain language that is welcoming to children and respectful to adults.

## Goals

- Make the experience inviting and inclusive; accessibility is a requirement.
- Keep code modular and transferable so HMSC staff can maintain it, add a stream, or change a source without a rewrite.
- Explain measurements, units, and unfamiliar terms in plain language.
- Handle unavailable streams with a friendly offline state instead of a blank panel or raw error.

## Stack and layout

- React 19, TypeScript, Vite 8, and Tailwind CSS 4.
- `src/`: application source.
- `public/`: static assets served by Vite.
- `docs/`: project design and decision records.
- `npm` is the package manager; use the committed `package-lock.json` with `npm ci` for a clean install.

## Setup and commands

Use Node.js, matching the repository's CI configuration.

```sh
npm ci
npm run dev
```

Available checks and development commands:

| Command                | Purpose                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| `npm run lint`         | Run ESLint, including configured accessibility rules             |
| `npm run typecheck`    | Check TypeScript without emitting files                          |
| `npm run format:check` | Check formatting with Prettier                                   |
| `npm run build`        | Run TypeScript build checks and create the Vite production build |
| `npm run preview`      | Preview the production build locally                             |

CI runs `npm ci` and `npm run build` for pull requests targeting `main`. There is currently no test runner or test script in `package.json`; do not assume `npm test` exists. See [CONTRIBUTING.md](CONTRIBUTING.md) for the current Definition of Done and pull request guidance.

## Code and accessibility conventions

- Follow the existing TypeScript, React, and ESLint patterns; TypeScript strict mode is enabled.
- Keep labels and explanations understandable to a curious 8-year-old. Explain terms such as salinity and include units where useful.
- Meet WCAG 2.1 AA: support keyboard use, sufficient contrast, meaningful alt text or captions, and do not rely on color alone.
- Preserve graceful loading, empty, and offline states for data streams.
- Update relevant documentation when behavior, setup, or architecture changes.

## Confidentiality and security

- Never commit credentials, API keys, tokens, passwords, or `.env` files. Never place secrets in client-exposed `VITE_` variables.
- Do not add internal hostnames, IP addresses, network details, or Facilities/SCADA implementation specifics to code, documentation, issues, or examples.
- Treat pumped seawater / Facilities and Yaquina water quality infrastructure as internal sources. Interact with them read-only unless the source owner explicitly approves otherwise.
- Do not send non-public data, internal documents, credentials, or meeting content to AI tools. If unsure whether material is public, leave it out and ask the team.
- See [CONTRIBUTING.md](CONTRIBUTING.md) for reporting and contribution guidance.

## To revisit as the project evolves

Add or update these instructions when the team establishes the relevant guidance or implementation:

- Design guide: link the source of truth for visual patterns, content tone, and accessibility decisions.
- Data integrations: document public-safe source configuration and expected behavior when a stream is unavailable.
- Testing: add the test framework, exact local commands, and CI checks when a test suite is introduced.
- Deployment: document the hosting target, release steps, and rollback process once they are decided.
- Architecture: update the module map as the application grows or its structure changes.

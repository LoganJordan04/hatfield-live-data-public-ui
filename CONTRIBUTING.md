# Contributing Guide

How to set up, code, test, review, and release so contributions meet our Definition of Done.

This project is the Hatfield Live Data Public UI, a web app that shows four live data streams from the Hatfield Marine Science Center (weather station, Yaquina water quality, pumped seawater, and the underwater dock webcam). The UI must be friendly to people age 8 and up, and the code must be modular and easy to hand off.

## Code of Conduct

We follow the [Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Be respectful, assume good intent, and give feedback on the work, not the person.

Report conduct concerns to `[TBD: reporting contact]`.

## Getting Started

**Prerequisites**

- Git
- Node.js, current LTS (version pinned in `.nvmrc`)
- npm (ships with Node)

**Setup**

```bash
git clone https://github.com/LoganJordan04/hatfield-live-data-public-ui.git
cd hatfield-live-data-public-ui
nvm use
npm install
cp .env.example .env
npm run dev
```

The app runs at the local URL Vite prints in the terminal.

**Commands**

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run preview` | Serve the production build locally |

**Environment variables and secrets**

- Put local configuration in `.env`. Never commit it.
- Commit `.env.example` with placeholder values only.
- Vite exposes only variables that start with `VITE_`. Never put a secret in one, because it ships to the browser.
- Data source URLs and any tokens are listed in `.env.example`.

**Status:** The project scaffold lands in Sprint 1 (`[TBD: owner]`). Until then, the commands above describe the target setup.

## Branching & Workflow

- **Model:** GitHub Flow. `main` is the default branch and is always releasable.
- **Protection:** No direct pushes to `main`. Every change goes through a pull request.
- **Branch names:** `feature/short-description`, `fix/short-description`, `docs/short-description`, `chore/short-description`.
- **Keep branches short-lived.** Merge within a few days.
- **Rebase vs. merge:** Rebase your branch onto `main` before you open a PR and again if `main` moves. Merge PRs with squash merge so `main` stays linear.

## Issues & Planning

- **Tracker:** GitHub Issues, with one GitHub Projects board (Backlog, Ready, In Progress, In Review, Done).
- **Sprints:** Two weeks each. Plan at the start and review at the end.
- **Filing an issue:** Use the issue template. Include a summary, acceptance criteria, and notes. Every PR links to an issue.
- **Labels:**
  - Type: `type:feature`, `type:bug`, `type:docs`, `type:chore`
  - Priority: `priority:high`, `priority:medium`, `priority:low`
  - Data stream: `data:weather`, `data:water-quality`, `data:seawater`, `data:webcam`
- **Estimation:** T-shirt sizes (S, M, L), set during sprint planning. Split anything larger than L.
- **Triage and assignment:** The team triages new issues at sprint planning. Each person self-assigns from Ready. One assignee per issue. Every item in the current sprint has an owner and a status.

## Commit Messages

Keep them short and clear.

- Write a summary in the imperative mood, under 72 characters.
- A prefix is optional. If you use one, pick from `feat`, `fix`, `docs`, `chore`.
- Add a body only when the reason for the change is not obvious from the diff.
- Reference issues in the PR description with `Closes #12` or `Refs #12`.

Examples:

```
Add wind speed card to weather panel
fix: handle empty response from water quality API
docs: add setup steps for .env
```

## Code Style, Linting & Formatting

- **Linter:** ESLint with `typescript-eslint`, the React Hooks plugin, and `eslint-plugin-jsx-a11y`. Config: `eslint.config.js`.
- **Formatter:** Prettier. Config: `.prettierrc`.
- **TypeScript:** `strict` mode on. Config: `tsconfig.json`.

| Command | What it does |
|---|---|
| `npm run lint` | Check lint rules |
| `npm run lint:fix` | Fix what ESLint can fix |
| `npm run format` | Format all files with Prettier |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

Run `npm run lint` and `npm run typecheck` before you push.

## Testing

- **Unit and component tests:** Vitest with React Testing Library. Run with `npm test`.
- **Data layer:** Mock the four data streams. Tests never call live servers.
- **Accessibility:** `eslint-plugin-jsx-a11y` runs inside `lint`. Add `axe` checks on key pages as they appear.
- **End-to-end tests:** `[TBD: E2E testing decision]`
- **Coverage:** 70% or higher on lines. Run `npm run test:coverage`.
- **Tests are mandatory when:**
  - You fix a bug (add a regression test).
  - You add a component or data function (add at least one test).
  - You change behavior that a test already covers (update that test).

## Definition of Done

A change merges only when every gate below passes. Each gate names what enforces it. Gates not built yet name the sprint they land in and an owner.

| Gate | Enforced by | Status |
|---|---|---|
| No direct pushes, one approving review | GitHub branch protection on `main` | Lands Sprint 1, owner `[TBD]` |
| Lint, typecheck, tests, and build pass | GitHub Actions jobs `lint`, `typecheck`, `test`, `build` | Lands Sprint 1, owner `[TBD]` |
| Docs updated | PR template checklist, checked by the reviewer | Lands Sprint 1, owner `[TBD]` |
| Accessibility lint | `eslint-plugin-jsx-a11y` inside the `lint` job | Lands Sprint 1, owner `[TBD]` |
| Coverage at 70% or higher | CI job `test:coverage` | Lands Sprint 2, owner `[TBD]` |
| Dependency and secret scan | Dependabot, GitHub secret scanning, `npm audit` job | Lands Sprint 2, owner `[TBD]` |
| Preview deploy before production, with a rollback path | Hosting platform previews, rollback steps in Release Process | `[TBD]`, depends on the production target |

## Contribution Norm

**Floor:** Every contributor lands at least one piece of accepted work per sprint.

| Kind of work | Lives in | Accepted when |
|---|---|---|
| Code and tests | GitHub repo | PR merged with one approval, CI green, linked to an issue |
| Repo docs (`docs/`, README) | GitHub repo | PR merged with one approval |
| Planning (issues, acceptance criteria, triage) | GitHub Issues and Projects | Issue has acceptance criteria and a teammate confirmed it is ready |
| Notes, research, user study notes | Shared Google Drive | Saved in the team folder, reviewed by one teammate, linked from the sprint note |
| Partner-facing work (deployment, data access) | `[TBD: partner's system]` | `[TBD]` |

Each person's contribution line in the sprint note matches this record.

## Pull Requests & Reviews

- **Template:** Use the PR template. Include a summary, the linked issue, screenshots for UI changes, and the checklist.
- **Size:** Aim for under 400 changed lines. Split larger work.
- **Approval:** One approval from a teammate who did not write the code. Authors do not merge their own PRs without approval.
- **Review window:** Reviewers respond within 2 days.
- **Reviewer checks:** The change does what the issue asks, tests cover it, docs are updated, and the UI works with a keyboard.
- **Required status checks:** `lint`, `typecheck`, `test`, `build`.
- **Merge:** Squash merge. Delete the branch after merging.

## CI/CD

- **Platform:** GitHub Actions.
- **Pipeline definition:** `.github/workflows/ci.yml`
- **Mandatory jobs:** `lint`, `typecheck`, `test`, `build`. Coverage and security jobs join them as they land per the Definition of Done.
- **Viewing logs:** Open the Actions tab, pick the run, then pick the job.
- **Re-running jobs:** In the run, select Re-run jobs.
- **Before merge:** All required jobs pass and the PR has one approval.
- **Before release:** `main` is green and the changelog is updated.
- **Deployment:** `[TBD: depends on the production target agreed with the partner]`

## Security & Secrets

- **Reporting a vulnerability:** Use GitHub's private vulnerability reporting on this repo. Do not open a public issue.
- **Prohibited:** No hard-coded keys, tokens, or passwords. Use `.env` for local configuration.
- **Leaks:** Rotate any leaked secret right away and say so in the commit that removes it.
- **Dependencies:** Dependabot alerts and updates are on. Review and merge them each sprint.
- **Scanning:** GitHub secret scanning and `npm audit` in CI, per the Definition of Done.

## Documentation Expectations

Update docs in the same PR as the change.

| Change | Update |
|---|---|
| Setup or commands | `README.md` |
| Scope or acceptance criteria | `docs/requirements.md` |
| Architecture, interfaces, data model | `docs/design.md` |
| New risk or changed risk | `docs/risks.md` |
| Decision with trade-offs | `docs/adr/` |
| Any user-facing change | `CHANGELOG.md` |

Code comments explain why, not what. Add TSDoc to exported functions and components.

## Release Process

- **Versioning:** Semantic Versioning. Tag releases like `v0.1.0`.
- **Changelog:** Generated from merged PR titles at release time and saved in `CHANGELOG.md`.
- **Packaging and publishing:** `[TBD: depends on the production target]`
- **Rollback:** `[TBD: depends on the production target]`

## Support & Contact

- **Questions about the code:** Open a GitHub issue or post in the team Discord.
- **Urgent team matters:** Group text.
- **Project partner, TA, and outside contacts:** Email. Contact details: `[TBD: contact list]`
- **Response window:** Within 2 days.

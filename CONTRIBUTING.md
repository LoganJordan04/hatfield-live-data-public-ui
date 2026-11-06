# Contributing Guide

How to set up, code, test, review, and release so contributions meet our Definition of Done.

This project is the Hatfield Live Data Public UI, a web app that shows four live data streams from the Hatfield Marine Science Center (weather station, Yaquina water quality, pumped seawater, and the underwater dock webcam). The UI must be friendly to people age 8 and up, and the code must be modular and easy to hand off.

## Code of Conduct

We follow the [Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Be respectful, assume good intent, and give feedback on the work, not the person.

Report conduct concerns to [Logan Jordan](mailto:jordanlo@oregonstate.edu).

## Getting Started

**Prerequisites**

- Git
- Node.js
- npm (ships with Node)

**Setup**

```bash
git clone https://github.com/LoganJordan04/hatfield-live-data-public-ui.git
cd hatfield-live-data-public-ui
npm run dev
```

The app runs at the local URL Vite prints in the terminal.

**Commands**

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run build`   | Create a production build          |
| `npm run preview` | Serve the production build locally |

No environment file is currently required for the app. If configuration is added, document the required variable names and safe local setup here; never put secrets in client-side `VITE_` variables.

## Branching & Workflow

- **Model:** GitHub Flow. `main` is the default branch and is always releasable.
- **Pull request target:** `main` (the CI workflow runs for pull requests targeting `main`).
- **Branch names:** Use a short descriptive name, such as `feature/weather-card` or `docs/contributing-guide`.
- **Keep branches focused** and update them from `main` as needed.
- **Merge method and branch protection:** Follow the options enabled in the GitHub repository; these settings are not defined in the checked-in files.

## Issues & Planning

- Track work in GitHub Issues when an issue is useful. No issue form or issue template is currently checked in.
- Describe the problem or goal, relevant context, and how to tell the work is complete. Link the issue from the pull request when applicable.

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

| Command             | What it does                                       |
| ------------------- | -------------------------------------------------- |
| `npm run lint`      | Check lint rules                                   |
| `npm run lint:fix`  | Fix what ESLint can fix                            |
| `npm run format`    | Format all files with Prettier                     |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

Run `npm run lint`, `npm run typecheck`, and `npm run build` before you open a pull request. The build is the check currently run by CI.

## Testing

There is no test runner or test script configured in `package.json` yet. Do not use `npm test` or `npm run test:coverage`; those commands are not defined. CI currently verifies the production build. When adding behavior, include appropriate tests with the change once a test framework is introduced, and document its command here.

## Definition of Done

A change is ready to merge when its pull request has been reviewed and the CI production build passes. The table separates current checks from checks that are not configured yet.

| Gate                                                 | Enforced by                                                      | Status                                 |
| ---------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------- |
| Production build succeeds                            | GitHub Actions CI workflow: `npm ci` followed by `npm run build` | Runs on pull requests targeting `main` |
| Change is reviewed and documentation is kept current | Pull request author and reviewer; repository review rules apply  | Review settings are managed in GitHub  |
| Tests and additional automated checks                | No test suite or corresponding CI jobs are currently configured  | Add and document when introduced       |

## Contribution Norm

**Floor:** Every contributor lands at least one piece of accepted work per sprint.

| Kind of work                      | Lives in                   | Accepted when                                    |
| --------------------------------- | -------------------------- | ------------------------------------------------ |
| Code and repository documentation | GitHub repository          | Pull request reviewed and merged                 |
| Work planning and defect reports  | GitHub Issues, when useful | Issue describes the goal and completion criteria |

## Pull Requests & Reviews

- Open a pull request against `main` and explain what changed and why. Link a related issue when one exists.
- Include screenshots for visual changes and note relevant manual checks.
- No pull request template is currently checked in. No approval count, response window, or merge method is specified in repository files; follow the repository's GitHub settings and team practice.
- Review the change for correctness, accessibility, and updated documentation. Resolve review feedback before merging.

## CI/CD

- **Platform:** GitHub Actions.
- **Workflow:** `.github/workflows/ci.yml` (GitHub Actions; pull requests targeting `main`).
- **Steps:** Checkout, set up Node.js 20 with npm cache, run `npm ci`, then `npm run build`.
- **Local equivalent:** `npm ci` and `npm run build`.
- **Viewing logs:** Open the Actions tab, pick the run, then pick the job.
- **Re-running jobs:** In the run, select Re-run jobs.
- **Before merge:** Check that the CI build passes and address review feedback. Any additional approval rules are configured in GitHub.
- No deployment or release workflow is documented in the repository.

## Security & Secrets

- Never commit credentials, API keys, tokens, `.env` files, internal hostnames, IP addresses, or network details. See the confidentiality boundary in `AGENTS.md`.
- Treat SCADA/Facilities and Data Center VM sources as internal; access is read-only unless the stream owner explicitly approves otherwise.
- If a secret is exposed, notify the team promptly so it can be revoked or rotated. Do not repeat it in an issue or commit message.
- No dependency or secret scanning job is defined in the supplied CI workflow.

## Documentation Expectations

Update docs in the same PR as the change.

| Change                             | Update                                     |
| ---------------------------------- | ------------------------------------------ |
| Setup or commands                  | `README.md` and this guide, as applicable  |
| Architecture or interfaces         | `docs/design.md`                           |
| Technical decision with trade-offs | Add a document under `docs/rfcs/`          |
| Other affected guidance            | Update the relevant existing documentation |

Code comments explain why, not what. Add TSDoc to exported functions and components.

## Release Process

No release, deployment, versioning, or rollback process is currently defined in the repository. Update this section when a release target and process are established.

## Support & Contact

- **Questions about contributing:** Open a GitHub issue with the question and relevant context.
- **Response time:** Allow time for a maintainer to review and follow up if needed.

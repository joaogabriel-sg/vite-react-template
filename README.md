# Vite React Template

A ready-to-use template to bootstrap React projects with Vite, React and TypeScript — optimized for speed, dev experience, and scalability.

## Getting started

### Download and Install

Use `degit` to scaffold a new project based on this template:

```
npx degit https://github.com/joaogabriel-sg/vite-react-template#main my-app
cd my-app
pnpm install
pnpm setup:project
```

### Run the app

To start the development server, run:

```
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## What's included

This template comes pre-configured with:

- ⚡️ Vite — build tool and dev server
- ⚛️ React — UI library
- 🧠 TypeScript — static typing
- 🎨 Tailwind CSS — utility-first CSS framework
- 📦 Tanstack Query — data fetching and caching
- 🧹 ESLint — code linting
- ✨ Prettier — code formatting
- 🧪 Vitest — unit testing
- 🧫 Testing Library — testing React components
- 🧭 Playwright — end-to-end testing
- 🪝 Lefthook — git hooks
- 🛡️ MSW - intercept and mock API requests for tests and development
- 🔎 Path mapping — use "~/..." instead of relative paths
- ✅ PR workflow — lint, type check, and unit tests before merging

## Available scripts

- `pnpm setup:project` — install deps and enable git hooks
- `pnpm dev` — start development server
- `pnpm build` — type-check and create production build
- `pnpm preview` — preview production build
- `pnpm lint` — run ESLint
- `pnpm lint:fix` — fix lint issues
- `pnpm typeCheck` — run TypeScript type checks
- `pnpm test:unit` — run unit tests (Vitest)
- `pnpm test:unit:watch` — run unit tests in watch mode
- `pnpm test:unit:coverage` — run unit tests with coverage
- `pnpm test:unit:coverage:watch` — watch mode + coverage
- `pnpm test:e2e` — run e2e tests (Playwright)
- `pnpm test:e2e:ui` — run e2e tests with UI
- `pnpm test:e2e:report` — show Playwright HTML report
- `preinstall` - prevent installing with npm or yarn, use pnpm instead

## Path Mapping (Alias)

To improve DX and avoid long relative imports like `../../../components`, this project uses a path alias:

- `~/` points to the `src/` directory.
  You can use it in your imports like this:

```ts
import { Button } from "~/components/Button";
```

The alias is configured in:

- `tsconfig.json` — for TypeScript support
- `vite.config.ts` — for Vite resolution

## Switch to npm/yarn

This starter uses pnpm by default, but this choice is yours. If you'd like to switch to npm/yarn, follow these steps:

- Delete the `pnpm-lock.yaml` file.
- Install the dependencies with npm/yarn.
- Update the `package.json` scripts to use npm/yarn commands instead of pnpm.
- Update the CI workflow and Lefthook Git hooks to use npm/yarn commands.

Remember to follow the project structure and ensure all scripts and configurations are updated accordingly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more information.

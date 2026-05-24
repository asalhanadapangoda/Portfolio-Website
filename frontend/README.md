# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment (GitHub Pages)

This project includes a GitHub Actions workflow that builds the `frontend` with Vite and deploys the `dist` folder to GitHub Pages when you push to the `main` branch.

Key points:
- The workflow sets `VITE_BASE` to `/<repo-name>/` automatically during the build so assets resolve when hosted on GitHub Pages.
- The build output is taken from `frontend/dist` and published via the official Pages deploy actions.

To create a repository and push your code, run these commands locally (replace `<your-repo>` and `main` if different):

```bash
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

After pushing, GitHub Actions will build and deploy. Your site will be available at `https://<your-username>.github.io/<your-repo>/`.

If you want to test the build locally with the correct base, run:

```bash
VITE_BASE='/<your-repo>/' npm run build --prefix frontend
```


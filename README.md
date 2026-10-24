# APPDEV1 Final Practical Exam

## What I Built
I converted a Figma design into a React.js project using Vite. It has a Sign Up page and a Login page, each with a left section (title, form, Or divider, Google and Apple sign-in buttons, and bottom link) and a right section showing the blossom image. I styled both pages with CSS modules, moved the reusable values (colors, font, weights, radius, form width) into design tokens in `root.css`, and finally installed Tailwind CSS and shadcn/ui so the form fields use the shadcn Input component.

## Reflection
This exam tested everything we learned, and it was harder than I expected. My first problem was Git: I pushed to a placeholder GitHub URL, which gave a "Repository not found" error, and I had to learn that `git remote set-url` fixes a wrong remote. A filename-casing warning in VS Code for `SignUp.jsx` also confused me until I understood that Windows and the TypeScript checker treat file names differently.

The hardest part was following the required commit order. Several times I committed without a screenshot or with the wrong message, so I had to use `git reset --soft`, `git commit --amend`, and an interactive rebase with `reword`, then force-push with `--force-with-lease`. It was stressful, but I now understand how commit history works and why each commit should contain exactly the code and screenshot for its step.

On the design side, matching Figma meant reading values from the Inspect panel, such as Poppins Medium, 32px titles, the `#3A5B22` button color, and the 404px form width, and then comparing my page against the design. Moving values into CSS custom properties showed me how design tokens keep two pages consistent, and setting up Tailwind and shadcn/ui taught me how a component library fits into an existing project.

## What I Learned
- How to turn a Figma design into React components with CSS modules.
- How to use design tokens to keep styles consistent and easy to change.
- How to set up Tailwind CSS and shadcn/ui in a Vite project.
- How to fix mistakes in Git history safely instead of panicking.
- To save screenshots before running `git add .`, and to plan commits ahead of time.

## What I Would Improve
I would plan the commit order from the start, spend more time matching Figma spacing exactly, and make the pages responsive for smaller screens.
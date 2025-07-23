This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requirements

- **Node.js**: >= 20.11.1
- **next**: 15.3.5
- **react**: ^19.0.0
- **react-dom**: ^19.0.0
- **tailwindcss**: ^4.1.11
- **typescript**: ^5

> All other dependencies and devDependencies are listed in `package.json`.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd meli-challenge
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see the app running.

## Technical Decisions

- **Next.js:** This project is created in Next.js in order to be ranked in Google search with help of SEO best practices. This is an e-commerce page, and it needs to be discovered by the users in the browsers.
- **Next.js App Router:** The project uses the new App Router (`/app` directory) for improved routing and layouts.
- **TypeScript:** All code is written in TypeScript for type safety and better developer experience.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development and responsive design.
- **Component Structure:** Components are organized by feature and subcomponents, following a modular and scalable approach. The files must have a `.component` naming and it's own `index.ts`.
- **Mock Data:** Product and list data are mocked in the `/src/mocks` directory for development and testing purposes.
- **Accessibility:** We added some semantic HTML and accessibility best practices (e.g., `sr-only` classes for screen readers).
- **Reusable UI:** Skeleton loaders and not-found UIs are implemented for better user experience during loading and error states.
- **Global State:** This project does not use Context or Zustand. At first it seemed to be needed to use Context, but the way that the search input pushed to the query and how we get the searchParams avoided the use of a global state.
- **Testing:** This project uses `jest` to do some unit testing. We added a few tests to prevent unexpected behaviours.

## What I would do with more time

If I'd had more time, I would:
- Add some end to end tests with `Cypress`.
- Add a shopping cart and a checkout page.
- Add a better UI `Home` page, like some cards on the page or smth.
- Add more SEO metadata.
- Add more unit testing, in order to have more coverage.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

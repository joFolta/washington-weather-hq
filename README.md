# washington-weather-hq


Mt Washington weather web app built with NextJS, Typescript
**DISCLAIMER: This demo app is for educational purposes only. Not intended for use in a production app.** 

### Technologies used:
- https://github.com/niutech/x-frame-bypass
- Material UI - react component library
    - https://mui.com/
    - https://github.com/mui/material-ui/tree/v5.14.7/docs/data/material/getting-started/templates/dashboard
    - https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts 
- Dark mode
    - https://mui.com/material-ui/customization/dark-mode/
    - https://giancarlobuomprisco.com/css/automatic-dark-mode-any-website
    - https://www.reddit.com/r/nextjs/comments/z5dbao/how_to_manage_the_state_in_the_root_layout_in/
- Forecast countdown timer
    - https://momentjs.com/timezone/docs/#/use-it/node-js/
    - https://www.npmjs.com/package/react-countdown-simple
    - https://stackoverflow.com/questions/22353009/momentjs-seconds-from-now-till-a-specific-hour
- Request library for scraping live video url
    - https://www.npmjs.com/package/got

### Hurdles
#### Integration issues of NextJS with MaterialUI 
- e.g. Error: Attempted to call styled() from the server but styled is on the client. It's not possible to invoke a clienton from the server, it can only be rendered as a Component or passed to props of a Client Component.
- https://mui.com/material-ui/guides/next-js-app-router/ 
- https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts 

### Notes
- https://nextjs.org/docs/messages/react-client-hook-in-server-component
- Testing with Jest in NextJS : https://nextjs.org/docs/pages/building-your-application/optimizing/testing#setting-up-jest-with-the-rust-compiler
- Vercel automagically deploys to production upon commits to the github "main" branch



------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

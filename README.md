# MAAR

React + Vite + Firebase 10 + Tanstack boilerplate made by https://github.com/macchiatoit

https://studentsforstudents-7666e.web.app

### Development

The local development server is Vite and can be started with `pnpm dev`
It's usually available under `http://localhost:5173/`

### Build and Deploy

Build app and deploy firebase rules, indexes and hosting with `pnpm firebase:deploy`

### Firebase

Console: https://console.firebase.google.com/project/studentsforstudents-7666e/overview

Firestore database: https://console.firebase.google.com/project/studentsforstudents-7666e/firestore/databases/-default-/data

Hosting: https://studentsforstudents-7666e.web.app

### Structure

```
| src
  | components
    | modules // parts that are used in pages
    | pages // pages that are used in routes
    - App.tsx // app entry point
  | entities // classes for firestore objects
  | lib
    - collections.ts // firestore collections
    - firebase.ts // general firebase connection
    - firebaseContext // context used in main.tsx
    > add more for own stuff
  | routes # tanstack file based routes https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing
    - __root.tsx // main route
    - index.lazy.tsx // index route
    > add more routes by creating a file like `[url].lazy.tsx`. with active `pnpm dev`, content is automatically generated on saving
  | styles
    - App.css // your css stuff
    - main.css // general
  - main.tsx // main entry point
  - routeTree.gen.ts // routes, automatically updated by tanstack router
- firebase.json // firebase internal configuration file
- firebaseConfig.json // firebase app configuration
- firestore.indexes.json // firestore indexes
- firestore.rules // firestore rules
- index.html // main html entry point
- package.json // pnpm config
- tsconfig.json // compiler config
- tsconfig.node.json // compiler config
- vite.config.ts // vite config
```

import { FirebaseContextProvider } from "./lib/firebaseContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import firebase, {
  auth,
  db,
  functions,
  storage,
  messaging,
} from "./lib/firebase.ts";
import { routeTree } from "./routeTree.gen.ts";
import "./styles/main.css";
import "./styles/App.css";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <FirebaseContextProvider
          {...{ app: firebase, auth, db, functions, storage, messaging }}
        >
          <App>
            <RouterProvider router={router} />
          </App>
        </FirebaseContextProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}

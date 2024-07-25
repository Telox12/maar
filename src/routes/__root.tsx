import { Layout } from "../components/modules/Layout";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  },
});

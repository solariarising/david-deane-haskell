import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";
import { renderSeoTags } from "./seo";

export const render = (pathname: string) =>
  renderToString(
    <AppProviders>
      <StaticRouter location={pathname}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );

export { renderSeoTags };

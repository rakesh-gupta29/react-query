import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const RenderRoutes = () => {
  let routeTree = useRoutes(routes());
  return routeTree;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layouts";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

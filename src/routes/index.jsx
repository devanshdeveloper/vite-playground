import { Route, Routes } from "react-router";
import IndexPage from "../shared/pages";
import Layout from "../shared/components/layout";
import GSAPIndex from "../gsap/GSAPIndex";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

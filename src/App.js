import React, { useState } from "react";
import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import { css } from "@emotion/css";

import Products from "./Products/Products";
import ScrollToTop from "./Common/ScrollToTop";
import Admin from "./Admin/Admin";
import Nav from "./Common/Nav";

const AppStyles = css`
  margin: 50px auto;
  width: 380px;
  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`;

const App = () => {
  const [authenticated] = useState(true);
  const routes = useRoutes([
    {
      path: "/*",
      element: <Products />,
    },
    {
      path: "/admin*",
      element: authenticated ? <Admin /> : <Navigate to="/" />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);
  return routes;
};

/* <Routes>
  <Route path="/*" element={<Products />} />
  <ProtectedRoute path="/admin*" element={<Admin />} redirectTo="/" authenticated={authenticated} />
  <Route path="*" element={<Navigate to="/" />} />
</Routes> */

const AppWrapper = () => (
  <div className={AppStyles}>
    <Router>
      <ScrollToTop />
      <div className="Container">
        <Nav />
        <App />
      </div>
    </Router>
  </div>
);

export default AppWrapper;

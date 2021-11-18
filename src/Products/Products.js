import { Routes, Route } from "react-router";
import { css } from "@emotion/css";
import React, { lazy, Suspense } from "react";

const ProductsIndex = lazy(() => import("./ProductsIndex"));
const Product = lazy(() => import("./Product"));

const ProductsStyles = css`
  display: flex;
  flex-direction: column;
  .Logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

const Products = () => {
  return (
    <div className={ProductsStyles}>
      <img src="/assets/img/logo.svg" alt="Ultimate Burgers" className="Logo" />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={213}>
              <ProductsIndex />
            </Suspense>
          }
        />
        <Route
          path=":id"
          element={
            <Suspense fallback={213}>
              <Product />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default Products;

import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const ProductCardStyles = css`
  display: flex;
  color: #fff;
  background-color: #2a2c37;
  border-radius: 6px;
  text-decoration: none;
  padding: 15px;
  margin-bottom: 5px;
  transition: transform 0.1s ease-in-out, background 0.1s ease-in-out 0.1s ease-in-out;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.035);
  }
  .ProductCard {
    &-Icon {
      width: 40px;
      margin-right: 15px;
    }
    &-Name {
      font-size: 1.2rem;
      margin: 0;
    }
    &-Price {
      color: #50fa7b;
      font-size: 1rem;
      margin: 0;
    }
  }
`;

const ProductCard = ({ product }) => (
  <Link className={ProductCardStyles} to={product.id}>
    <img src={`/assets/img/products/${product.id}.svg`} className="ProductCard-Icon" />
    <div>
      <h2 className="ProductCard-Name">{product.name}</h2>
      <p className="ProductCard-Price">{`$${product.price / 100}`}</p>
    </div>
  </Link>
);

export default ProductCard;

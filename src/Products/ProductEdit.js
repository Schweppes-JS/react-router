import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { css } from "@emotion/css";

import { createProduct } from "./ProductsService";

const ProductEditStyles = css`
  color: #fff;
  background: #2a2c37;
  padding: 15px;
  border-radius: 6px;
`;

// {
//   "id": "big-cheese",
//   "name": "Big Cheese",
//   "description": "Large burger, all the cheese.",
//   "price": 749
// },

const ProductEdit = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
    description: "",
  });

  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      const created = await createProduct(form);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <form className={ProductEditStyles}>
      {JSON.stringify(form)}
      <input type="text" name="id" placeholder="ID" className="ProductEdit-Input" value={form.id} onChange={({ target }) => updateField(target)} />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="ProductEdit-Input"
        value={form.name}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="price"
        value={form.price}
        placeholder="Price"
        className="ProductEdit-Input"
        onChange={({ target }) => updateField({ name: target.name, value: parseInt(target.value, 10) })}
      />
      <textarea
        value={form.description}
        name="description"
        placeholder="Description"
        className="ProductEdit-Input ProductEdit-Textarea"
        onChange={({ target }) => updateField(target)}
      />
      <button type="button" className="ProductEdit-Button" onClick={handleCreate}>
        Create
      </button>
    </form>
  );
};

export default ProductEdit;

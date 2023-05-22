import React, { useState } from 'react';

const AdminForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct((prevProduct) => ({ ...prevProduct, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can manually add the product (including the image) to your product list or database
    // For simplicity, I'll just log the product data to the console
    console.log('Product:', product);
    // Reset the form after submission
    setProduct({
      name: '',
      description: '',
      price: 0,
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AdminForm;

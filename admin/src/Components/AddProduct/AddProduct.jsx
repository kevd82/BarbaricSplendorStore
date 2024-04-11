import React from 'react';
import "./AddProduct.css"; 

const AddProduct = () => {
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name="title" placeholder="Enter product title here." />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="price" placeholder="Enter product price here."/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className="add-product-selector">
          <option value="" disabled selected hidden>Select Category</option>
          <option value="miniatures">Miniatures</option>
          <option value="sceneryterrain">Scenery/Terrain</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Image</p>
        <input type="text" name="image" placeholder="Enter image link here."/>
      </div>
      <button className="addproduct-btn">ADD PRODUCT</button>
    </div>
  )
}

export default AddProduct;
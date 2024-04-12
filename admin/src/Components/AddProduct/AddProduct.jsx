import React from 'react';
import "./AddProduct.css"; 

const AddProduct = () => {

  const [productDetails, setProductDetails] = useState({
    title:"",
    image:"",
    category:"miniatures",
    price:"",
    description:"",
    weight:"",
  });

  const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name="title" placeholder="Enter product title" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="price" placeholder="Enter product price"/>
        </div>
        <div className="addproduct-itemfield">
          <p>Weight</p>
          <input type="number" name="weight" placeholder="Enter product weight"/>
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
        <input type="text" name="image" placeholder="Enter product image link"/>
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea type="text" name="description" placeholder="Enter product description, including sculptor and painter"/>
      </div>
      <button className="addproduct-btn">ADD PRODUCT</button>
    </div>
  )
}

export default AddProduct;
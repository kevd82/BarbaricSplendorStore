import React, {useState} from 'react';
import "./AddProduct.css"; 
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {

  const [image, setImage] = useState(false);
  const [imagetwo, setImageTwo] = useState(false);

  const imageHandler = (e)=>{
    setImage(e.target.files[0]);
  }

  const imageHandlerTwo = (e)=>{
    setImageTwo(e.target.files[0]);
  }

  const [productDetails, setProductDetails] = useState({
    title:"",
    image:"",
    imagetwo:"",
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
      <div className="addproduct-images">
        <div className="addproduct-itemfield">
          <p>Product Image</p>
          <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumbnail-img" alt=""/>
          </label>
          <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Image Two</p>
            <label htmlFor="file-input">
              <img src={imagetwo?URL.createObjectURL(imagetwo):upload_area} className="addproduct-thumbnail-img" alt=""/>
            </label>
            <input onChange={imageHandlerTwo} type="file" name="imagetwo" id="file-input" hidden/>
        </div>

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
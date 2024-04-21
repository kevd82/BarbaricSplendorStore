import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./AddProduct.css"; 
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {

  const [image, setImage] = useState(false);

  const imageHandler = (e)=>{
    setImage(e.target.files[0]);
  }

  const [productDetails, setProductDetails] = useState({
    title:"",
    image:"",
    category:"miniatures",
    price:"",
    description:"",
    weight:"",
  });

  const navigate = useNavigate();

  const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers:{
        Accept: "application/json", 
      },
      body:formData,
    }).then((res)=> res.json()).then((data)=>{responseData=data});

    if(responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{
          data.success?alert("Product Added"):alert("Product Not Added")
          navigate("/listproduct")
      })
    }
  }

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.title} onChange={changeHandler} type="text" name="title" placeholder="Enter product title" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="Enter product price"/>
        </div>
        <div className="addproduct-itemfield">
          <p>Weight</p>
          <input value={productDetails.weight} onChange={changeHandler} type="number" name="weight" placeholder="Enter product weight"/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder="Enter product description, including sculptor and painter"/>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
          <option value="" disabled defaultValue hidden>Select Category</option>
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
        
      </div>
      
      <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD PRODUCT</button>
    </div>
  )
}

export default AddProduct;
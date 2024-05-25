import React, { useEffect, useState } from 'react';
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  
  
  const fetchInfo = async ()=>{
    await fetch("http://localhost:4000/allproducts")
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[]);

  const remove_product = async (id)=>{
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allproducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="list-product">
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p>Product Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Stock</p>
        <p>Remove</p>
        <p>Update</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {currentProducts.map((product,index)=>{
          return <><div key={index} className="listproduct-format-main listproduct-format">
            <img className="listproduct-product-icon" src={product.image} alt="" />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.stock}</p>
            <img onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct;
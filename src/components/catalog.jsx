import React, { useEffect, useState } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

const Catalog = () => {
        //state things
        let [products, setProducts] = useState ([]);
        let [itemsOnDisplay, setItemsOnDisplay] = useState([]);
        let [categories, setCategories] = useState([]);


      // logic (functions)
const retrieveCatalog = () => {
  let service = new ItemService();
  let cat = service.getCatalog();
  setProducts(cat);
  setItemsOnDisplay(cat);
  console.log(cat);


  //for loop console log each product category
  let categories = [];
  for (let i = 0; i< cat.length; i++){
    let prod = cat[i];

    if (!categories.includes (prod.category)) {
     categories.push(prod.category);
    }
  }

  setCategories(categories);
};

const handleFilter = (category) => {
  console.log("filter", category);



  setItemsOnDisplay(products.filter((prod) => prod.category === category));
};

const handleFilterReset = () => {
  setItemsOnDisplay(products);
}

//effects
  useEffect( () => {
    retrieveCatalog();

  }, []); //[]added to ensure logic will be called only oncehhhdhdfhdfhfdfhh


  //return things
  return (
    <div className="row catalog-page">
      <h3>Check out our amazing tastes!!</h3>
      <h6>We have plenty of options for you</h6>

    <div className="filters">
      
<button onClick={handleFilterReset} className="btn btn-sm btn-dark">All</button>




      {categories.map((cat)=> (
        <button onClick={() => {
            handleFilter(cat);
        }}
        key={cat}
        className="btn btn-sm btn-info mx-1">
        {cat}
        </button>
      ))}
    </div>



      <div className="item-container">
       
        { itemsOnDisplay.map((prod) => (
        <Item key={prod._id} data={prod}></Item>  
        
        
        ))}
      </div>
    </div>
  );
};

export default Catalog;

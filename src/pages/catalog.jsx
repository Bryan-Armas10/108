import "./styles/catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import dataService from "../services/dataService";

function Catalog(){
    const [catalog, setCatalog] = useState([]);

    function loadData(){
        let productList = dataService.getProducts();
        console.log(productList);
        setCatalog(productList);
    }

    useEffect(function() {
        // when page loads
        loadData();
    }, []);

    if(!catalog.length) return "Loading...";

    return(
        <div className="content">
            <div>
                <h1>This is were the catalog it's going to be</h1>

            </div>
            <div>
                <Product data={catalog[0]}></Product>
                <Product data={catalog[1]}></Product>
            </div>
        </div>
    );
}

export default Catalog;
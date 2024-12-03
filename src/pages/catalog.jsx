import "./styles/catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import dataService from "../services/dataService";

function Catalog(){
    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    function loadData(){
        let productList = dataService.getProducts();
        setCatalog(productList);

        let categoriesList = dataService.getCategories();
        setCategories(categoriesList);
    }

    useEffect(function() {
        // when page loads
        loadData();
    }, []);

    function onCategorySelected(Category) {
        setSelectedCategory(Category);
    }

    function clearFilter() {
        setSelectedCategory("");
    }

    // if catalog is empty
    if(!catalog.length) return "Loading...";

    return(
        <div className="content page">
            <div>
                <h1>This is were the catalog it's going to be</h1>

            </div>

            <div className="filters">
                <button onClick={clearFilter} className="btn btn-sm btn-outline-success">All</button>
                {categories.map( cat => <button onClick={() => onCategorySelected(cat)} key={cat} className="btn btn-sm btn-outline-success">{cat}</button>)}
            </div>

            <div>
                {catalog
                    .filter(prod => !selectedCategory || prod.category === selectedCategory )
                    .map(prod => <Product data={prod} key={prod._id}></Product>)
                }
            </div>
        </div>
    );
}

export default Catalog;
import "./styles/catalog.css";
import Product from "../components/product";

function Catalog(){
    return(
        <div className="content">
            <h1>This is were the catalog it's going to be</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;
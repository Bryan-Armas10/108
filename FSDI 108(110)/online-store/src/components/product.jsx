import "./styles/product.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useState } from "react";
import GlobalContext from "../context/globalContext"

function Product(props){
    const [quantity, setQuantity] = useState(1);
    const globalAdd =  useContext(GlobalContext).addToCart;

    function handleQuantity(qty) {
        console.log("Quantity changed", qty);
        setQuantity(qty);
    }

    function add() {
        let prod4Cart = { ...props.data, quantity:quantity };
        globalAdd(prod4Cart);
    }

    function getProdTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <span className="id">ID: {props.data._id}</span>
            <img src={props.data.image} alt=""/>
            <h3>{props.data.title}</h3>       

            <div className="prices">
                <label className="total">${getProdTotal()}</label>
                <label className="unit">${props.data.price.toFixed(2)}</label>
            </div>
            <div className="parent">
                <QuantityPicker onChange={handleQuantity}></QuantityPicker>
                <button className="btn btn-sm btn-success" onClick={add}> Add </button>
            </div>
        </div>
    );
}

export default Product;
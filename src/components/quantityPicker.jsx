import { useContext, useState } from "react";
import "./styles/quantityPicker.css"
import GlobalContext from "../context/globalContext";

function QuantityPicker(){

    const context = useContext(GlobalContext)

    const [quantity, setQuantity] = useState(1);

    function increase(){
        const val = quantity + 1;
        setQuantity(val);
    }

    function decrease(){
        if(quantity === 1) return;

        const val = quantity - 1;
        setQuantity(val);
    }

    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-dark" onClick={decrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-dark" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
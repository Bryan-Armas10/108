import { useContext } from "react";
import "./styles/cart.css";
import GlobalContext from "../context/globalContext";

function Cart() {

    const cart = useContext(GlobalContext).cart;
    
    function getProdCount() {
        let total = 0;
        for(let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }

    function getProdTotal(prod) {
        const total = prod.price * prod.quantity;
        return total.toFixed(2);
    }

    function getOrderTotal() {
        let total = 0;
        for(let i = 0; i <cart.length; i++) {
            let prod = cart[i];
            let prodTotal = prod.quantity * prod.price;
            total += prodTotal;
        }
        return total.toFixed(2);
    }

    return(
        <div className="cart page">
            <h1>Ready to finalize the order?</h1>
            <h3>You are 1-click away from your {getProdCount()} products</h3>

            <div className="parent">
                <div className="list">
                    {cart.map(prod => 
                        <div className="prod-cart">
                            <img src={prod.image} alt="" />
                            <h5>{prod.title}</h5>

                            <label><span>Price</span> ${prod.price.toFixed(2)}</label>
                            <label><span>Quantity</span> {prod.quantity}</label>
                            <label><span>Total</span> {getProdTotal(prod)}</label>

                            <button className="btn btn-sm btn-outline-danger">Remove</button>
                        </div>
                    )}
                </div>
                <div className="side">
                    <h6>Total</h6>
                    <h5>${getOrderTotal()}</h5>
                    <hr />
                    <button className="btn btn-primary">Pay Now</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
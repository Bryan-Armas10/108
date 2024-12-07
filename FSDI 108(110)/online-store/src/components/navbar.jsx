import { useContext } from "react";
import GlobalContext from "../context/globalContext"
import "./styles/navbar.css";

import { Link } from "react-router-dom";

function Navbar(){

    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    function getProdCount() {
        let total = 0;
        for(let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Online Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/list">Shopping List</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                    </li>
                </ul>
                
                <div className="d-flex" role="searh">
                    <div className="btn btn-outline-light me-3">
                        {user.name}
                     </div>
                    <Link class="btn btn-outline-light me-2" to="/cart"> 
                    <span class="badge text-bg-primary me-1">{getProdCount()} </span> 
                    View Cart
                    </Link>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
}
export default Navbar;
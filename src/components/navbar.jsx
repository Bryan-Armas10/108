import "./styles/navbar.css";

import { Link } from "react-router-dom";

function Navbar(){
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
                    <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                </ul>
                
                <div className="d-flex" role="searh">
                    <Link class="btn btn-outline-light me-2" to="/cart">View Cart</Link>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
}
export default Navbar;
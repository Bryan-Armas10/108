import "./styles/home.css";
import banner from "../assets/veg.jpg";

import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home page">
            <img className="main-img" src="/images/veg2.jpg" alt=""></img>

            <div>
                <h1>Organika Store</h1>
                <h3>Fresh food, healthier life</h3>
            </div>

            <div className="section-2">
                <div className="info">
                    <h3 className="display-4">Always fresh at your door</h3>
                    <p>Check out extensive catalog of fresh products 1 click away</p>
                    <hr />
                    <Link className="btn btn-lg btn-success" to="/catalog">Check our amazing catalog</Link>
                </div>
                <img className="main-img" src="/images/veg3.webp" alt=""></img>
            </div>

            <div className="relative">
                <img className="main-img" src={banner} alt=""></img>

                <div className="over-img">
                    <h3>From the fields to your table.</h3>

                </div>
            </div>

        </div>
    );
}

export default Home;
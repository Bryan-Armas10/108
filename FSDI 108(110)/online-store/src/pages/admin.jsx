import { useState } from "react";
import "./styles/admin.css";
import dataService from "../services/dataService";
import { useEffect } from "react";

function Admin() {

    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [coupon, setCoupon] = useState({
        code:'', // not requiret but helps a lot
        discount:''
    });
    const [product, setProduct] = useState({
        title:"",
        category:"",
        image:"",
        price:""
    })

    async function saveCoupon() {
        console.log(coupon);

        dataService.saveCoupon(coupon);

        var copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function handleCoupponInput(e){
        // console.log("value change",e.target.value);   
        const val = e.target.value;
        const name = e.target.name;
        let copy = {...coupon}
        if(name === "discount"){
                copy.discount = val;
        }
        else{
            copy.code = val;
        }
        //set the copy back 
        setCoupon(copy); 
    }

    function handleProductInput(e){
        const val = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }

    async function saveProduct(){
        console.log(product);

        let fixedProd = {...product};
        fixedProd.price = parseFloat(fixedProd.price);
        let x = await dataService.saveProduct(fixedProd);
        console.log(x);

        var copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    async function loadProducts() {
        let prods = await dataService.getProducts();
        setAllProducts(prods);
    }

    async function loadCoupons() {
        let cps = await dataService.getCoupons();
        setAllCoupons(cps);
    }

    useEffect(() => {
        loadProducts();
        loadCoupons();
    }, []);

    return(
        <div className="admin page">
            <h1>Store Administration</h1>

            <div className="parent">

                <div className="products form">
                    <h3>Create Products</h3>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onBlur={handleProductInput} name="title"></input>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" onBlur={handleProductInput} name="category"></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" onBlur={handleProductInput} name="image"></input>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" onBlur={handleProductInput} name="price"></input>
                    </div>

                    <div className="mb-3 btn-container">
                        <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>                        
                    </div>

                    <ul className="product-list">
                        {allProducts.map(prod => 
                            <li>
                                <img className="prod-img" src={prod.image} alt=""/>
                                {prod.title} - ${parseFloat(prod.price).toFixed(2)}
                            </li>)}
                    </ul>
                </div>

                <div className="coupons form">
                    <h3>Create Coupons</h3>

                    <div className="mb-3">
                        <label className="form-label">Code</label>
                        <input type="text" className="form-control" onAbort={handleCoupponInput} name="code"></input>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Discount</label>
                        <input type="number" className="form-control" onBlur={handleCoupponInput} name="discount"></input>
                    </div>

                    <div className="mb-5 btn-container">
                        <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>                        
                    </div>

                    <ul className="coupon-list">
                        {allCoupons.map(cp => <li className="coupon-item">{cp.discount}%</li>)}
                    </ul>
                </div>

            </div>
        </div>

    );
}

export default Admin;
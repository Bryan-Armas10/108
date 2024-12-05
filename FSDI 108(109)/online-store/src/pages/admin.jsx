// import { useState } from "react";
// import "./styles/admin.css";

// function Admin() {

//     const [coupon, setCoupon] = useState({
//         code:'', // not requiret but helps a lot
//         discount:''
//     });
//     const [product, setProduct] = useState({
//         title:"",
//         category:"",
//         image:"",
//         price:""
//     })

//     function handleCoupponInput(e){
//         // console.log("value change",e.target.value);   
//         const val = e.target.value;
//         const name = e.target.name;
//         // rule for state variables (if array or obj -> 3steps )
//         // create a copy
//         let copy = {...coupon}
//         //modify the copy
//         if(name === "discount"){
//                 copy.discount = val;
//         }
//         else{
//             copy.code = val;
//         }
//         //set the copy back 
//         setCoupon(copy); 
//     }

//     function saveCoupon(){
//         console.log(coupon);
//     }

//     function handleProductInput(e){
//         const val = e.target.value;
//         const name = e.target.name;

//         let copy = {...product};
//         copy[name] = val;
//         setProduct(copy);
//     }

//     function saveProduct(){
//         console.log(product);
//     }

//     return(
//         <div className="admin page">
//             <h1>Store Administration</h1>

//             <div className="parent">

//                 <div className="products form">
//                     <h3>Create Products</h3>

//                     <div className="mb-3">
//                         <label className="form-label">Title</label>
//                         <input type="text" className="form-control" onBlur={handleProductInput} name="title"></input>
//                     </div>
                    
//                     <div className="mb-3">
//                         <label className="form-label">Category</label>
//                         <input type="text" className="form-control" onBlur={handleProductInput} name="category"></input>
//                     </div>

//                     <div className="mb-3">
//                         <label className="form-label">Image</label>
//                         <input type="text" className="form-control" onBlur={handleProductInput} name="image"></input>
//                     </div>
                    
//                     <div className="mb-3">
//                         <label className="form-label">Price</label>
//                         <input type="number" className="form-control" onBlur={handleProductInput} name="price"></input>
//                     </div>

//                     <div className="mb-3 btn-container">
//                         <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>                        
//                     </div>
//                 </div>

//                 <div className="coupons form">
//                     <h3>Create Coupons</h3>

//                     <div className="mb-3">
//                         <label className="form-label">Code</label>
//                         <input type="text" className="form-control" onAbort={handleCoupponInput} name="code"></input>
//                     </div>
                    
//                     <div className="mb-3">
//                         <label className="form-label">Discount</label>
//                         <input type="number" className="form-control" onBlur={handleCoupponInput} name="discount"></input>
//                     </div>

//                     <div className="mb-5 btn-container">
//                         <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>                        
//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// }

// export default Admin;



import { useState } from "react";
import "./styles/admin.css";

function Admin() {
    const [coupon, setCoupon] = useState({
        code: '', // not required but helps a lot
        discount: ''
    });
    const [product, setProduct] = useState({
        title: "",
        category: "",
        image: "",
        price: ""
    });

    function handleCoupponInput(e) {
        const val = e.target.value;
        const name = e.target.name;
        let copy = { ...coupon };
        if (name === "discount") {
            copy.discount = val;
        } else {
            copy.code = val;
        }
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);
    }

    function handleProductInput(e) {
        const val = e.target.value;
        const name = e.target.name;
        let copy = { ...product };
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
    }

    // Función para mostrar la vista previa de la imagen
    function renderImagePreview() {
        // Verificamos si la URL es válida para mostrar la imagen
        if (product.image) {
            return <img src={product.image} alt="Preview" className="image-preview" />;
        }
        return null;
    }

    return (
        <div className="admin page">
            <h1>Store Administration</h1>

            <div className="parent">

                <div className="products form">
                    <h3>Create Products</h3>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleProductInput}
                            name="title"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleProductInput}
                            name="category"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleProductInput}
                            name="image"
                        />
                    </div>

                    {/* Vista previa de la imagen */}
                    {renderImagePreview()}

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            onBlur={handleProductInput}
                            name="price"
                        />
                    </div>

                    <div className="mb-3 btn-container">
                        <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>
                    </div>
                </div>

                <div className="coupons form">
                    <h3>Create Coupons</h3>

                    <div className="mb-3">
                        <label className="form-label">Code</label>
                        <input
                            type="text"
                            className="form-control"
                            onAbort={handleCoupponInput}
                            name="code"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Discount</label>
                        <input
                            type="number"
                            className="form-control"
                            onBlur={handleCoupponInput}
                            name="discount"
                        />
                    </div>

                    <div className="mb-5 btn-container">
                        <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Admin;

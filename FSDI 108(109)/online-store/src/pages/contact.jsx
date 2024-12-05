import "./styles/contact.css"

function Contact(){
    return(
        <div className="contact">
            <h1>Contact</h1>

            <div className="parent">
                <div className="contact form">
                    <h3>Contact us</h3>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="title"></input>
                    </div>
                        
                    <div className="mb-3">
                        <label className="form-label">Last name</label>
                         <input type="text" className="form-control" name="category"></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">cellphone</label>
                        <input type="number" className="form-control" name="image"></input>
                    </div>
                        
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="price"></input>
                    </div>

                    <div className="mb-3 btn-container">
                        <button className="btn btn-outline-dark" >Send</button>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
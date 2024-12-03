import "./styles/about.css";
import { useState } from "react";

function About(){

    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }

    return(
        <div className="about">
            <h3>About Us</h3>
            <div className="box">
                <h2>Bryan Armas</h2>
                {visibleEmail ? <h5>bryan.armas@sdgku.edu</h5> : <label>Click the button to see my email</label>}
                <br></br>
                {
                    !visibleEmail
                        ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                        : null
                }
            </div>
        </div>
    )
}

export default About;
import React from "react";

import sun from "../sun.png";

export const Main = () => {
    

    return (
        <>
            <div className="card">
                <div className="border-primary">
                    <div className="card-body">
                        <h5 className="card-title">City</h5>
                        <h3 className="card-temperature">
                            9<span className="card-temperature__measure" >&#8451;</span>
                        </h3>
                        <img className="card-img" src={sun} alt="" />
                        <span className="card-title">Clear sky</span>
                    </div>
                </div>
            </div>
        </>
    );
};

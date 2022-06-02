import React from "react";

import sun from "../sun.png";
import pin from "../pin.png";

export const Card = ({ item }) => {
    const now = new Date();

    const timeFormatted = now.toLocaleTimeString().slice(0, -3);

    return (
        <div className="card">
            <div className="border-primary">
                <div className="card-body">
                    <div className="card-body__header">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-country">{item.country}</h6>
                    </div>

                    <h5 className="card-title">{timeFormatted}</h5>
                    <h3 className="card-temperature">
                        {item.temp}
                        <span className="card-temperature__measure">&#8451;</span>
                    </h3>
                    <img className="card-img" src={sun} alt="The weather icon" />
                    <div className="card-body__footer">
                        <span className="card-body__footer--title">{item.descr}</span>
                        <button className="card-body__footer--button">
                            <img className="card-body__footer--img" src={pin} alt="Pin this" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from "react";
import { useRecoilValue} from "recoil";
import { cityInfoState } from "../state/atoms";

import sun from "../sun.png";

export const Main = () => {
    const now = new Date();

    const smth = useRecoilValue(cityInfoState);
    const timeFormatted = now.toLocaleTimeString().slice(0, -3);

    return (
        <>
            <div className="card">
                <div className="border-primary">
                    <div className="card-body">
                        <div className="card-body__header">
                            <h5 className="card-title">{smth.name}</h5>
                            <h6>{smth.country}</h6>
                        </div>

                        <h5 className="card-title">{timeFormatted}</h5>
                        <h3 className="card-temperature">
                            {smth.temp}
                            <span className="card-temperature__measure">&#8451;</span>
                        </h3>
                        <img className="card-img" src={sun} alt="" />
                        <span className="card-title">{smth.descr}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

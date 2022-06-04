import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { citiesListState } from "../state/atoms";

import pin from "../images/pin.png";
import filledPin from "../images/filledPin.png";
import rubbish from "../images/delete.png";

import clear from "../images/sun.png";
import cloudy from "../images/cloud.png";
import thunderstorm from "../images/lightning.png";
import mist from "../images/mist.png";
import rainy from "../images/rain.png";
import snowy from "../images/snow.png";
import drizzle from "../images/drizzle.png";

export const Card = ({ item }) => {
    const [_citiesListState, setCitiesListState] = useRecoilState(citiesListState);
    const [image, setImage] = useState("");

    let date = new Date();
    date.setHours(date.getHours() + ((item.timezone - 10800) / 3600));
    const time = date.toLocaleTimeString().slice(0, -3)

    const makePinned = (item) => {
        if (!item.pinned) {
            setCitiesListState((prev) => {
                const items = prev.filter((elem) => elem.id !== item.id);
                return [
                    {
                        id: item.id,
                        name: item.name,
                        descr: item.descr,
                        pinned: !item.pinned,
                        temp: item.temp,
                        country: item.country,
                        timezone: item.timezone,
                    },
                    ...items,
                ];
            });
        } else {
            setCitiesListState((prev) => {
                const items = prev.filter((elem) => elem.id !== item.id);

                return items;
            });
        }
    };

    useEffect(() => {
        switch (item.descr) {
            case "Clouds":
                setImage(cloudy);
                break;
            case "Clear":
                setImage(clear);
                break;
            case "Haze":
                setImage(mist);
                break;
            case "Mist":
                setImage(mist);
                break;
            case "Drizzle":
                setImage(drizzle);
                break;
            case "Snow":
                setImage(snowy);
                break;
            case "Rain":
                setImage(rainy);
                break;
            case "Thunderstorm":
                setImage(thunderstorm);
                break;
            default:
                break;
        }
    }, [item.descr]);

    return (
        <div className="card">
            <div className="border-primary">
                <div className="card-body">
                    <div className="card-body__header">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-country">{item.country}</h6>
                    </div>
                    <div className="card-body__time">
                        <h5 className="card-time">{time}</h5>
                        {item.pinned ? <img className="card-body__time--img" src={filledPin} alt="Pin this" /> : null}
                    </div>

                    <h3 className="card-temperature">
                        {item.temp}
                        <span className="card-temperature__measure">&#8451;</span>
                    </h3>
                    <img className="card-img" src={image} alt="The weather icon" />
                    <div className="card-body__footer">
                        <span className="card-body__footer--title">{item.descr}</span>
                        <button className="card-body__footer--button" onClick={() => makePinned(item)}>
                            <img className="card-body__footer--img" src={item.pinned ? rubbish : pin} alt="Pin this" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

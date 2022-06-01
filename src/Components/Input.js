import { APIkey } from "./defaults";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";

export const Input = () => {
    const [temp, setTemp] = useState(""); // data.main.temp
    const [desr, setDesr] = useState(""); // data.weather.0
    const [city, setCity] = useState("Quebec"); // data.weather.0

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

    const fetchData = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setTemp(Math.trunc(+data.main.temp - 273));
                setDesr(data.weather[0].description);
                setCity(data.name);

                console.log(data);
                console.log(temp);
                console.log(desr);
                console.log(city);
            });
    };
    return (
        <div className="input-sum">
            <div className="input-sum__text">Show the weather in ...</div>
            <div className="input-group">
                <input type="text" className="input-group__field" placeholder="Search for the city" aria-label="Search for the city" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={fetchData}>
                    Subimt
                </button>
            </div>
        </div>
    );
};

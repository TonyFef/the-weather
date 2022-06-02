import { APIkey } from "./defaults";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import {cityNameState, cityInfoState } from "../state/atoms";

export const Input = () => {
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${APIkey}`)
            .then((res) => res.json())
            .then((data) => {
                setTempInfo((prevObj) => {
                    return { ...prevObj, descr: data.weather[0].main, temp: Math.trunc(+data.main.temp - 273) };
                });
            });
    }, []);


    const [tempCityName, setTempCityName] = useState("");
    const setTempInfo = useSetRecoilState(cityInfoState);
    const setCityName = useSetRecoilState(cityNameState);

    const fetchData = (e) => {
        e.preventDefault();
        setCityName(tempCityName);

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${tempCityName}&appid=${APIkey}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setTempInfo((prevObj) => {
                    return {
                        ...prevObj,
                        name: data.name,
                        descr: data.weather[0].main,
                        temp: Math.trunc(+data.main.temp - 273),
                        country: data.sys.country,
                    };
                });
            });
    };
    return (
        <>
            <div className="input-sum">
                <form className="row" onSubmit={fetchData}>
                    <div className="input-sum__text">Show the weather in ...</div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="input-group__field"
                            placeholder="Search for the city"
                            // aria-label="Search for the city"
                            onChange={(e) => {
                                setTempCityName(e.target.value);
                            }}
                        />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
                            Subimt
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

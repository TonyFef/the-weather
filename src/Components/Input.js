import { APIkey } from "./defaults";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { citiesListState } from "../state/atoms";
import { logRoles } from "@testing-library/react";

export const Input = () => {
    const [_citiesListState, setCitiesListState] = useRecoilState(citiesListState);
    const [typedCityName, setTypedCityName] = useState("");

    const fetchData = (e) => {
        e.preventDefault();

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${typedCityName}&appid=${APIkey}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                return {
                    id: data.id,
                    name: data.name,
                    descr: data.weather[0].main,
                    temp: Math.trunc(+data.main.temp - 273),
                    timezone: data.timezone,
                    country: data.sys.country,
                    pinned: false,
                    concreteWeather: data.weather[0].description,
                };
            })
            .then((newItem) => {
                const pinnedItems = _citiesListState.filter((item) => item.pinned === true);

                if (pinnedItems.length !== 0) {
                    setCitiesListState([newItem, ...pinnedItems]);
                } else {
                    setCitiesListState([newItem]);
                }
            })
            .then(() => {
                setTypedCityName("");
            });
    };
    return (
        <>
            <div className="input-sum">
                <form className="row" onSubmit={fetchData}>
                    <div className="input-sum__text">Show the weather in ...</div>
                    <div className="input-group">
                        <input
                            value={typedCityName}
                            type="text"
                            className="input-group__field"
                            placeholder="Search for the city"
                            onChange={(e) => {
                                setTypedCityName(e.target.value);
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

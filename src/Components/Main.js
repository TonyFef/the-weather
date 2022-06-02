import { useEffect } from "react";
import { APIkey } from "./defaults";
import { useRecoilState } from "recoil";
import { citiesListState } from "../state/atoms";
import { Card } from "./Card";

export const Main = () => {
    const [_citiesListState, setCitiesListState] = useRecoilState(citiesListState);

    useEffect(() => {
        _citiesListState.forEach((item) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${item.name}&appid=${APIkey}`)
                .then((res) => res.json())
                .then((data) => {
                    return data;
                })
                .then((newData) => {
                    setCitiesListState((prev) => {
                        const prevArrElem = prev.filter((item) => item.name != newData.name);
                        return [
                            ...prevArrElem,
                            {
                                id: newData.id,
                                name: newData.name,
                                descr: newData.weather[0].main,
                                temp: Math.trunc(+newData.main.temp - 273),
                                timezone: newData.timezone,
                                country: newData.sys.country,
                            },
                        ];
                    });
                });
            // .then(() => {
            //     console.log(_citiesListState);
            // })
        });
    }, []);

    return (
        <>
            {_citiesListState.map((item) => {
                return <Card item={item} key={item.id} />;
            })}
        </>
    );
};

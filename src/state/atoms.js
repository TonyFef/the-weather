import { atom } from "recoil";

export const cityNameState = atom({
    key: "cityNameState",
    default: "Moscow",
});
export const citiesListState = atom({
    key: "citiesListState",
    default: [
        {
            id: 5128581,
            name: "New York",
            temp: "",
            descr: "",
            timezone: "",
            country: "",
            pinned: true
        },
    ],
});


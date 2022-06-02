import { atom } from "recoil";

export const cityNameState = atom({
    key: "cityNameState",
    default: "Moscow",
});
// export const cityTempState = atom({
//     key: "cityTempState",
//     default: "",
// });
// export const cityDescrState = atom({
//     key: "cityDescrState",
//     default: "",
// });
// export const cityTimeState = atom({
//     key: "cityTimeState",
//     default: "",
// });
// export const cityCountryState = atom({
//     key: "cityCountryState",
//     default: "",
// });
export const cityInfoState = atom({
    key: "cityInfoState",
    default: {
        name: "Moscow",
        temp: "",
        descr: "",
        timezone: "",
        country: "RU",
    },
});
export const citiesListState = atom({
    key: "citiesListState",
    default: [
        {
            id: 524901,
            name: "Moscow",
            temp: "",
            descr: "",
            timezone: "",
            country: "RU",
        },
        {
            id: 5128581,
            name: "New York",
            temp: "",
            descr: "",
            timezone: "",
            country: "",
        },
        {
            id: 625144,
            name: "Minsk",
            temp: "",
            descr: "",
            timezone: "",
            country: "",
        },
    ],
});


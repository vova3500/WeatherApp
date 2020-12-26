export const setLoader = () => ({
    type: "SET_LOADER",
});
  
export const setWeather = (items) => ({
    type: "SET_WEATHER",
    payload: items,
});
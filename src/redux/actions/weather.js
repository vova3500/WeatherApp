import {weatherAPI} from "../../api"

export const setLoader = () => ({
    type: "SET_LOADER",
});
  
export const setWeather = (items) => ({
    type: "SET_WEATHER",
    payload: items,
});

export const setCity = (city) => ({
    type: "SET_CITY",
    payload: city,
});

export const loadingWeather = (city) => async (dispatch) => {
    try{
        dispatch(setLoader())
        let response = await weatherAPI.getWeather(city);
        dispatch(setLoader())

        dispatch(setCity(response.data.city))

        const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        dispatch(setWeather(dailyData));
    }
    catch (e){
        dispatch(setLoader())
        console.log(e)
    }
  };
const setWeather ="SET_WEATHER"
const setLoader = "SET_LOADER";
const setSity = "SET_CITY";

const initialState = {
  city: null,
  items: null,
  loader: false
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case setLoader: {
      return {
        ...state,
        loader: !state.loader,
      };
    }

    case setWeather: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case setSity: {
      return {
        ...state,
        city: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default groups;
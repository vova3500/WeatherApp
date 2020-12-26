const setWeather ="SET_WEATHER"
const setLoader = "SET_LOADER";

const initialState = {
  items: [],
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
    default: {
      return state;
    }
  }
};

export default groups;
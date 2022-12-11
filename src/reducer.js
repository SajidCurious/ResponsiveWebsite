const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      intro: action.payload.intro,
      about1: action.payload.about1,
      about2: action.payload.about2,
      about3: action.payload.about3,
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      intro: action.payload.intro,
      about1: action.payload.about1,
      about2: action.payload.about2,
      about3: action.payload.about3,
    };
  }

  return state;
};

export default reducer;

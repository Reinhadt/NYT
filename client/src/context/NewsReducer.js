const NewsReducer = (state, action) => {
  switch (action.type) {
    case "setDay":
      console.log(action.type);
      return {
        ...state,
        day: action.payload,
      };
    case "setMonth":
      return {
        ...state,
        month: action.payload,
      };
    case "setYear":
      return {
        ...state,
        year: action.payload,
      };
    case "fetchStart":
      return {
        ...state,
        loading: true,
      };
    case "fetchSuccess":
      return {
        ...state,
        success: true,
        loading: false,
      };
    case "fetchFail":
      return {
        ...state,
        success: true,
        loading: false,
      };
    case "setNews":
      return {
        ...state,
        news: action.payload.items,
        pages: action.payload.pages,
        total: action.payload.total
      };
    case "updatePageCount":
      console.log('from reducer', action.payload)
      return {
        ...state,
        page: state.page + action.payload,
      };
    default:
      return state;
  }
};

export default NewsReducer;

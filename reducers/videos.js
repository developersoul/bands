const TYPE = 'VIDEOS';

const initialState = {
	items: [],
  loading: false,
	fail: false
};

function videosReducer(state = initialState, action) {

  switch (action.type) {
		case `FETCH_${TYPE}`:
			return { ...state, items: action.payload, loading: false };
			break;
    case `FETCHING_${TYPE}`:
  		return { ...state, loading: true};
  		break;
		case `FAIL_${TYPE}`:
	  	return { ...state, fail: true, loading: false };
	  	break;
    default:
    	return state;
  }
}

export default videosReducer;

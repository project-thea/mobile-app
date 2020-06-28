import {
	SET_UUID
} from '../actions/TrackingActions';

const initialState = {
	uuid: null,
	uploadURL: 'https://collect.project-thea.org',
	testStatus: null
}

export default function settings (state = initialState, action) {
  switch (action.type) {
	  case SET_UUID:
		return {
			...state,
			uuid: action.uuid
		}
	  default:
		return state;
  }
}
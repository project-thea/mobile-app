// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import tracking from './src/reducers/TrackingReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
	tracking
});
// Exports
export default rootReducer;
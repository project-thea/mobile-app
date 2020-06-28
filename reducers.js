// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import tracking from './src/reducers/TrackingReducer';
import settings from './src/reducers/SettingsReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
	tracking,
	settings
});
// Exports
export default rootReducer;
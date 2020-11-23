import { combineReducers } from 'redux';
import operationsList from './operationList';
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["operationsList"]
};

const rootReducer = combineReducers({
    operationsList: operationsList
});

export default persistReducer(persistConfig, rootReducer);


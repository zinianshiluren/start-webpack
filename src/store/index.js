import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from '../reducer/index.js';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(reducers),
    {
        // from: '北京',
        // to: '上海',
        // isCitySelectorVisible: false,
        // currentSelectingLeftCity: false,
        // cityData: null,
        // isLoadingCityData: false,
        // isDateSelectorVisible: false,
        // departDate: Date.now(),
        // highSpeed: false,
        relateRate:22,
        buildingCompleteRate:33,
        roomCompleteRate:33,
        lockRate:33,
        usedCount:20,
        limitCount:1000,
    },
    applyMiddleware(thunk)
);

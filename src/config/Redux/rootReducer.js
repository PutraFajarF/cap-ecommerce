import { combineReducers } from 'redux';

import orderProductReducer from './CartRedux/reducer';

const rootReducer = combineReducers({
  orderProduct: orderProductReducer
});

export default rootReducer;
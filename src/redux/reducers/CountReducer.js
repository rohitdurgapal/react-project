import { actionType } from '../constants'
const initialState = 0;
const countedValue = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return state + action.payload;
        case actionType.DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
}
export default countedValue;
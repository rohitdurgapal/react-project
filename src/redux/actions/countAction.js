import { actionType } from '../constants'
export const increment = (data) => {
    return {
        type: actionType.INCREMENT,
        payload: data
    }
}

export const decrement = (data) => {
    return {
        type: actionType.DECREMENT,
        payload: data
    }
}

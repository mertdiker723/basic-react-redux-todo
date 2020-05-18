import { Types } from "../action/action-type";

export function productReducer(state = [], action) {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return [...state, action.payload];
        case Types.DELETE_PRODUCT:
            return state.filter(item => item.id !== action.payload.id);
        case Types.UPDATE_PRODUCT:
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        default:
            return state;
    }
}
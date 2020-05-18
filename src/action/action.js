import { Types } from "./action-type";

export const addAction = (newProduct) => {
    return {
        type: Types.ADD_PRODUCT,
        payload: newProduct
    }
}

export const deleteAction = (item) => {
    return {
        type: Types.DELETE_PRODUCT,
        payload: item
    }
}

export const updateAction = (item) => {
    return {
        type: Types.UPDATE_PRODUCT,
        payload: item
    }
}
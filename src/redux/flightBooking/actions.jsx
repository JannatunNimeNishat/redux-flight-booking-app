import { BOOK, DELETE } from "./actionsTypes"

export const book = (value) =>{
    return {
        type: BOOK,
        payload:value,
    }
}

export const deleteBooking = (id) =>{
    return {
        type:DELETE,
        payload:id
    }
}
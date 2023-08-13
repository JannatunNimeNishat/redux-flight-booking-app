import { BOOK } from "./actionsTypes"

export const book = (value) =>{
    return {
        type: BOOK,
        payload:value,
    }
}


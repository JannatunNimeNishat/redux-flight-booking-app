import { BOOK } from "./actionsTypes"

const initalState = {
    booking: [

        { id: 0, from: 'Dhaka', to: 'Sylhet', date: '11-01-2023', guests: 2, className: 'Business' },
        { id: 1, from: 'Dhaka', to: 'Sylhet', date: '11-01-2023', guests: 2, className: 'Business' },
        { id: 2, from: 'Dhaka', to: 'Sylhet', date: '11-01-2023', guests: 2, className: 'Business' },
    ]
}


/* const initalState = [
    {id:0, from:'Dhaka',to:'Sylhet',date:'11-01-2023',guests:2,className:'Business'}
] */

const flightBookingReducer = (state = initalState, action) => {
    switch (action.type) {
        case BOOK:
            return {
                // ...state,
                booking: [ ...state.booking ,action.payload]

            }
        default:
            return state
    }
}

export default flightBookingReducer;


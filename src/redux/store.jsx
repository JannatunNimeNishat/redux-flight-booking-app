import { createStore } from "redux";
import flightBookingReducer from "./flightBooking/flightBookingReducer";

export const store = createStore(flightBookingReducer)
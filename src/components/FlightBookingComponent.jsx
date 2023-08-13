import { useDispatch, useSelector } from "react-redux";
import BookingRow from "./BookingRow";
import { useForm } from "react-hook-form";
import { book } from "../redux/flightBooking/actions";


const FlightBookingComponent = () => {
    const bookingState = useSelector(state => state.booking)
    
    // console.log(bookingState, bookingState.length);
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        // console.log({...data, id:bookingState.length});

        dispatch(book({...data, id:bookingState.length}))
    }


    return (
        <div>
            <header id="header">
                <div className="container">
                    <img src="./img/lws-logo.svg" alt="logo" className="logo" />
                    <div className="flex items-center">
                        <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
                        <button className="log-btn btn">Login</button>
                    </div>
                </div>
            </header>

            <section>

                <div className="mt-[160px] mx-4 md:mt-[160px] relative">
                    <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                        {/* form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="first-hero lws-inputform">

                            <div className="des-from">
                                <p>Destination From</p>
                                <div className="flex flex-row">
                                    <img src="./img/icons/Frame.svg" alt="" />
                                    <select  className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required
                                    {...register("from", {required:true})}
                                    >
                                        <option value="" hidden>Please Select</option>
                                        <option>Dhaka</option>
                                        <option>Sylhet</option>
                                        <option>Saidpur</option>
                                        <option>Cox's Bazar</option>
                                    </select>
                                </div>
                            </div>


                            <div className="des-from">
                                <p>Destination To</p>
                                <div className="flex flex-row">
                                    <img src="./img/icons/Frame.svg" alt="" />
                                    <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required
                                    {...register("to", {required:true})}
                                    >
                                        <option value="" hidden>Please Select</option>
                                        <option>Dhaka</option>
                                        <option>Sylhet</option>
                                        <option>Saidpur</option>
                                        <option>Cox's Bazar</option>
                                    </select>
                                </div>
                            </div>


                            <div className="des-from">
                                <p>Journey Date</p>
                                <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required {...register("date", {required:true})}/>
                            </div>


                            <div className="des-from">
                                <p>Guests</p>
                                <div className="flex flex-row">
                                    <img src="./img/icons/Vector (1).svg" alt="" />
                                    <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required {...register("guests", {required:true})}>
                                        <option value="" hidden>Please Select</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 Persons</option>
                                        <option value="3">3 Persons</option>
                                        <option value="4">4 Persons</option>
                                    </select>
                                </div>
                            </div>


                            <div className="des-from !border-r-0">
                                <p>className</p>
                                <div className="flex flex-row">
                                    <img src="./img/icons/Vector (3).svg" alt="" />

                                    <select className="outline-none px-2 py-2 w-full" name="ticketclassName" id="lws-ticketclassName" required
                                    {...register("className", {required:true})}
                                    >
                                        <option value="" hidden>Please Select</option>
                                        <option>Business</option>
                                        <option>Economy</option>
                                    </select>

                                </div>
                            </div>

                            <button className="addCity" type="submit" id="lws-addCity">
                                <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span className="text-sm">Book</span>
                            </button>
                        </form>
                    </div>
                </div>


                <div className="table-container">
                    <table className="booking-table">
                        <thead className="bg-gray-100/50">
                            <tr className="text-black text-left">
                                <th>Destination From</th>
                                <th>Destination To</th>
                                <th className="text-center">Journey Date</th>
                                <th className="text-center">Guests</th>
                                <th className="text-center">className</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">

                            {
                                bookingState.map(singleBooking => <BookingRow
                                    key={singleBooking?.id}
                                    singleBooking={singleBooking}
                                />)
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default FlightBookingComponent;

import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux/store'
import FlightBookingComponent from './components/FlightBookingComponent'
function App() {

  return (
    <Provider store={store}>
      <FlightBookingComponent />
    </Provider>
  )
}

export default App

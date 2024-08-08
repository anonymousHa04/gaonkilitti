import './App.css';
import DatePicker from './containers/DatePicker';
import Earnings from './containers/Earnigs';
import Table from './containers/Table';

function App() {
  return (
   <>
    <h1>Gaon Ki Litti</h1>
    {/* total earnings By far */}
    {/* total earnings this week */}
    <DatePicker />
    {/* Total items bought i.e cost price */}
    <Earnings /> {/* Total earnings for today*/}

    {/* sold items */}
    <Table />
   </> 
  )
}

export default App;

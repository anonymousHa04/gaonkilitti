import './App.css';
import DatePicker from './containers/DatePicker';
import Earnings from './components/Earnigs';
import Table from './containers/Table';

function App() {
  return (
   <div className='Container'>
    <h1>Gaon Ki Litti</h1>
    {/* total earnings By far */}
    <h1>Total Earnings: </h1>

    {/* total earnings this week */}
    <h1>Total Earnings This Week: </h1>

    <DatePicker />

    <Earnings /> {/* Total earnings for today*/}

    {/* toggle button/ dropdown to switch */}

    {/* sold items */}
    <Table />
   </div> 
  )
}

export default App;

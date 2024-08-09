import './App.css';
import DatePicker from './containers/DatePicker';
import Earnings from './components/Earnigs';
import Table from './containers/Table';
import Dropdown from './components/Dropdown';
// import { Counter } from './features/counter/Counter';

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
    <Dropdown title="Buy Or Sell" />
    {/* sold items */}
    <Table />

    {/* <Counter /> */}
   </div> 
  )
}

export default App;

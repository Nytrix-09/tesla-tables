import { useState, useEffect } from 'react';
import { salesDataApi } from './components/APIs';
import Table from './components/Table';
import TableFilterOptions from './components/TableFilter';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({region: "all", model: "all"});

  useEffect(() => {
    salesDataApi()
    .then((resp) => resp.json())
    .then((data) => setData(data));
  }, []);


  return (
    <div className='container'>
      <Table data={data} dispSum={true}/>
      <div className='container__v'>
        <TableFilterOptions data={data} setFilters={setFilters} />
        <Table data={data} filter={filters} />
        </div>
    </div>
  );

}

export default App;

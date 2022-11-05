import logo from './logo.svg';
import './App.css';
//Import Data
import MyBestToeflScoreData from './data/myBestToeflAcceptanceData';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
// import 'ag-grid-community/dist/styles/ag-theme-base.css';
// import 'ag-grid-community/dist/styles/ag-theme-blue.css';
// import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';
// import 'ag-grid-community/dist/styles/ag-theme-classic.css';
// import 'ag-grid-community/dist/styles/ag-theme-dark.css';
// import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
// import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {

  const rowData = [
    {
      "Program": "Graduate - Law",
      "Country": "Australia",
      "Institution": "Swinburne University of Technology",
      "State/Province": ""
    },
    {
      "Program": "Undergraduate",
      "Country": "Austria",
      "Institution": "MCI, The Entrepreneurial School",
      "State/Province": ""
    },
    {
      "Program": "Graduate",
      "Country": "Brazil",
      "Institution": "UNIVERSIDADE FEDERAL DO CARIRI",
      "State/Province": ""
    },
    {
      "Program": "Undergraduate",
      "Country": "Brazil",
      "Institution": "UNIVERSIDADE FEDERAL DO CARIRI",
      "State/Province": ""
    },
  ];
  const columnDefs = [
    { headerName: 'Program', field: 'Program' , width : 300 },
    { headerName: 'Country', field: 'Country' },
    { headerName: 'Institution', field: 'Institution', width:500 },
    { headerName: 'State/Province', field: 'State/Province' }
  ];

  const mycolDefs = useMemo(()=>({
    sortable:true,
    filter:true,
    resizable: true
  }));

  const [myBestScoreToeflData, setMyBestScoreToeflData] = useState([]);

  useEffect(() => {
    setMyBestScoreToeflData(MyBestToeflScoreData);
    console.log(myBestScoreToeflData);
  })

  return (
    <div>
      <Header></Header>
      <div className='ag-theme-alpine'
        style={{ height: 800, width:1300 , marginLeft : 50 }}
      >
        <AgGridReact className='grid'
          rowData={myBestScoreToeflData}
          defaultColDef={mycolDefs}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

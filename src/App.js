import React, { useState } from 'react';
import FileUpload from './Components/FileUpload';
import SeniorCitizensList from './Components/SeniorCitizensList';
import { exportToExcel } from './utils/exporttoExcel';
import './App.css';

const App = () => {
  const [seniorCitizens, setSeniorCitizens] = useState([]);

  const handleData = (data) => {
    const headers = data[0];
    const ageIndex = headers.indexOf('age');

    if (ageIndex === -1) {
      alert('Age column not found');
      return;
    }

    const filteredData = data.filter((row, index) => index === 0 || (row[ageIndex] >= 65));
    setSeniorCitizens(filteredData);
  };

  const downloadSeniorCitizens = () => {
    exportToExcel(seniorCitizens, 'Senior_Citizens_List');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>SENIOR CITIZEN FILTER</h1>
        <FileUpload onData={handleData} />
        <SeniorCitizensList data={seniorCitizens} />
        {seniorCitizens.length > 1 && (
          <button onClick={downloadSeniorCitizens}>Download Senior Citizens List</button>
        )}
      </div>
    </div>
  );
};

export default App;

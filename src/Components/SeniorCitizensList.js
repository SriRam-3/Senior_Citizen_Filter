import React from 'react';


const SeniorCitizensList = ({ data }) => {
  if (!data || data.length === 0) {
    return <div><h2>No senior citizens found.</h2></div>;
  }

  return (
    <div>
      <h2>Senior Citizens</h2>
      <table>
        <thead>
          <tr>
            {data[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeniorCitizensList;

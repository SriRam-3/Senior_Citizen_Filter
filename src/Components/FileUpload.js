import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FileUpload = ({ onData }) => {
  const [buttonText, setButtonText] = useState('Choose File');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setButtonText('File Uploaded');
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      onData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        id="file-upload-input"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      />
      <label htmlFor="file-upload-input" className="file-upload-label">
        {buttonText}
      </label>
    </div>
  );
};

export default FileUpload;

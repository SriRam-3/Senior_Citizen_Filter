import * as XLSX from 'xlsx';

export const exportToExcel = (data, filename) => {
  // Convert data array to sheet
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Create a new workbook and append the sheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Write the workbook to a file
  XLSX.writeFile(wb, `${filename}.xlsx`);
};

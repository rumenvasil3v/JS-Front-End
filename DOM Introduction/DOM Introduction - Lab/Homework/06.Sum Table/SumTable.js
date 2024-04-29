function sumTable() {
    const firstTable = document.querySelectorAll('table:nth-child(1) tbody td:nth-child(2):not(#sum)');
   
    let sum = 0;
    for (const tableData of firstTable) {
        sum += Number(tableData.textContent);
    }

    const totalTableData = document.getElementById('sum');
    totalTableData.textContent = sum;
}
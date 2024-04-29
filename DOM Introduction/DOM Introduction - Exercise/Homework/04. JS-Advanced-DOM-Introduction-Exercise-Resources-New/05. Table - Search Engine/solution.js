function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputFieldText = document.getElementById('searchField');
      const tableRows = Array.from(document.querySelector('tbody').children);

      for (const tableRow of tableRows) {
         const tableRowData = Array.from(tableRow.children);
         let isItFound = false;
         
         for (const tableData of tableRowData) {
            if (tableData.textContent.includes(inputFieldText.value)) {
               isItFound = true;
               break;
            }
         }

         if (isItFound) {
            tableRow.className = 'select';
         } else {
            tableRow.className = '';
         }
      }

      inputFieldText.value = '';
   }
}
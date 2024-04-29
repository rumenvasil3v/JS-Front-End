function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textAreaElement = document.querySelector('div#inputs > textarea');
      const bestRestaurantDivElementParagraph = document.querySelector('div#bestRestaurant p');
      const bestRestaurantWorkersParagraphElement = document.querySelector('div#workers p');
      
      const pattern = /\"([A-Za-z0-9 \-,]+)\"/gm;
      let match = pattern.exec(textAreaElement.value);

      let bestRestaurant = {
         bestRestaurantName: '',
         bestSalary: 0,
         bestAverageSalaryOfRestaurant: 0,
         bestRestaurantWorkers: [],
      }

      while (match) {
         const currentRestaurant = match[1];

         const restaurantInfo = currentRestaurant.split(' - ');
         const restaurantName = restaurantInfo[0];

         const restaurantEmployees = restaurantInfo[1].split(', ');
         const employeesSet = new Map();

         for (const employee of restaurantEmployees) {
            employeesSet.set(employee.split(' ')[0], Number(employee.split(' ')[1]));
         }

         let currentRestaurantAverageSalary = 0;
         let currentRestaurantBestSalary = 0;

         for (const [employeeName, employeeSalary] of employeesSet) {
            currentRestaurantAverageSalary += employeeSalary;

            if (employeeSalary > currentRestaurantBestSalary) {
               currentRestaurantBestSalary = employeeSalary;
            }
         }

         currentRestaurantAverageSalary /= restaurantEmployees.length;
         
         if (currentRestaurantAverageSalary > bestRestaurant.bestAverageSalaryOfRestaurant) {
            bestRestaurant.bestRestaurantName = restaurantName;
            bestRestaurant.bestSalary = currentRestaurantBestSalary;
            bestRestaurant.bestAverageSalaryOfRestaurant = currentRestaurantAverageSalary;
            bestRestaurant.bestRestaurantWorkers = [];

            for (const employee of employeesSet) {
               bestRestaurant.bestRestaurantWorkers.push(employee);
            }
         }
         
         match = pattern.exec(textAreaElement.value);
      }

      if (!bestRestaurant.bestRestaurantName) {
         return;
      }

      let workersArray = bestRestaurant.bestRestaurantWorkers;
      workersArray = workersArray.sort(([firstEmployeeName, firstEmployeeSalary], [secondEmployeeName, secondEmployeeSalary]) => {
         return secondEmployeeSalary - firstEmployeeSalary;
      });

      const mappedArray = workersArray.map(([employeeName, employeeSalary]) => `Name: ${employeeName} With Salary: ${employeeSalary}`);

      bestRestaurantDivElementParagraph.textContent = `Name: ${bestRestaurant.bestRestaurantName} Average Salary: ${bestRestaurant.bestAverageSalaryOfRestaurant.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      bestRestaurantWorkersParagraphElement.textContent = mappedArray.join(' ');
   }
}
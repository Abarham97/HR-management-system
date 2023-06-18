let allEmployee = [];
let tableELement = document.getElementById("employeeTable");
let adRow = document.getElementById("AdministrationRow");
let marRow = document.getElementById("MarketingRow");
let finRow = document.getElementById("FinanceRow");
let devRow = document.getElementById("DevelopmentRow");
let adEmployee = 0;
let marEmplyoee = 0;
let finEmployee = 0;
let devEmployee = 0;

let adSalary = 0;
let marSalary = 0;
let finSalary = 0;
let devSalary = 0;
let avgad = 0;
let avgma = 0;
let avgdev = 0;
let finavg = 0;
let adArray=[];
let marArray=[];
let finArray=[];
let devArray=[];

function getData() {

    let retriveArr = localStorage.getItem('employee');
    let objArr = JSON.parse(retriveArr);
    // console.log(objArr);
    return objArr



}

allEmployee = getData();

console.log(allEmployee);


function noEmployee(obj) {

    if (obj.Department == "Administration") {
        adEmployee += 1;
        

    }

    if (obj.Department == "Marketing") {
        marEmplyoee += 1;

    }

    if (obj.Department == "Development") {
        devEmployee += 1;

    }

    if (obj.Department == "Finance") {
        finEmployee += 1;

    }


}//noEmployee

function calSalary(obj) {

    if (obj.Department == "Administration")
        adSalary = Math.round(adSalary + obj.Salary);

    if (obj.Department == "Marketing")
        marSalary = Math.round(marEmplyoee + obj.Salary);
    if (obj.Department == "Development")
        devSalary = Math.round(devSalary + obj.Salary);
    if (obj.Department == "Finance")
        finSalary = Math.round(finSalary + obj.Salary);


}

function avgSalary(obj) {
    if (obj.Department == "Administration")
        avgad = Math.round(adSalary / adEmployee);
    if (obj.Department == "Marketing")
        avgma = Math.round(marSalary / marEmplyoee);
    if (obj.Department == "Development")
        avgdev = Math.round(devSalary / devEmployee);
    if (obj.Department == "Finance")
        finavg = Math.round(finSalary / finEmployee);


}

function renderToTablead(obj) {

 let tdElement = document.createElement("td");
        tdElement.textContent = obj[0];
        adRow.appendChild(tdElement);

        let tdElement2 = document.createElement("td");
        tdElement2.textContent = obj[2];
        adRow.appendChild(tdElement2);

        let tdElement3 = document.createElement("td");
        tdElement3.textContent = obj[1];
        adRow.appendChild(tdElement3);


}

function renderToTablema(obj) {

    let tdElement = document.createElement("td");
           tdElement.textContent = obj[0];
           marRow.appendChild(tdElement);
   
           let tdElement2 = document.createElement("td");
           tdElement2.textContent = obj[2];
           marRow.appendChild(tdElement2);
   
           let tdElement3 = document.createElement("td");
           tdElement3.textContent = obj[1];
           marRow.appendChild(tdElement3);
   
   
   }

   function renderToTabledev(obj) {

    let tdElement = document.createElement("td");
           tdElement.textContent = obj[0];
           devRow.appendChild(tdElement);
   
           let tdElement2 = document.createElement("td");
           tdElement2.textContent = obj[2];
           devRow.appendChild(tdElement2);
   
           let tdElement3 = document.createElement("td");
           tdElement3.textContent = obj[1];
           devRow.appendChild(tdElement3);
   
   
   }


   function renderToTablefin(obj) {

    let tdElement = document.createElement("td");
           tdElement.textContent = obj[0];
           finRow.appendChild(tdElement);
   
           let tdElement2 = document.createElement("td");
           tdElement2.textContent = obj[2];
           finRow.appendChild(tdElement2);
   
           let tdElement3 = document.createElement("td");
           tdElement3.textContent = obj[1];
           finRow.appendChild(tdElement3);
   
   
   }


for (let i = 0; i < allEmployee.length; i++) {
    noEmployee(allEmployee[i]);

    calSalary(allEmployee[i]);

    avgSalary(allEmployee[i]);



}//fori




adArray.push(adEmployee);
adArray.push(adSalary);
adArray.push(avgad);
marArray.push(marEmplyoee);
marArray.push(marSalary);
marArray.push(avgma);
finArray.push(finEmployee);
finArray.push(finSalary);
finArray.push(finavg);

finArray.push(devSalary);
finArray.push(avgdev);
devArray.push(devEmployee);
devArray.push(devSalary);
devArray.push(avgdev);


    renderToTablead(adArray);
    renderToTablema(marArray);
    renderToTabledev(devArray);
    renderToTablefin(finArray)
    console.log("test");





console.log("ad", adEmployee);
console.log("cal", adSalary);
console.log("avg", finavg);
console.log("array",adArray);
console.log("array",marArray);











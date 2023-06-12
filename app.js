
let allEmployee = [];
let form = document.getElementById("form");
// let divCard = document.getElementById("employeeCard");
// let divImg = document.getElementById("employeeImage");
let secCard = document.getElementById("cardSection");

function Employee(EmployeeID, FullName, Department, Level, ImageURL, Salary) {

    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = Salary;
    allEmployee.push(this);



}

Employee.prototype.renderEmployee = function () {



    let divCard = document.createElement("div");
    divCard.style.width = "300px";
    divCard.style.height = "350px";
    divCard.style.marginTop = "50px";
    divCard.style.marginLeft = "30px";
    divCard.style.backgroundColor = "#1F6E8C";

    // position: relative;
    // height: 150px ;
    // width: 150px;
    // background-color: white;
    // top: 50px;
    // left: 80px;
    // border-radius: 50%;

    let divImg = document.createElement("div");
    divImg.style.position = "relative";
    divImg.style.height = "150px";
    divImg.style.width - "150px";
    divImg.style.top = "50px";
    divImg.style.left = "80px";
    divImg.style.borderRadius = "50%";

    divCard.appendChild(divImg);


    let fullName = document.getElementById("fName").value;
    let fullNameElement = document.createElement("p");
    fullNameElement.style.marginTop = "100px"
    // fullNameElement.style.fontFamily="Lucida Console";
    fullNameElement.textContent = (`FullName:  ${fullName}`);
    divCard.appendChild(fullNameElement);

    this.calID(this.EmployeeID);
    let elmployeID = document.createElement("p");
    elmployeID.textContent = (`ID: ${this.EmployeeID}`)

    divCard.appendChild(elmployeID);


    let Department = document.getElementById("Department")
    let departmentEle = document.createElement("p");
    let depvalue = Department.value;
    // depvalue.style.fontFamily="Lucida Console";
    departmentEle.textContent = (`Department:  ${depvalue}`);
    divCard.appendChild(departmentEle);

    let level = document.getElementById("level");
    let levelEle = document.createElement("p");
    let levelValue = level.value;
    // levelValue.style.fontFamily="Lucida Console";
    levelEle.textContent = (`Level:  ${levelValue}`);
    divCard.appendChild(levelEle);

    let imgURL = document.getElementById("img").value;

    // let imgURL=document.getElementById("img");
    let imgEle = document.createElement("img")
    imgEle.src = imgURL;
    imgEle.style.height = "150px";
    imgEle.style.width = "150px";
    imgEle.style.borderRadius = "50%";
    divImg.appendChild(imgEle)

    let salEle = document.createElement("p");
    salEle.textContent = (`Salary:  ${this.Salary}`)
    secCard.appendChild(divCard);

    

}
Employee.prototype.calID = function () {

    this.EmployeeID=Math.floor(Math.random()*9000+1000)


}

Employee.prototype.calSalary = function (min, max) {



    this.Salary = Math.floor(Math.random() * (max - min + 1) + min);
    this.Salary = this.Salary - (this.Salary * 0.075);




}





form.addEventListener("submit", registerHandller);
function registerHandller(event) {
    event.preventDefault();

    // console.log(event);


    let EmployeeID = this.EmployeeID;
    let FullName = event.target.fName.value;
    let Department = event.target.Department.value;
    let level = event.target.level.value;
    let ImageURL = event.target.img.value;
    // console.log(FullName);
    // console.log(Department);
    // console.log(level);
    // console.log(ImageURL);

    console.log(allEmployee);

    let newEmployee = new Employee(EmployeeID, FullName, Department, level, ImageURL)
    allEmployee.push(newEmployee);
    newEmployee.renderEmployee();





}




let GhaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior")
let LanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior")
let TamaraAyoub = new Employee(1002, "Tamara Ayoub Ali", "Marketing", "Senior")
let SafiWalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior")
let OmarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior")
let RanaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior")
let HadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior")

// for(let i=0;i<allEmployee.length;i++)
// {

//     // console.log(allEmployee[i].calSalary(500,100));
//     if(allEmployee[i].Level=="Senior")
//     console.log(allEmployee[i].calSalary(1500,2000));
//     else if (allEmployee[i].Level=="Mid-Senior")
//     console.log(allEmployee[i].calSalary(1000,1500));
//     else if(allEmployee[i].Level=="Junior")
//     console.log(allEmployee[i].calSalary(500,1000));

// }
// for(let i=0;i<allEmployee.length;i++){

//    allEmployee[i].renderEmployee();

// }




let allEmployee =[];
let form = document.getElementById("form");
let divCard= document.getElementById("employeeCard");
let divImg= document.getElementById("employeeImage");

function Employee (EmployeeID,FullName,Department,Level,ImageURL,Salary){

    this.EmployeeID=EmployeeID;
    this.FullName=FullName;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
    this.Salary=Salary;
  
    allEmployee.push(this);
}

Employee.prototype.renderEmployee=function(){
let FullName= document.getElementById("fName");
divCard.appendChild(FullName);
// let Department=document.getElementById("Department");
// divCard.appendChild(Department);
// let level=document.getElementById("level");
// divCard.appendChild(level);
// let imgUrl=document.getElementById("img");
// divImg.appendChild(imgUrl);

}



//Employee (EmployeeID,FullName,Department,Level,ImageURL,Salary)


form.addEventListener("submit",registerHandller);
function registerHandller(event)
{
    event.preventDefault();
  
    console.log(event);

    
    let EmployeeID=this.EmployeeID;
     let FullName=event.target.fName.value;
    let Department=event.target.Department.value;
    let level=event.target.level.value;
    let ImageURL=event.target.img.value;
    console.log(FullName);

    let newEmployee = new Employee(FullName,Department,level,ImageURL)

    newEmployee.renderEmployee();


   


}

Employee.prototype.calID=function(id){

    this.EmployeeID=this.EmployeeID+1;
console.log(this.EmployeeID);

}

Employee.prototype.calSalary=function(min,max){

    
       
    this.Salary= Math.floor(Math.random() * (max - min + 1) + min);
      this.Salary=this.Salary-(this.Salary*0.075);


    
    
}
let GhaziSamer=new Employee(1000,"Ghazi Samer","Administration","Senior")
let LanaAli=new Employee(1001,"Lana Ali","Finance","Senior")
let TamaraAyoub=new Employee(1002,"Tamara Ayoub Ali","Marketing","Senior")
let SafiWalid=new Employee(1003,"Safi Walid","Administration","Mid-Senior")
let OmarZaid=new Employee(1004,"Omar Zaid","Development","Senior")
let RanaSaleh=new Employee(1005,"Rana Saleh","Development","Junior")
let HadiAhmad=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior")

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


let id=2000;
for(let i=0;i<allEmployee.length;i++)
{
    allEmployee[i].calID(id);

}
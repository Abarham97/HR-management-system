
let allEmployee =[];
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

    document.write(`
    
   
  
   <tr>
<td>${this.EmployeeID}</td>
<td>${this.FullName}</td>
<td>${this.Department}</td>
<td>${this.Level}</td>
<td>${this.Salary}</td>
</tr> 


   
 `);
   
    
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

for(let i=0;i<allEmployee.length;i++)
{

    // console.log(allEmployee[i].calSalary(500,100));
    if(allEmployee[i].Level=="Senior")
    console.log(allEmployee[i].calSalary(1500,2000));
    else if (allEmployee[i].Level=="Mid-Senior")
    console.log(allEmployee[i].calSalary(1000,1500));
    else if(allEmployee[i].Level=="Junior")
    console.log(allEmployee[i].calSalary(500,1000));

}
for(let i=0;i<allEmployee.length;i++){

   allEmployee[i].renderEmployee();

}





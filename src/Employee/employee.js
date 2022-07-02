let formEmployee = document.getElementById('formEmployee');
let employeeId = document.getElementById('employeeId');
let employeeName = document.getElementById('employeeName');
let tableEmployee = document.querySelector('#tableEmployee tbody');

class Employee{
    constructor(id ,name ){
        this.id = id;
        this.name = name;
    }
    static createNewRow(id, name){
        //init tr
        const trEmployee = document.createElement("tr");
        trEmployee.innerHTML = `
        <tr>
            <td> ${id}</td>
            <td> ${name} </td>
            <td> <button class="delete" data-id="${id}">x</button></td>
        </tr>`

        tableEmployee.appendChild(trEmployee);
    }

    showData(){
        Employee.createNewRow(this.id, this.name);
        return this
    }

    storeEmployee(){
       const allEmployee = JSON.parse(localStorage.getItem("employees") ) ?? [];
       allEmployee.push({id:this.id,name:this.name});
       localStorage.setItem("employees",JSON.stringify(allEmployee));
    }

    static showAllEmployee(){
        if(localStorage.getItem("employees")){
            JSON.parse(localStorage.getItem("employees")).forEach((item) => {
                Employee.createNewRow(item.id, item.name);
            })
        }
    }
}

Employee.showAllEmployee();

formEmployee.addEventListener("submit" , (e) => {
    // stop reloaded page
    e.preventDefault();

    //init instants on Employee
    const newEmployee = new Employee(employeeId.value ,employeeName.value);

    newEmployee.showData().storeEmployee();
    //remove data from input
    employeeId.value = '';
    employeeName.value = '';
});


tableEmployee.addEventListener("click", (e) => {
    //remove localStorage
    if(+e.target.classList.contains("delete")){
        const DataId = e.target.getAttribute("data-id");
        const reEmployees = JSON.parse(localStorage.getItem("employees"));
        const filterEmployees = reEmployees.filter(item => item.id !== DataId);
        localStorage.setItem("employees" , JSON.stringify(filterEmployees));

        alert("Are You Sure To Delete This !");

        //first parent=> tr ,second parent=> td 
        //remove of html
        e.target.parentElement.parentElement.remove();
    }
})
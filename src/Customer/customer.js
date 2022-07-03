let formCustomer= document.getElementById('formCustomer');
let customerId = document.getElementById('customerId');
let customerName = document.getElementById('customerName');
let tableCustomer = document.querySelector('#tableCustomer tbody');

class Customer{
    constructor(id ,name ){
        this.id = id;
        this.name = name;
    }
    static createNewRow(id, name){
        //init tr
        const trCustomer = document.createElement("tr");
        trCustomer.innerHTML = `
        <tr>
            <td> ${id}</td>
            <td> ${name} </td>
            <td> <button class="delete" data-id="${id}">x</button></td>
        </tr>`

        tableCustomer.appendChild(trCustomer);
    }

    showData(){
        Customer.createNewRow(this.id, this.name);
        return this
    }

    storeEmployee(){
       const allCustomer = JSON.parse(localStorage.getItem("customers") ) ?? [];
       if (allCustomer.some((e) => e.id == customerId.value)) {
        alert("this Id is already exits, please try another one");
        location.reload();
      } else {
         alert('customer added!')
        allCustomer.push({id:this.id,name:this.name});
        localStorage.setItem("customers",JSON.stringify(allCustomer));
      }
     
    }

    static showAllEmployee(){
        if(localStorage.getItem("customers")){
            JSON.parse(localStorage.getItem("customers")).forEach((item) => {
                Customer.createNewRow(item.id, item.name);
            })
        }
    }
}

Customer.showAllEmployee();

formCustomer.addEventListener("submit" , (e) => {
    // stop reloaded page
    e.preventDefault();

    //init instants on Employee
    const newCustomer = new Customer(customerId.value ,customerName.value);

    newCustomer.showData().storeEmployee();
    //remove data from input
    customerId.value = '';
    customerName.value = '';
});


tableCustomer.addEventListener("click", (e) => {
    //remove localStorage
    if(+e.target.classList.contains("delete")){
        const DataId = e.target.getAttribute("data-id");
        const reCustomer = JSON.parse(localStorage.getItem("customers"));
        const filterEmployees = reCustomer.filter(item => item.id !== DataId);
        localStorage.setItem("customers" , JSON.stringify(filterEmployees));

        alert("Are You Sure To Delete This !");

        //first parent=> tr ,second parent=> td 
        //remove of html
        e.target.parentElement.parentElement.remove();
    }
})
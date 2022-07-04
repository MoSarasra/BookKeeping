let formReciept = document.getElementById('formReciept');
let RecieptId = document.getElementById('recieptId');
let amount = document.getElementById('amount');
let timeReciept = document.getElementById('dateReciept');
let tableReciept = document.querySelector('#tableCustomers tbody');



class Reciept{
    constructor(id ,amount ,time){
        this.id = id;
        this.amount = amount;
        this.time = time;
    }


    static createNewRow(id, amount ,time){
        //init tr
        const trReciept = document.createElement("tr");
        trReciept.innerHTML = `
        <tr>
            <td> ${id}</td>
            <td> ${amount} </td>
            <td> ${time} </td>
            <td> <button class="delete" data-id="${id}">x</button></td>
        </tr>`

        tableReciept.appendChild(trReciept);
    }

    showData(){
        Reciept.createNewRow(this.id, this.amount, this.time);
        return this
    }

    storeReciept(){
       const allReciept = JSON.parse(localStorage.getItem("Reciept") ) ?? [];
       const allCustomer = JSON.parse(localStorage.getItem("customers") ) ?? [];

       if (allCustomer.some((e) => e.id != RecieptId.value)) {
       alert('id is not exist! add a user then try again');
       location.reload();
      } 
      else if(typeof parseInt(amount.value) != "number"){
          alert('amount must be a number, try again');
          location.reload();
      }
      
      else {
          alert('record added');
         allReciept.push({id:this.id,amount:this.amount, time:this.time});
         localStorage.setItem("Reciept",JSON.stringify(allReciept));
      }




    }

    static showAllReciept(){
        if(localStorage.getItem("Reciept")){
            JSON.parse(localStorage.getItem("Reciept")).forEach((item) => {
                Reciept.createNewRow(item.id, item.amount, item.time);
            })
        }
    }
}

Reciept.showAllReciept();

formReciept.addEventListener("submit" , (e) => {
    // stop reloaded page
    e.preventDefault();

    //init instants on Payment
    const newReciept = new Reciept(RecieptId.value ,amount.value ,timeReciept.value);

    newReciept.showData().storeReciept();
    //remove data from input
    RecieptId.value = '';
    amount.value = '';
    timeReciept.value = '';
});


tableReciept.addEventListener("click", (e) => {
    //remove localStorage
    if(+e.target.classList.contains("delete")){
        const DataId = e.target.getAttribute("data-id");
        const reReciept = JSON.parse(localStorage.getItem("Reciept"));
        const filterReciept = reReciept.filter(item => item.id !== DataId);
        localStorage.setItem("Reciept" , JSON.stringify(filterReciept));

        alert("Are You Sure To Delete This !");

        //first parent=> tr ,second parent=> td 
        //remove of html
        e.target.parentElement.parentElement.remove();
    }
})

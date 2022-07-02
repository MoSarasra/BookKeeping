let formPayment = document.getElementById('formPayment');
let paymentId = document.getElementById('paymentId');
let employeeName = document.getElementById('employeeName');
let timePayment = document.getElementById('datePayment');
let tablePayment = document.querySelector('#tablePayment tbody');

class Payment{
    constructor(id ,name ,time){
        this.id = id;
        this.name = name;
        this.time = time;
    }
    static createNewRow(id, name ,time){
        //init tr
        const trPayment = document.createElement("tr");
        trPayment.innerHTML = `
        <tr>
            <td> ${id}</td>
            <td> ${name} </td>
            <td> ${time} </td>
            <td> <button class="delete" data-id="${id}">x</button></td>
        </tr>`

        tablePayment.appendChild(trPayment);
    }

    showData(){
        Payment.createNewRow(this.id, this.name, this.time);
        return this
    }

    storePayment(){
       const allPayment = JSON.parse(localStorage.getItem("payments") ) ?? [];
       allPayment.push({id:this.id,name:this.name, time:this.time});
       localStorage.setItem("payments",JSON.stringify(allPayment));
    }

    static showAllPayment(){
        if(localStorage.getItem("payments")){
            JSON.parse(localStorage.getItem("payments")).forEach((item) => {
                Payment.createNewRow(item.id, item.name, item.time);
            })
        }
    }
}

Payment.showAllPayment();

formPayment.addEventListener("submit" , (e) => {
    // stop reloaded page
    e.preventDefault();

    //init instants on Payment
    const newPayment = new Payment(paymentId.value ,employeeName.value ,timePayment.value);

    newPayment.showData().storePayment();
    //remove data from input
    paymentId.value = '';
    employeeName.value = '';
    timePayment.value = '';
});


tablePayment.addEventListener("click", (e) => {
    //remove localStorage
    if(+e.target.classList.contains("delete")){
        const DataId = e.target.getAttribute("data-id");
        const rePayments = JSON.parse(localStorage.getItem("payments"));
        const filterPayments = rePayments.filter(item => item.id !== DataId);
        localStorage.setItem("payments" , JSON.stringify(filterPayments));

        alert("Are You Sure To Delete This !");

        //first parent=> tr ,second parent=> td 
        //remove of html
        e.target.parentElement.parentElement.remove();
    }
})
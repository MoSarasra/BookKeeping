let searchId = document.getElementById('searchId');
let fromDatePayment = document.getElementById('fromDatePayment').value;
let toDatePayment = document.getElementById('toDatePayment').value;
let tablePayment = document.querySelector('#tablePaymentReport tbody');
let totalAmount = document.querySelector('#total-amount tbody');fromDatePayment
const rePayments = JSON.parse(localStorage.getItem("payments"));

let sum = 0
//PaymentReport.showAllPayment();
formPayment.addEventListener("submit" , (e) => {
   e.preventDefault();

 for(let i=0; i<rePayments.length; i++){
   if(rePayments[i].id == searchId.value){
      //alert('Found');

      const trPayment = document.createElement("tr");
      trPayment.innerHTML = `
      <tr>
          <td> ${rePayments[i].id}</td>
          <td> ${rePayments[i].amount} </td>
          <td> ${rePayments[i].time} </td>
      </tr>`
      
      sum+=parseInt(rePayments[i].amount)
      tablePayment.appendChild(trPayment);
   }
   if(i == rePayments.length-1 && rePayments[i].id != searchId.value){
     alert('Not found');
   }

 }
 const trAmount = document.createElement("tr");
 totalAmount.innerHTML = `
    <tr>
    <td> ${sum}</td>
    </tr>
 `

});
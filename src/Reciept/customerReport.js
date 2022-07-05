let formRecieptReport = document.getElementById('formRecieptReport');
let searchId =  document.getElementById('searchId');
let startTimeReciept = document.getElementById('beginningDateReciept');
let endTimeReciept = document.getElementById('endDateReciept');
let tableRec = document.querySelector('#tableCustomers tbody');


const allReciept = JSON.parse(localStorage.getItem("Reciept") ) ?? [];
let sum =0;
function getCustomerReport(){

    startTimeReciept = Date.parse(startTimeReciept.value);
    endTimeReciept = Date.parse(endTimeReciept.value);
   if(allReciept.some((e) => e.id == searchId.value)){
    for(let i =0; i<= allReciept.length ; i++){
        if (Date.parse(allReciept[i].time) >= startTimeReciept && Date.parse(allReciept[i].time) <= endTimeReciept) {
            if(allReciept[i].id == searchId.value ){
            sum += allReciept[i].amount; 
            const trRec = document.createElement("tr");
            trRec.innerHTML = `
            <tr>
                <td> ${allReciept[i].id}</td>
                <td> ${allReciept[i].amount} </td>
                <td> ${allReciept[i].time} </td>
                <td> ${sum} </td>
            </tr>`,
    
            tableRec.appendChild(trRec);
            }
    }
    }

   }

else {
        alert('id id not exist');
    }
    
}  



    
    
   
   
 

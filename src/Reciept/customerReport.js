let formRecieptReport = document.getElementById('formRecieptReport');
let startTimeReciept = document.getElementById('beginningDateReciept');
let endTimeReciept = document.getElementById('endDateReciept');
let tableRec = document.querySelector('#tableCustomers tbody');


function getCustomerReport(){
    const allReciept = JSON.parse(localStorage.getItem("Reciept") ) ?? [];
    startTimeReciept = Date.parse(startTimeReciept.value);
    endTimeReciept = Date.parse(endTimeReciept.value);
    if (allReciept.some((e) => Date.parse(e.time) >= startTimeReciept && Date.parse(e.time) <= endTimeReciept)) { 
            const trRec = document.createElement("tr");
            trRec.innerHTML = `
            <tr>
                <td> ${e.id}</td>
                <td> ${e.amount} </td>
                <td> ${e.time} </td>
            </tr>`,
    
            tableRec.appendChild(trRec);
      
    }

else {
        alert('try again');
    }
    
}  



    
    
   
   
 

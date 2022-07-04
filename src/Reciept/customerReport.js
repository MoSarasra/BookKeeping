let formRecieptReport = document.getElementById('formRecieptReport');
let startTimeReciept = document.getElementById('beginningDateReciept');
let endTimeReciept = document.getElementById('endDateReciept');
let tableRec = document.querySelector('#tableCustomers tbody');


function getCustomerReport(){
    const allReciept = JSON.parse(localStorage.getItem("Reciept") ) ?? [];
    startTimeReciept = Date.parse(startTimeReciept.value);
    endTimeReciept = Date.parse(endTimeReciept.value);


    if (allReciept.some((e) => Date.parse(e.time) >= startTimeReciept)) {
        alert('1');
        if (allReciept.some((e) => Date.parse(e.time) <= endTimeReciept)) {
            alert('2');
        const trRec = document.createElement("tr");
        // trRec.innerHTML = `
        // <tr>
        //     <td> ${record.ID}</td>
        //     <td> ${record.amount} </td>
        //     <td> ${record.date} </td>
        // </tr>`

        // tableRec.appendChild(trRec);
    }
    else {
        alert('try again');
    }
}else {
        alert('try again');
    }
    
}   



    
    
   
   
 

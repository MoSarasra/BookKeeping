let formReciept = document.getElementById('formReciept');
let RecieptId = document.getElementById('recieptId');
let customerName = document.getElementById('customerName');
let timeReciept = document.getElementById('dateReciept');
let tableReciept = document.querySelector('#tableCustomers tbody');

class Reciept{
    constructor(id ,name ,time){
        this.id = id;
        this.name = name;
        this.time = time;
    }
    static createNewRow(id, name ,time){
        //init tr
        const trReciept = document.createElement("tr");
        trReciept.innerHTML = `
        <tr>
            <td> ${id}</td>
            <td> ${name} </td>
            <td> ${time} </td>
            <td> <button class="delete" data-id="${id}">x</button></td>
        </tr>`

        tableReciept.appendChild(trReciept);
    }

    showData(){
        Reciept.createNewRow(this.id, this.name, this.time);
        return this
    }

    storeReciept(){
       const allReciept = JSON.parse(localStorage.getItem("Reciept") ) ?? [];
       allReciept.push({id:this.id,name:this.name, time:this.time});
       localStorage.setItem("Reciept",JSON.stringify(allReciept));
    }

    static showAllReciept(){
        if(localStorage.getItem("Reciept")){
            JSON.parse(localStorage.getItem("Reciept")).forEach((item) => {
                Reciept.createNewRow(item.id, item.name, item.time);
            })
        }
    }
}

Reciept.showAllReciept();

formReciept.addEventListener("submit" , (e) => {
    // stop reloaded page
    e.preventDefault();

    //init instants on Payment
    const newReciept = new Reciept(RecieptId.value ,customerName.value ,timeReciept.value);

    newReciept.showData().storeReciept();
    //remove data from input
    RecieptId.value = '';
    customerName.value = '';
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

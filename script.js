let save = document.querySelector('.save');
const expensename = document.querySelector('.nameinput');
const expense = document.querySelector('.expenseinput');
const date = document.querySelector('.dateinput');
let array = (JSON.parse(localStorage.getItem('array'))) || [];

save.addEventListener("click", e => {
    console.log("haha"); 
    e.preventDefault();
    
    let obj = {
        name: expensename.value,
        expense: expense.value,
        date: date.value
    };
    
    array.push(obj);
    localStorage.setItem("array",JSON.stringify(array));
    console.log(array);

});

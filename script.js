let save = document.querySelector(".save");
const expensename = document.querySelector(".nameinput");
const expense = document.querySelector(".expenseinput");
const date = document.querySelector(".dateinput");
let items = document.querySelector(".items");
items.innerHTML = "";
let array = JSON.parse(localStorage.getItem("array")) || [];
function deleteitems() {
  let deletesbtn = document.querySelectorAll(".delete");
  deletesbtn.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      array.splice(index, 1);
      localStorage.setItem("array", JSON.stringify(array));
      saveitems();
    });
  });
}

save.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    name: expensename.value,
    expense: expense.value,
    date: date.value,
  };

  array.push(obj);
  localStorage.setItem("array", JSON.stringify(array));
  saveitems();
  console.log(array);
});

function gethtml(name, amount, date) {
  items.innerHTML += `
    <div class="item">
                <h4>
                    ${name}
                </h4>
                <h4>
                    ${amount}
                </h4>
                <h4>
                    ${date}
                </h4>
                <button class="delete">
                    Delete
                </button>
            </div>
    `;
}
function saveitems() {
  items.innerHTML = "";
  for (let item of array) {
    gethtml(item.name, item.expense, item.date);
  }
  deleteitems();
}
saveitems();
// Challange i have faced during this
// 1. i attached the event listeners to all buttons. but when i delete it i recreate the whole array and when recreated the event listeners are not attached to that array. so i have to attach the event listeners again by making the function.

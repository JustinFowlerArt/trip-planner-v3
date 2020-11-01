// Selectors
const tripList = document.querySelector('.trip-list');
const newTripButton = document.querySelector('.new-trip');
const addExpenseButton = document.querySelectorAll('.add-expense')[0];
const expenseList = document.querySelectorAll('.expense-list')[0];

// Holds trip objects
let trips = [];

// Blueprint to create new trip object
class Trip {
    constructor(name) {
        this.name = name;
        this.expenses = [];
        this.total = 0;
    }

    // Add new expense object to expenses array
    addExpense(name, price) {
        this.expenses.push( new Expense(name, price) );
    }

    // Calculate total of trip expenses
    sumTotal() {
        this.total = 0;
        for ( let i = 0; i < this.expenses.length; i++) {
            this.total += this.expenses[i].price;
        } return this.total;
    }
}

// Blueprint to create new expense object
class Expense {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Base for writing trip HTML to page
let tripInfo = '';
function tripContent() {
    for ( let i = 0; i < trips.length; i++) {
        tripInfo = `
            <h2>${trips[i].name}</h2>
            <ul class="expense-list column flex">
                <button class="add-expense" id="${trips.length -1}">Add Expense</button>
                <li class="trip-total flex">
                    <p>Trip Total</p>
                    <p class="total">$${trips[i].total}</p>
                </li>
            </ul>
        `;
    }
}

// Create trip nodes
function tripDOM() {
    let section = document.createElement("section");
    section.className = "trip column flex";
    section.id = trips.length -1;
    section.innerHTML = tripInfo;
    tripList.appendChild(section);
}

// Create new trip object
newTripButton.addEventListener('click', () => {
    let tripName = prompt("Please name your trip");
    trips.push( new Trip(tripName) );
    tripContent();
    tripDOM();
});

// Create new expense object
addExpenseButton.addEventListener('click', () => {
    let expenseName = prompt("Please name your expense");
    let expensePrice = prompt("Please enter the expense amount");
    trips[0].addExpense(expenseName, expensePrice);
    expenseDOM();
});

// Create trip nodes
function expenseDOM() {
    let li = document.createElement("li");
    li.className = "expense flex";
    li.id = trips[0].expenses.length -1;
    li.innerHTML = `                
        <p>${trips[0].expenses[0].name}</p> 
        <p>$${trips[0].expenses[0].price}</p>
    `;
    expenseList.appendChild(li);
    expenseList.insertBefore(li, addExpenseButton);
}




















// denver.expenses.push( new Expense('Airfare', 125) );
// denver.expenses.push( new Expense('Rental Car', 275) );

// const trips = [
//     {
//         location: "Denver, CO",
//         expenses:
//         [
//            {
//                 expenseName: "Airfare",
//                 expensePrice: 125
//            },
//            {
//                 expenseName: "Rental Car",
//                 expensePrice: 275
//             }
//         ],
//         //Add function to calucate and display trip total
//         total: 400
//     },
//     {
//         location: "Seattle, WA",
//         expenses:
//         [
//            {
//                 expenseName: "Airfare",
//                 expensePrice: 350
//            },
//            {
//                 expenseName: "Airbnb",
//                 expensePrice: 500
//             }
//         ],
//         total: 850
//     }
// ];

// // Log trips content to console
// for ( let i = 0; i < trips.length; i++ ) {
//     console.log(`${trips[i].location}`);
//     let expenseName = '';
//     let expensePrice = 0;
//     for ( let j = 0; j < trips[i].expenses.length; j++ )
//     {
//         expenseName = trips[i].expenses[j].expenseName;
//         expensePrice = trips[i].expenses[j].expensePrice;
//         console.log(`${expenseName}`);
//         console.log(`${expensePrice}`);
//     }
//     console.log(`${trips[i].total}`);
// }

// Add function to add new expenses to trip
// function addExpense(expenseName, expensePrice) {
//     trips[0].expenses[0].expenseName.push(expenseName);
//     trips[0].expenses[0].expensePrice.push(expensePrice);
// }
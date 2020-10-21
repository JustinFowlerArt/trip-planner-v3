// Holds trip objects
const trips = [];

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

// Create new trip object
function addTrip(name) {
    trips.push( new Trip(name) );
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
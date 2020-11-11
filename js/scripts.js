// Selectors
const tripList = document.querySelector('.trip-list');
const newTripButton = document.querySelector('.new-trip');

// Holds trip objects
let trips = [];
let counter = 0;

// Blueprint to create new trip object
class Trip {
    constructor(name) {
        this.name = name;
        this.expenses = [];
        this.total = 0;
        this.id = counter;
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

// Generate trip HTML section element and contents
function getTripSectionElement (trip) {
    const section = document.createElement('section');
    section.id = `trip-section-${trip.id}`;
    section.className = "trip column flex";
    const tripHTMLContent = `        
        <h2>${trip.name}</h2>
        <ul class="expense-list column flex" id="expense-list-${trip.id}">
        </ul>
        <button class="add-expense" id="expense-button-${trip.id}">Add Expense</button>
        <div class="trip-total flex">
            <p>Trip Total</p>
            <p class="total">$${trip.total}</p>
        </div>
    `;
    section.innerHTML = tripHTMLContent;
    return section
}

// Button to create new trip object and populate it with HTML content
newTripButton.addEventListener('click', () => {
    let tripName = prompt("Please name your trip");
    const newTrip = new Trip(tripName)
    const sectionElement = getTripSectionElement(newTrip);
    tripList.appendChild(sectionElement);
    const newTripExpenseButton = document.querySelector(`#expense-button-${newTrip.id}`);
    newTripExpenseButton.addEventListener('click', () => {
        const newTripExpenseList = document.querySelector(`#expense-list-${newTrip.id}`);
        let expenseName = prompt("Please name your expense");
        let expensePrice = prompt("Please enter the expense amount");
        newTrip.addExpense(expenseName, expensePrice);
        const newExpenseItemElement = getExpenseListItemElement(newTrip);
        newTripExpenseList.appendChild(newExpenseItemElement);
    });
    counter++;
});

// Fix trips array

// Fix list item generation 
function getExpenseListItemElement(trip) {
    let li = document.createElement("li");
    li.className = "expense flex";
    li.id = `expense-item-${trip.id}`;
    li.innerHTML = `                
        <p>${trip.expenses[0].name}</p> 
        <p>$${trip.expenses[0].price}</p>
    `;
    return li;
}
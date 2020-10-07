const trips = [
    {
        location: "Denver, CO",
        expenses:
        [
           {
                expenseName: "Airfare",
                expensePrice: 125
           },
           {
                expenseName: "Rental Car",
                expensePrice: 275
            }
        ],
        total: 400
    },
    {
        location: "Seattle, WA",
        expenses:
        [
           {
                expenseName: "Airfare",
                expensePrice: 350
           },
           {
                expenseName: "Airbnb",
                expensePrice: 500
            }
        ],
        total: 850
    }
];

for ( let i = 0; i < trips.length; i++ ) {
    console.log(`${trips[i].location}`);
    let expenseName = '';
    let expensePrice = 0;
    for ( let j = 0; j < trips[i].expenses[j].length; j++ )
    {
        expenseName = trips[i].expenses[j].expenseName;
        expensePrice = trips[i].expenses[j].expensePrice;
    } 
    console.log(`${expenseName}`);
    console.log(`${expensePrice}`);
    console.log(`${trips[i].total}`);
}

// Add class for creating trips
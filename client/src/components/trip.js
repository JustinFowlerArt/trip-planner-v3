import React from 'react';
import Expense from './expense';

export default function Trip({ trip }) {
  return (
    <section className='relative flex flex-col h-full flex-none justify-start w-[272px] items-center secondary-bg-color rounded-xl m-2 p-2'>
      <h2 className='m-2' id='trip-name{trip.id}'>
        {trip.name}
      </h2>
      <ul
        className='flex flex-col expense-list overflow-y-auto overflow-x-hidden overscroll-contain mb-3'
        id='${trip.expenseListId}'
      >
        {trip.expenses?.map(expense => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </ul>
      <button
        className='primary-bg-color rounded-2xl p-3 m-3 border border-white'
        id='${trip.addExpenseButtonId}'
      >
        Add Expense
      </button>
      <button
        className='primary-bg-color absolute top-4 right-4 px-1 border border-white'
        id='${trip.deleteTripButtonId}'
      >
        x
      </button>
      <div className='flex justify-between items-center w-full px-6 my-3'>
        <p>Trip Total</p>
        <p
          className='primary-bg-color rounded-2xl p-3'
          id='${trip.tripTotalId}'
        >
          $${trip.total}
        </p>
      </div>
    </section>
  );
}

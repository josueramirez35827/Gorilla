import { useState } from 'react';

function Receipts({person, order, paid}) {

  const [satisfied, setSatisfied] = useState(paid);

  function checkPayment() {
    setSatisfied((bill) => (bill ? "satisfied" : "notSatisfied"))
  }

  const {main, protein, rice, sauce, toppings, cost, drink} = order;

  return (
    <div>
      <div>
        <h1>My Receipts!</h1>
      </div>
      <h1>
        {person}
      </h1>
      <h2>
        Order: {order}
      </h2>
      <h3>
        Main: {main}
      </h3>
      <h3>
        Protein: {protein}
      </h3>
      <h3>
        Rice: {rice}
      </h3>
      <h3>
        Sauce: {sauce}
      </h3>
      <h3>
        Toppings: {toppings}
      </h3>
      <h3>
        Drink: {drink}
      </h3>
      <h3>
        Cost: {cost}
      </h3>
      <button className='Payment Button' onClick={checkPayment}></button>
      <h3>{satisfied}</h3>
    </div>
  );
};



export default Receipts;
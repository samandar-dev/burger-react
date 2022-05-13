import React from 'react';
import './BurgerIngredient.css'
export default function Burgerlngredient(props) {

  let ingrediet = null;

  switch (props.type) {
    case ('bread-bottom'):
      ingrediet = <div className='BreadBottom'></div>
      break;
    case ('bread-top'):
      ingrediet = <div className='BreadTop'>
        <div className='Seeds1'></div>
        <div className='Seeds2'></div>
      </div>
      break;
    case ('Cheese'):
      ingrediet = <div className='Cheese'></div>
      break;
    case ('Meat'):
      ingrediet = <div className='Meat'></div>
      break;
    case ('Salad'):
      ingrediet = <div className='Salad'></div>
      break;
    case ('Bacon'):
      ingrediet = <div className='Bacon'></div>
      break;

    default: ingrediet = null;
  }

  return ingrediet;
}

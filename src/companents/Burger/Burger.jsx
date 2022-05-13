import React from 'react';
import './Burger.css';
import Burgerlngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
  return (
    <div className='Burger'>
      <Burgerlngredient type="bread-top" />
      <Burgerlngredient type="Salad" />
      <Burgerlngredient type="Bacon" />
      <Burgerlngredient type="Cheese" />
      <Burgerlngredient type="Meat" />
      <Burgerlngredient type="Seeds1" />
      <Burgerlngredient type="bread-bottom" />
    </div>
  );
}

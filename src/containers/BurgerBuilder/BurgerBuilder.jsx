import React, { Component } from 'react'
import Burger from '../../companents/Burger/Burger';
import Aux from '../../hoc/Auux'

class BurgerBuild extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuild;
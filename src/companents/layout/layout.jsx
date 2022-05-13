import React from 'react';
import Aux from '../../hoc/Auux'

function Layout(props) {
  return (
    <Aux>
      {/* <div>Toolbar, SideDrawer, Beckdrop</div> */}
      <main>
        {props.children}
      </main>
    </Aux>
  );
}

export default Layout;

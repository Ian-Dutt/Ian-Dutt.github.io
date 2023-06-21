import React from 'react'

function Column(props){
    const childrenWithProps = React.Children.map(props.children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.

        if (React.isValidElement(child) && child.type === 'div') {
          return React.cloneElement(child, { 'className':'column' });
        }
        return child;
      });
    return (
        <div style={props.style} className='column'>
            {childrenWithProps}
        </div>
    )
}

export default Column
import React from "react";

function Row(props) {
    const width = Math.floor(100/props.numColumns)
    const style = {
            flex: width+'%',
            'border': '3px',
            'borderColor': 'blueviolet',
            'borderRadius': '50px',
          }

    const childrenWithProps = React.Children.map(props.children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { style:style });
        }
        return child;
      });
    
    return (
        <div style={{display:'flex'}}>
            {childrenWithProps}
        </div>
    )
}

export default Row

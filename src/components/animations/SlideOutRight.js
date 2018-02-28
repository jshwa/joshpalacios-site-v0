import React from "react";
import Transition from "react-transition-group/Transition";

const duration = 2000;

const defaultStyle = {
   transition: `transform ${duration}ms ease-in-out`,
   transform: 'translateX(0px)'
};

const transitionStyles = {
   entering: { transform: 'translateX(0px)'},
   entered: { transform: 'translateX(0px)'},
   exiting: { transform: 'translateX(0px)' },
   exited: { transform: 'translateX(0px)' },
}

const SlideOutRight = (props) => (
   <Transition
      in={props.in}
      timeout={0}
   >
      {state =>
         <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
         }}>
         {props.children}
         </div>}
   </Transition>
);

export default SlideOutRight
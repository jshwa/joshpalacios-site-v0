import React from "react";
import Transition from "react-transition-group/Transition";

const duration = 800;

const defaultStyle = {
   transition: `transform ${duration}ms ease-in-out`,
   transform: 'translateX(-400px)'
};

const transitionStyles = {
   entering: { transform: 'translateX(-1000px)' },
   entered: { transform: 'translateX(0px)' },
}

const SlideInFromLeft = (props) => (
   <Transition
      in={true}
      timeout={0}
      appear={true}
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

export default SlideInFromLeft
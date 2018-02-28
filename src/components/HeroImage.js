import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import Img from 'gatsby-image';

const duration = 2000;

const defaultStyle = {
   transition: `opacity ${duration}ms ease-in-out`,
   opacity: 0,
};

const transitionStyles = {
   entering: { opacity: 0},
   entered: { opacity: 1 },
   exiting: { opacity: 0 },
   exited: { opacity: 0 }
}

class HeroImg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   let tl = new TimelineLite();
    return (
      <Transition
        in={this.props.in}
        timeout={0}
        appear={true}
      >
        {state =>
          <div style={{
             ...defaultStyle,
             ...transitionStyles[state]
          }}>
            <Img sizes={this.props.image} />
          </div>}
      </Transition>
    );
  }
}

export default HeroImg

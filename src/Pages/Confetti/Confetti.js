import React from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}
function Confetti({start}) {
    var isAnimationEnabled = false;
    var animationInstance = null;
    
    const makeShot = (angle, originX) => {
        animationInstance && animationInstance({
          particleCount: 5,
          angle,
          spread: 55,
          origin: { x: originX },
          colors: ['#bb0000', '#ffffff'],
        });
      }
    
      const nextTickAnimation = () => {
        makeShot(60, 0);
        makeShot(120, 1);
        if (isAnimationEnabled) requestAnimationFrame(nextTickAnimation);
      }
    
      const startAnimation = () => {
        if (!isAnimationEnabled) {
          isAnimationEnabled = true;
          nextTickAnimation();
        }
      }
    
      const pauseAnimation = () => {
        isAnimationEnabled = false;
      }
    
      const stopAnimation = () => {
        isAnimationEnabled = false;
        animationInstance && animationInstance.reset();
      }
    
      const handlerClickStart = () => {
        startAnimation();
      };
    
      const handlerClickPause = () => {
        pauseAnimation();
      };
    
      const handlerClickStop = () => {
        stopAnimation();
      };
    
      const getInstance = (instance) => {
        animationInstance = instance;
      };
    
      function componentWillUnmount() {
        isAnimationEnabled = false;
      }
      if (start===true){
        startAnimation();
        setTimeout(() => {
          pauseAnimation();
          start=false
        }, 1500);
      }
    return (
        <div>
            <>
         
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
      </>
        </div>
    )
}

export default Confetti

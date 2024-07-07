import { motion, useAnimationControls } from 'framer-motion'
import React from 'react'


const AnimationControl = () => {
const flipControl = useAnimationControls()
    function flipBox(){
        flipControl.start("flip")
    }
  return (
    <div
    style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
    }}
    >
<button onClick={flipBox} className='example-button'>Flip It!</button>
        <motion.div
        style={{ width : 150, height : 150, backgroundColor : "black" }}
      variants={{
        initial : {
            rotate : "0deg"
        },
        flip : {
            rotate : "360deg"
        }
      }}
      initial = "initial"
      animate = {flipControl}
        
        >

        </motion.div>
      
    </div>
  )
}

export default AnimationControl

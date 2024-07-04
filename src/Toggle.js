import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <motion.div
        style={{
          width: 120, // Adjusted width to accommodate text
          height: 50,
          backgroundColor: isOn ? '#4caf50' : 'red',
          borderRadius: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isOn ? 'flex-end' : 'flex-start',
          padding: 5,
          cursor: 'pointer',
          position: 'relative',
        }}
        
        onClick={handleToggle}
      >
        <motion.div
          layout
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
          transition={{ type: 'spring', duration : 1, }}
        />
        <motion.span
          style={{
            position: 'absolute',
            left: isOn ? 10 : 50,
            color: 'white',
            fontWeight: 'bold',
          }}
          animate={{ opacity: isOn ? 0 : 1 }}
         
        >
       <h1>   Off</h1>
        </motion.span>
        <motion.span
          style={{
            position: 'absolute',
            right: isOn ? 50 : 10,
            color: 'white',
            fontWeight: 'bold',
          }}
          animate={{ opacity: isOn ? 1 : 0 }}
        >
          <h1>On</h1>
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Toggle;

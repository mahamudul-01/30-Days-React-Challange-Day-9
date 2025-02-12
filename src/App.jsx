import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '20px' }}>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: '#2563EB', padding: '20px', color: '#FFFFFF', textAlign: 'center' }}
      >
        <h1>CareerHub</h1>
        <p>One Step Closer To Your Dream Job</p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ marginTop: '20px' }}
      >
        <button
          style={{
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Explore Jobs
        </button>
      </motion.section>
    </div>
  );
};

export default App;
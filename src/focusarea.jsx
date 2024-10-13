import React from 'react';
import { motion } from 'framer-motion';

const FocusArea = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const lineAnimation = {
        hidden: { width: 0 },
        visible: { width: '100%' },
    };

    return (
        <div className="focus-area-container" style={{ textAlign: 'center', color: '#fff' }}>
            <h2>Our Focus Areas</h2>
            <motion.div
                className="focus-area-line"
                initial="hidden"
                animate="visible"
                variants={lineAnimation}
                transition={{ duration: 1, ease: 'easeInOut' }}
                style={{
                    height: '2px',
                    background: 'green',
                    margin: '0 auto 20px auto',
                    width: '50%',
                }}
            />
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 },
                    },
                }}
                className="focus-list"
                style={{ listStyle: 'none', padding: 0 }}
            >
                {['Penetration Testing', 'SQL Injection', 'Vulnerability Assessment', 'Cloud Security', 'Application Security'].map((item, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{
                            marginBottom: '20px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'limegreen',
                        }}
                    >
                        <span style={{ marginRight: '10px', display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'green', borderRadius: '50%' }}></span>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default FocusArea;

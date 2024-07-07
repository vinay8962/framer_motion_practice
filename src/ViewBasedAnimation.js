import { motion, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
const ViewBasedAnimation = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        console.log(isInView)
    }, [isInView])
    return (
        <>
            <div style={{ height: '150vh' }}>

            </div>

            <motion.div
                style={{ height: '100vh', background: 'green' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
            ></motion.div>
            <div
                ref={ref}
                style={{
                    height: '100vh',
                    background: isInView ? 'blue' : 'red',
                    transition: "1s background",
                }}
            ></div>

        </>
    )
}

export default ViewBasedAnimation

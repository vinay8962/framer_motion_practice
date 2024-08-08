import * as React from "react";
import { motion } from "framer-motion";

const iconVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)",
    },
};


const IconVariants = {
    Hidden: { opacity: 0, y: -300 }, // Start below and hidden
    Visible: { opacity: 1, y: 0 }, // Move to the center position
};

const Transition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
    duration: 0.5,
};

const transition = {
    default: { duration: 5, ease: "easeInOut" },
    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
};

export const SVGIcon = () => (
    <div className="container">

        {/** First Icon */}
        <motion.div className="first-letter"
            initial="Hidden"
            animate="Visible"
            variants={IconVariants}
            transition={{ ...Transition, delay: 1 }}
        >

            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                className="item blue"
            >
                <motion.path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                />
            </motion.svg>
        </motion.div>

        {/** Second Icon */}
        <motion.div className="first-letter"
            initial="Hidden"
            animate="Visible"
            variants={IconVariants}
            transition={{ ...Transition, delay: 1.2 }}
        >
            <motion.svg
                viewBox="0 0 488 512"
                className="item red"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="shadow" x="0" y="0" width="150%" height="150%">
                        <feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="rgba(0, 0, 0, 0.5)" />
                    </filter>
                </defs>
                <motion.path
                    d="M224 32.01c-123.5 0-224 100.5-224 224s100.5 224 224 224 224-100.5 224-224-100.5-224-224-224zm0 384c-88.22 0-160-71.78-160-160s71.78-159.1 160-159.1 160 71.78 160 159.1-71.78 160-160 160z"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                />
            </motion.svg>
        </motion.div>


        {/** Third Icon (Duplicate, so can be removed or replaced if needed) */}
        <motion.div
            initial="Hidden"
            animate="Visible"
            variants={IconVariants}
            transition={{ ...Transition, delay: 1.4 }}
            className="first-letter">
            <motion.svg
                viewBox="0 0 488 512"
                className="item yellow"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M224 32.01c-123.5 0-224 100.5-224 224s100.5 224 224 224 224-100.5 224-224-100.5-224-224-224zm0 384c-88.22 0-160-71.78-160-160s71.78-159.1 160-159.1 160 71.78 160 159.1-71.78 160-160 160z"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                />
            </motion.svg>
        </motion.div>

        {/** Fourth Icon */}
        <motion.div className="first-letter"
            initial="Hidden"
            animate="Visible"
            variants={IconVariants}
            transition={{ ...Transition, delay: 1.6 }}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                className="item blue"
            >
                <motion.path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                />
            </motion.svg>
        </motion.div>

        {/** Fifth Icon */}
        <motion.div className="first-letter"
            initial="Hidden"
            animate="Visible"
            variants={IconVariants}
            transition={{ ...Transition, delay: 1.8 }}
        >
            <motion.svg
                className="item green"
                viewBox="0 0 488 512"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                    d="M320 448c0 17.67-14.31 32-32 32H64c-17.69 0-32-14.33-32-32v-384C32 46.34 46.31 32.01 64 32.01S96 46.34 96 64.01v352h192C305.7 416 320 430.3 320 448z"
                />
            </motion.svg>
        </motion.div>

        {/** Sixth Icon */}
        <motion.div className="first-letter"
            initial="Hidden"
            animate="Visible"
            variants={IconVariants}
            transition={{ ...Transition, delay: 2 }}
        >
            <motion.svg
                className="item red"
                viewBox="0 0 488 512"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M320 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32v-384C0 46.34 14.33 32.01 32 32.01h256c17.67 0 32 14.33 32 32s-14.33 32-32 32H64v128h160c17.67 0 32 14.32 32 31.99s-14.33 32.01-32 32.01H64v128h224C305.7 416 320 430.3 320 448z"
                    fill="black"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                />
            </motion.svg>
        </motion.div>

    </div>
);

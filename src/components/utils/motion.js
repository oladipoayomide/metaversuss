export const navVariants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            stiffness: 20
        }
    }
}
export const footerVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            stiffness: 100,
            delay: 1,
            duration: 0.5
        }
    }
}


export const slideIn = (direction, type, duration, delay) => ({
    hidden: {
        x: `${direction === 'left' ? '-100%' : direction === 'right' ? '100%' : ''}`,
        y: `${direction === 'top' ? '-100%' : direction === 'down' ? '100%' : ''}`,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            duration,
            delay,
            stiffness: type === "spring" ? 100 : ''
        }

    }
});

export const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
            delay: 0.5,
            duration: 0.2,


        }
    },
    children: {

        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,


        },
    }
}

export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? -80 : direction === 'right' ? 100 : 0,
        y: direction === 'top' ? -100 : direction === 'down' ? 100 : 0,
        opacity: 0,
        transition: {
            duration: 0.1
        }
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut'
        }
    }
})

export const typingVariants = (delay) => ({
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            staggerChildren: 0.07,
            delay,


        }
    }

})

export const textVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: "easeIn",
        }
    }

}

export const staggerChildren = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren

            }
        }
    }
}

export const planetsVariants = (direction, delay) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : '',
        rotate: 120,
        opacity: 0,

    },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 1.3,
            delay

        }
    }

})

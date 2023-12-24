const transition = {duration: 0.8, type: 'spring',};
function slideAnimation(direction, delay = 0.3) {
    return {
        initial : {
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'down' ? -100 : direction === 'up' ? 100 : 0,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {...transition, delay}
        },
        exit: {
            x: direction === 'left'? -100 : direction === 'right'? 100 : 0,
            y: direction === 'down'? -100 : direction === 'up'? 100 : 0,
            opacity: 0,
        }
    }
}

export { slideAnimation, transition }
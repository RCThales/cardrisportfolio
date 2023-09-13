  export const fadeInAndSlideDownVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Initial position above the element
    },
    visible: {
      opacity: 1,
      y: 0, // Final position at the element's natural position
      transition: {
        type: "spring", // You can choose a different transition type
        duration: 1, // Animation duration in seconds
        delay: 0.1,
      },
    },
  };
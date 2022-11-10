// This animation fades content in & out as it enters/exits the viewport +/- 20px
const scrollFadeVariants = {
    fadeOut: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
    fadeIn: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
}

export const scrollFade = {
    variants: scrollFadeVariants,
    initial: 'fadeOut',
    whileInView: 'fadeIn',
    viewport: {
        margin: '-20px 0px -20px 0px',
        amount: 0.8,
    },
}

export const scrollFade20 = {
    variants: scrollFadeVariants,
    initial: 'fadeOut',
    whileInView: 'fadeIn',
    viewport: {
        margin: '-20px 0px -20px 0px',
        amount: 0.5,
    },
}

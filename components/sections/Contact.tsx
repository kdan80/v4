import React from 'react'
import Section from './Section'
import config from 'config/config'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'
import NumberedHeading from 'components/NumberedHeading'
import BigButton from 'components/BigButton'
import Paragraph from 'components/Paragraph'

type SectionProps = {
    id: string
}

// const StyledSection = styled(Section)<SectionProps>`

//     .container {
//         ${mixins.sectionContentContainer};
//         ${mixins.flexCol};
//         align-items: center;
//         gap: 1rem;
//     }

//     .title {
//         color: var(--fg-main);
//         font-weight: 600;
//         font-size: clamp(1.5rem, 5vw, 2.5rem);
//     }

//     p {
//         text-align: center;

//         @media screen and (min-width: 768px){
//             max-width: 60%;
//         }
//     }

//     a {
//         ${mixins.bigButton};
//         font-size: var(ft-md);
//         margin-top: 2.5rem;
//     }
// `;

const Contact = () => {
    const { email } = config

    return (
        <Section id='contact'>
            <motion.div className='container'>
                <NumberedHeading
                    index={3}
                    overline>
                    What&apos;s Next?
                </NumberedHeading>

                <motion.h2
                    className='title'
                    {...scrollFade}>
                    Get In Touch
                </motion.h2>

                <Paragraph>
                    Thank you for taking the time to visit my site. If you have a project you wish
                    to discuss, an opportunity for me, or would just like some more information,
                    please do not hesitate to contact me.
                </Paragraph>

                <BigButton
                    styles='mt-10'
                    url={`mailto:${email}`}>
                    Contact Me
                </BigButton>
            </motion.div>
        </Section>
    )
}

export default Contact

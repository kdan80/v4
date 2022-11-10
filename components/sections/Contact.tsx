import React from 'react'
import Section from './Section'
import config from 'config/config'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'
import NumberedHeading from 'components/NumberedHeading'
import BigButton from 'components/BigButton'
import Paragraph from 'components/Paragraph'

const Contact = () => {
    const { email } = config

    return (
        <Section id='contact'>
            <motion.div className='section-container flex flex-col items-center gap-4'>
                <NumberedHeading
                    index={3}
                    overline={true}
                >
                    What&apos;s Next?
                </NumberedHeading>

                <motion.h2
                    className='font-semibold text-contactH2'
                    {...scrollFade}
                >
                    Get In Touch
                </motion.h2>

                <Paragraph styles={'text-center md:max-w-[60%]'}>
                    Thank you for taking the time to visit my site. If you have a project you wish
                    to discuss, an opportunity for me, or would just like some more information,
                    please do not hesitate to contact me.
                </Paragraph>

                <BigButton
                    styles='mt-10'
                    url={`mailto:${email}`}
                >
                    Contact Me
                </BigButton>
            </motion.div>
        </Section>
    )
}

export default Contact

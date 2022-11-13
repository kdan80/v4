import React from 'react'
import { motion } from 'framer-motion'
import Logo from 'components/icons/Logo'

interface Props {
    finishLoading: () => void
}

const Loader = ({ finishLoading }: Props) => {
    React.useEffect(() => {
        window.addEventListener('keydown', finishLoading)
        window.addEventListener('touchend', finishLoading)
        return () => {
            window.removeEventListener('keydown', finishLoading)
            window.removeEventListener('touchend', finishLoading)
        }
    }, [finishLoading])

    return (
        <div className='w-screen flex justify-center items-center'>
            <motion.span
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6, duration: 0.4 }}
                // prettier-ignore
                className='opacity-0 text-[#77787a] absolute bottom-[3rem] text-sm md:text-base md:right-[3rem] 
                after:content-["Tap_screen_to_skip_intro"]
                sm:after:content-["Press_escape_key_to_skip_intro"]
                '
            />
            <Logo finishLoading={finishLoading} />
        </div>
    )
}

export default Loader

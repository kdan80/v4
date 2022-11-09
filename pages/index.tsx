import Layout from 'components/Layout'
import Section from 'components/sections/Section'
import Landing from 'components/sections/Landing'
import About from 'components/sections/About'

export default function Home() {
    return (
        <Layout>
            <Landing />
            <About />
            <Section>Page 3</Section>
            <Section>Page 4</Section>
        </Layout>
    )
}

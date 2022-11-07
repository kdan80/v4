import Layout from 'components/Layout'
import Section from 'components/sections/Section'
import Landing from 'components/sections/Landing'

export default function Home() {
    return (
        <Layout>
            <Landing />
            <Section>Page 2</Section>
            <Section>Page 3</Section>
            <Section>Page 4</Section>
        </Layout>
    )
}

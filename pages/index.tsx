import Layout from 'components/Layout'
import Landing from 'components/sections/Landing'
import About from 'components/sections/About'
import Contact from 'components/sections/Contact'
import Featured from 'components/sections/Featured'
import fs from 'fs'
import matter from 'gray-matter'

interface Props {
    projects: Project[]
}

const Home = ({ projects }: Props) => {
    return (
        <Layout>
            <Landing />
            <About />
            <Featured projects={projects} />
            <Contact />
        </Layout>
    )
}

export default Home

export async function getStaticProps() {
    const files = fs.readdirSync('content/featured')

    const projects = files.map(file => {
        const readFile = fs.readFileSync(`content/featured/${file}/index.md`, 'utf-8')
        const { data: frontmatter, content } = matter(readFile)
        const { date } = frontmatter
        return {
            frontmatter,
            content,
            date: parseInt(date),
        }
    })

    projects.sort((a: any, b: any) => a.date - b.date)

    return {
        props: {
            projects,
        },
    }
}

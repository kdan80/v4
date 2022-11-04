/* eslint-disable camelcase */
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import config from 'config/config'

interface Props {
    title?: string
    description?: string
    image?: string
}

const DocumentHeader: React.FC<Props> = ({ title, description, image }) => {
    const { pathname } = useRouter()
    const { siteData } = config

    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
        image: defaultImage,
    } = siteData

    const siteMetadata = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }

    return (
        <Head>
            <meta charSet='utf-8' />
            <title>{siteMetadata.title}</title>

            <meta name='description' content={siteMetadata.description} />
            <meta name='image' content={siteMetadata.image} />
            <meta name='theme-color' content='#151618' />

            <link rel='icon' href='/images/favicons/favicon.ico?v=1.0' />
            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/images/favicons/apple-touch-icon.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/images/favicons/favicon-16x16.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/images/favicons/favicon-32x32.png'
            />

            <meta property='og:title' content={siteMetadata.title} />
            <meta
                property='og:description'
                content={siteMetadata.description}
            />
            <meta property='og:image' content={siteMetadata.image} />
            <meta property='og:url' content={siteMetadata.url} />
            <meta property='og:type' content='website' />

            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={siteMetadata.title} />
            <meta
                name='twitter:description'
                content={siteMetadata.description}
            />
            <meta name='twitter:image' content={siteMetadata.image} />
            <meta
                name='google-site-verification'
                content='Imm8ge6Cd1Bc7A8yFSlcqy4yM-GTRj15qdkC01OMfaE'
            />
        </Head>
    )
}

export default DocumentHeader

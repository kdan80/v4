import * as React from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import Layout from 'components/Layout'
import DocumentHeader from 'components/DocumentHeader'

const NotFoundPage: NextPage = () => {
    return (
        <Layout location='404'>
            <DocumentHeader title='Page Not Found' />
            404 Not Found
        </Layout>
    )
}

export default NotFoundPage

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                    <link href="/static/styles/index.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }

}


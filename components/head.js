import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "CS630 Textbook";
    const description = "A data structures and algorithms textbook.";
    const keywords = "computer science, education, algorithms, textbook";
    const author = "CS630";
    const twitter = "@andovercs630";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Phillips Academy" />
            <meta property="og:url" content="" /> 
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Data Structures and Algorithms"/>
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {children}
        </Head>
    )
}
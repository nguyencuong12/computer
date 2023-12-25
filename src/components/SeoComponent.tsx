import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  image: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, author, image, url }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />

    {/* Open Graph meta tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={title} />

    {/* Twitter Card meta tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:site" content="@yourtwitterhandle" />
  </Head>
);

export default SEO;

import { Helmet } from 'react-helmet-async';

const Seo = ({
  title,
  description,
  ogUrl,
  ogArticle,
  ogImage,
  ogTitle,
  ogDescription,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      {/* <meta property="og:type" content={type} /> */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:article" content={ogArticle} />
    </Helmet>
  );
};

export default Seo;

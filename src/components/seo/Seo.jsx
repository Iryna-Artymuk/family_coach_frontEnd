import { Helmet } from 'react-helmet';

const Seo = ({
  title,
  type,
  description,
  ogUrl,
  ogImage,
  ogTitle,
  ogDescription,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="title" content={title} />
     
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:description" content={ogDescription} />
    </Helmet>
  );
};

export default Seo;

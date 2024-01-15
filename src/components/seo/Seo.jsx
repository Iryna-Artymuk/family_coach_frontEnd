import { Helmet } from 'react-helmet';

const Seo = ({
  title,
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

      <meta property="url" content={ogUrl} />
      <meta property="title" content={title} />
      <meta name="description" content={description} />
      <meta property="image" content={ogImage} />

      <meta property="og:locale" content="uk_UA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:description" content={ogDescription} />
    </Helmet>
  );
};

export default Seo;

import { Helmet } from 'react-helmet';

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
    <Helmet
      title={title}
      htmlAttributes={{ lang: 'uk' }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: 'og:url',
          content: ogUrl,
        },
        {
          property: 'og:type',
          content: ogArticle,
        },
        {
          property: 'og:title',
          content: ogTitle,
        },
        {
          property: 'og:description',
          content: ogDescription,
        },
        {
          property: 'og:image',
          content: ogImage,
        },
      ]}
    />
  );
};

export default Seo;

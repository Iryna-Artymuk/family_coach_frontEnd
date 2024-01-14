import { Helmet } from 'react-helmet';

export const SEO = ({ title, description, url, article, image, fbAppId }) => {
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
          content: url,
        },
        {
          property: 'og:type',
          content: article,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'fb:app_id',
          content: fbAppId,
        },
      ]}
    />
  );
};

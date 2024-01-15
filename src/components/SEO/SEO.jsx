import { Helmet } from 'react-helmet';

const Seo = ({
  title,
  description,
  og_url,
  og_article,
  og_image,
  og_title,
  og_description,
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
          content: og_url,
        },
        {
          property: 'og:type',
          content: og_article,
        },
        {
          property: 'og:title',
          content: og_title,
        },
        {
          property: 'og:description',
          content: og_description,
        },
        {
          property: 'og:image',
          content: og_image,
        },
      ]}
    />
  );
};

export default Seo;

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  description,
  image,
  article,
  noindex,
  canonical,
  lang,
  pagePath,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    facebookAppId,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={lang === "en" ? "en" : "uk"} />
      {canonical ? (
        <link rel="canonical" href={`${siteUrl}${canonical}`} />
      ) : (
        <link rel="canonical" href={seo.url} />
      )}

      {/* Lang */}
      {pagePath && (
        <link rel="alternate" href="https://koval.dev" hreflang="x-default" />
      )}
      {pagePath && (
        <link rel="alternate" href="https://koval.dev" hreflang="uk" />
      )}
      {pagePath && (
        <link rel="alternate" href="https://koval.dev/en/" hreflang="en" />
      )}

      {noindex && <meta name="robots" content="noindex" />}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  noindex: PropTypes.bool,
  canonical: PropTypes.string,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  noindex: false,
  canonical: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        facebookAppId
      }
    }
  }
`;

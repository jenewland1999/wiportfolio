import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import IonIcon from "@reacticons/ionicons";
import SkipToContent from "@components/SkipToContent";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = ({ pageTitle, children }) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en-GB",
        }}
      >
        <title>
          {pageTitle
            ? `${pageTitle} - ${site.siteMetadata.title}`
            : site.siteMetadata.title}
        </title>
        <meta name="author" content={site.siteMetadata.author} />
        <meta name="description" content={site.siteMetadata.description} />
        <link rel="canonical" href={site.siteMetadata.siteUrl} />
      </Helmet>

      <div className="min-h-screen flex flex-col text-gray-900 bg-hero-pattern">
        <SkipToContent
          contentId="#content"
          label="Skip to Content"
          icon={<IonIcon name="accessibility" />}
        />

        <Header />

        <main
          className="flex flex-col flex-grow max-w-screen-xl w-full  px-4 mx-auto my-20 md:my-28"
          id="content"
        >
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;

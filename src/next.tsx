import React from "react";
import Head from "next/head";

interface metaProps {
  url: string;
  pageTitle: string;
  description: string;
  previewImage: string;
  contentLanguage?: string;
  children?: React.ReactNode;
  contentType?: "website" | "article";
}

export const MetaData = ({
  url,
  children,
  pageTitle,
  description,
  contentType,
  previewImage,
  contentLanguage,
}: metaProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={pageTitle} />
        {previewImage ? <meta itemProp="image" content={previewImage} /> : null}

        <meta property="og:url" content={url} />
        <meta
          property="og:type"
          content={contentType ? contentType : "website"}
        />
        <meta property="og:locale" content={contentLanguage ?? "en_US"} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageTitle} />
        {previewImage ? (
          <meta property="og:image" content={previewImage} />
        ) : null}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={url} />
        {previewImage ? (
          <meta name="twitter:image" content={previewImage} />
        ) : null}

        {children}
      </Head>
    </>
  );
};

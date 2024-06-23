import React from "react";
interface metaProps {
    url: string;
    pageTitle: string;
    description: string;
    previewImage: string;
    contentLanguage?: string;
    children?: React.ReactNode;
    contentType?: "website" | "article";
}
export declare const MetaData: ({ url, children, pageTitle, description, contentType, previewImage, contentLanguage, }: metaProps) => React.JSX.Element;
export {};

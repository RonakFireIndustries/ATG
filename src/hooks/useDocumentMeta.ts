import { useEffect } from "react";

const DEFAULT_DESCRIPTION =
  "ATG – Ask To Get is an IT solutions company turning ideas, questions and challenges into scalable technology.";

export function useDocumentMeta(title: string, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;
  }, [title, description]);
}

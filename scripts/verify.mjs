import { createClient } from '@sanity/client';
const c = createClient({
  projectId: '92q6lqnu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
const r = await c.fetch(`{
  "categories": count(*[_type == "productCategory"]),
  "pages": count(*[_type == "categoryPage"]),
  "pdfs": count(*[_type == "pdfDocument"]),
  "sampleCategories": *[_type == "productCategory"] | order(routePath.current asc) [0..9] {
    title,
    "path": routePath.current,
    "parentTitle": parent->title
  },
  "samplePages": *[_type == "categoryPage"] | order(path asc) [0..9] {
    title,
    path,
    "hasSeo": defined(seoTitle),
    "hasIntro": defined(intro)
  }
}`);
console.log(JSON.stringify(r, null, 2));

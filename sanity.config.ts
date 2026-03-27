import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonIds: Record<string, string> = {
  siteSettings: 'siteSettings',
  homePage: 'homePage',
  mainNavigation: 'mainNavigation',
  cataloguePage: 'cataloguePage',
  resourcesPage: 'resourcesPage',
  contactPage: 'contactPage',
  footerContent: 'footerContent',
}

export default defineConfig({
  name: 'default',
  title: 'Lube Control Rebuild',

  projectId: '92q6lqnu',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site')
              .child(
                S.list()
                  .title('Site')
                  .items([
                    S.listItem()
                      .title('Site settings')
                      .child(
                        S.document().schemaType('siteSettings').documentId(singletonIds.siteSettings),
                      ),
                    S.listItem()
                      .title('Home page')
                      .child(S.document().schemaType('homePage').documentId(singletonIds.homePage)),
                    S.listItem()
                      .title('Main navigation')
                      .child(
                        S.document().schemaType('mainNavigation').documentId(singletonIds.mainNavigation),
                      ),
                    S.listItem()
                      .title('Footer')
                      .child(
                        S.document().schemaType('footerContent').documentId(singletonIds.footerContent),
                      ),
                    S.listItem()
                      .title('Catalogue page')
                      .child(
                        S.document().schemaType('cataloguePage').documentId(singletonIds.cataloguePage),
                      ),
                    S.listItem()
                      .title('Resources page')
                      .child(
                        S.document().schemaType('resourcesPage').documentId(singletonIds.resourcesPage),
                      ),
                    S.listItem()
                      .title('Contact page')
                      .child(
                        S.document().schemaType('contactPage').documentId(singletonIds.contactPage),
                      ),
                  ]),
              ),
            S.divider(),
            S.listItem()
              .title('Category pages')
              .child(S.documentTypeList('categoryPage').title('Category / route pages')),
            S.divider(),
            S.listItem()
              .title('Catalog & products')
              .child(
                S.list()
                  .title('Catalog & products')
                  .items([
                    S.listItem()
                      .title('Product categories')
                      .child(S.documentTypeList('productCategory').title('Product categories')),
                    S.listItem()
                      .title('Products')
                      .child(S.documentTypeList('product').title('Products')),
                  ]),
              ),
            S.listItem()
              .title('Pages')
              .child(S.documentTypeList('page').title('Pages')),
            S.divider(),
            S.listItem()
              .title('PDF Documents')
              .child(S.documentTypeList('pdfDocument').title('PDF Documents')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

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
          .title('Content Management')
          .items([
            // ─── General Settings ───
            S.listItem()
              .title('⚙️ General Settings')
              .child(
                S.list()
                  .title('General Settings')
                  .items([
                    S.listItem()
                      .title('Site Settings')
                      .id('siteSettings')
                      .child(
                        S.document().schemaType('siteSettings').documentId(singletonIds.siteSettings),
                      ),
                    S.listItem()
                      .title('Main Navigation')
                      .id('mainNavigation')
                      .child(
                        S.document().schemaType('mainNavigation').documentId(singletonIds.mainNavigation),
                      ),
                    S.listItem()
                      .title('Footer')
                      .id('footerContent')
                      .child(
                        S.document().schemaType('footerContent').documentId(singletonIds.footerContent),
                      ),
                  ]),
              ),

            // ─── Home Page ───
            S.listItem()
              .title('🏠 Home Page')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId(singletonIds.homePage)),

            S.divider(),

            // ─── Pages & Routes ───
            S.listItem()
              .title('📂 Pages & Routes')
              .child(
                S.list()
                  .title('Pages & Routes')
                  .items([
                    S.listItem()
                      .title('Category Pages (URL routes)')
                      .id('categoryPages')
                      .child(S.documentTypeList('categoryPage').title('Category Pages')),
                    S.listItem()
                      .title('General Pages')
                      .id('pages')
                      .child(S.documentTypeList('page').title('General Pages')),
                  ]),
              ),

            S.divider(),

            // ─── Product Catalogue ───
            S.listItem()
              .title('📦 Product Catalogue')
              .child(
                S.list()
                  .title('Product Catalogue')
                  .items([
                    S.listItem()
                      .title('Product Categories')
                      .id('productCategories')
                      .child(S.documentTypeList('productCategory').title('Product Categories')),
                    S.listItem()
                      .title('Products')
                      .id('products')
                      .child(S.documentTypeList('product').title('Products')),
                  ]),
              ),

            S.divider(),

            // ─── Static Pages ───
            S.listItem()
              .title('📄 Static Pages')
              .child(
                S.list()
                  .title('Static Pages')
                  .items([
                    S.listItem()
                      .title('Catalogue Library')
                      .id('cataloguePage')
                      .child(
                        S.document().schemaType('cataloguePage').documentId(singletonIds.cataloguePage),
                      ),
                    S.listItem()
                      .title('Resources & Downloads')
                      .id('resourcesPage')
                      .child(
                        S.document().schemaType('resourcesPage').documentId(singletonIds.resourcesPage),
                      ),
                    S.listItem()
                      .title('Contact')
                      .id('contactPage')
                      .child(
                        S.document().schemaType('contactPage').documentId(singletonIds.contactPage),
                      ),
                  ]),
              ),

            S.divider(),

            // ─── PDF Documents ───
            S.listItem()
              .title('📎 PDF Documents')
              .id('pdfDocuments')
              .child(S.documentTypeList('pdfDocument').title('PDF Documents')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

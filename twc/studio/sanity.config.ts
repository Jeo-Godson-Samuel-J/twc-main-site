import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Trinity Worship Center — Website Images',

  projectId: '8a77dieu',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Admin Panel')
          .items([
            S.listItem()
              .title('Website Images')
              .id('websiteImages')
              .child(
                S.document()
                  .schemaType('websiteImages')
                  .documentId('websiteImages')
                  .title('Website Images'),
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => listItem.getId() !== 'websiteImages',
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

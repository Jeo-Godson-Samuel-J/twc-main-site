import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Website Images — TWC Admin',

  projectId: '28l72ny4',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Admin')
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
              (listItem) => !['websiteImages'].includes(listItem.getId() ?? ''),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

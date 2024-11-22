export const pourquoiSection = {
  name: 'pourquoiSection',
  title: 'Pourquoi section',
  type: 'document',
  fields: [
    {
      name: 'bulletPoints',
      title: 'Liste à puces',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
}

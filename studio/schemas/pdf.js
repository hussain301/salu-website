export default {
  title: 'Manuscript',
  name: 'manuscript',
  accept: '.pdf',
  type: 'document',
  fields: [
    
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'uploadDocuments',
      type: 'file',
      title: 'upload pdf',
    },
  ],
}

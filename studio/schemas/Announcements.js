export default {
  name: 'announcements',
  type: 'document',
  title: 'All Announcements',
  fields: [
    {
      name: 'titleOfAnnouncement',
      type: 'string',
      title: 'Title of the Announcement',
    },
    {
      // how can i give it a default value of false

      name: 'isImage',
      type: 'boolean',
      title: 'if You are uploading image then check this box else leave it blank',
    },
    {
      name: 'image',
      type: 'image',
      title:
        'only upload Image if you have Image to upload else leave it blank and also check the box above',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isPdf',
      type: 'boolean',
      title: 'if You are uploading pdf then check this box else leave it blank',
    },
    {
      name: 'pdf',
      type: 'file',

      validation: (Rule) => {
        Rule.required().custom((file) => {
          if (!file || !file.asset || !file.asset._ref) {
            // No file has been uploaded
            return 'Please upload a file'
          }
          const {_type, _ref} = file.asset
          if (_type !== 'sanity.fileAsset') {
            // Uploaded file is not a file asset
            return 'Please upload a file'
          }
          const mimeType = file.asset.mimeType
          if (mimeType !== 'application/pdf') {
            // Uploaded file is not a PDF
            return 'Only PDF files are allowed'
          }
          return true
        })
      },

      title:
        'only upload pdf if you have pdf to upload else leave it blank and also check the box above',
    },
    {
      name: 'isLink',
      type: 'boolean',
      title: 'if You are uploading link then check this box else leave it blank',
    },
    {
      name: 'link',
      type: 'url',
      title:
        'only upload link if you have link to upload else leave it blank and also check the box above',
    },
    {
      name: 'button',
      type: 'string',
      title: 'Button Name',
    },
  ],

  initialValue: {
    isImage: false,
    isPdf: false,
    isLink: false,
  },
}

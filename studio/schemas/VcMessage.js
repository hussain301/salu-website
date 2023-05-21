export default {
  name: 'VcMessage',
  type: 'document',
  title: 'Vc Message',
  fields: [
    {
      name: 'profileImage',
      type: 'image',
      title: 'VC Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'vcmessage',
      type: 'string',
      title: 'Vc message',
    },
    {
      name: 'vcfullmessage',
      type: 'string',
      title: 'Full VC Message',
    },
    {
      name: 'vctitle',
      type: 'string',
      title: 'Vc Title',
    },
  ],
}

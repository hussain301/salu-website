export default {
    name: 'mediaTeam',
    type: 'document',
    title: 'Media Team',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of the Member',
        },
        {
            name: 'designation',
            type: 'string',
            title: 'Designation of the Member',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Member',
            options: {
                hotspot: true,
            },
        },
    ],
    
}
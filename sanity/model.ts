// sanity/pet.ts
export default {
    name: 'cars',
    type: 'document',
    title: 'Cars',
    fields: [
        {
            name: 'make',
            type: 'string',
            title: 'Make'
        },
        {
            name: 'model',
            type: 'number',
            title: 'Model'
        },
        {
            name: 'owner',
            type: 'string',
            title: 'Owner'
        }
        ,
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }


    ]
}
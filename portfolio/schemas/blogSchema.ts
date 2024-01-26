export interface Blog {
  title: string
  description: string
  creationDate: Date
  images: {
    asset: {
      _type: 'reference'
      _ref: string
    }
  }[]
}

const sanityBlogSchema = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'creationDate',
      title: 'Creation Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export {sanityBlogSchema}

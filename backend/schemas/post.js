import {
  DocumentIcon
} from '@sanity/icons'

export default {
  name: 'post',
  title: 'Post',
  icon: DocumentIcon,
  type: 'document',
  fields: [{
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'author'
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'category'
        }
      }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }, {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localeString'
    },
    {
      name: 'body',
      title: 'Body',
      // type: 'blockContent'
      type: 'localeMarkdown'
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {
        author
      } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
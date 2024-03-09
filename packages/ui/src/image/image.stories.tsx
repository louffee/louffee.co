import { Meta, StoryObj } from '@storybook/react'

import Image, { type ImageProps } from './image'

type Story = StoryObj<ImageProps>

export const Overview: Story = {}

export const UnsplashRandom: Story = {
  args: {
    src: 'https://source.unsplash.com/random?width=1280&height=720',
    alt: 'Random image from Unsplash',
    width: 1280,
    height: 720,
  },
}

export default {
  title: 'Playground/Image',
  component: Image,
  args: {
    priority: false,
    src: '/assets/logo.svg',
    alt: 'Louffee logo',
    height: 128,
    width: 128,
    loading: 'lazy',
    quality: 75,
  },
  argTypes: {
    alt: {
      name: 'Alternative text',
      description:
        'The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).\n\n**Prop name:** `alt`',
      control: 'text',
    },
    src: {
      name: 'Source URL/URI',
      description: 'The source of the image.\n\n**Prop name:** `src`',
      control: 'text',
    },
    fill: {
      table: {
        disable: true,
      },
    },
    loader: {
      table: {
        disable: true,
      },
    },
    priority: {
      name: 'Priority',
      description:
        'The boolean which indicates that the image is important and will be preloaded. See [Next.js official documentation](https://nextjs.org/docs/pages/api-reference/components/image#priority) for reference.\n\n**Prop name:** `priority`.\n\nIt is not possible to see the effect of this prop in the Storybook, but it is possible to see it in the application.',
      control: {
        type: null,
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    loading: {
      name: 'Loading strategy',
      description:
        'The loading strategy of the image. When lazy, defer loading the image until it reaches a calculated distance from the viewport. When eager, load the image immediately. See [Next.js official documentation](https://nextjs.org/docs/pages/api-reference/components/image#loading) for reference.\n\n**Prop name:** `loading`. It is not possible to see the effect of this prop in the Storybook, but it is possible to see it in the application.',
      table: {
        defaultValue: {
          summary: 'lazy',
        },
      },
    },
    width: {
      name: 'Width',
      description:
        'The width of the image in pixels. See [Next.js official documentation](https://nextjs.org/docs/pages/api-reference/components/image#width) for reference.\n\n**Prop name:** `width`\n\n**Note:** There is no limit of how many pixels should be used for the width passed to this component, the limit of 1280 is merely demonstrative.',
      type: 'number',
      control: {
        type: 'range',
        min: 0,
        max: 1280,
      },
    },
    height: {
      name: 'Height',
      description:
        'The height of the image in pixels. See [Next.js official documentation](https://nextjs.org/docs/pages/api-reference/components/image#height) for reference.\n\n**Prop name:** `height`\n\n**Note:** There is no limit of how many pixels should be used for the height passed to this component, the limit of 720 is merely demonstrative.',
      type: 'number',
      control: {
        type: 'range',
        min: 0,
        max: 720,
      },
    },
    quality: {
      name: 'Quality',
      description:
        'The quality of the optimized image, an integer between `1` and `100`, where `100` is the best quality and therefore largest file size. See [Next.js official documentation](https://nextjs.org/docs/api-reference/next/image#quality) for reference.\n\n**Prop name:** `quality`.\n\nIt is not possible to see the effect of this prop in the Storybook, but it is possible to see it in the application.',
      type: 'number',
      control: {
        type: 'range',
        min: 1,
        max: 100,
      },
      table: {
        defaultValue: {
          summary: 75,
        },
      },
    },
    unoptimized: {
      name: 'Un-optimized',
      description:
        'When true, the source image will be served as-is instead of changing quality, size, or format. Defaults to false. See [Next.js official documentation](https://nextjs.org/docs/pages/api-reference/components/image#unoptimized) for reference.\n\n**Prop name:** `unoptimized`.\n\nIt is not possible to see the effect of this prop in the Storybook, but it is possible to see it in the application.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    placeholder: {
      name: 'Placeholder',
      description:
        'A placeholder to use while the image is loading. Possible values are `blur`, `empty`, or `data:image/....` Defaults to `empty`.When blur, the [`blurDataURL`](https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl) property will be used as the placeholder. If src is an object from a static import and the imported image is `.jpg`, `.png`, `.webp`, or `.avif`, then [`blurDataURL`]((https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl)) will be automatically populated, except when the image is detected to be animated. For dynamic images, you must provide the `blurDataURL` property. Solutions such as Placeholder can help with base64 generation. When `data:image/...`, the Data URL will be used as the placeholder while the image is loading. When `empty`, there will be no placeholder while the image is loading, only empty space. See [Next.js official documentation](https://nextjs.org/docs/pages/api-reference/components/image#placeholder) for reference.\n\n**Prop name:** `placeholder`',
      control: {
        type: null,
      },
    },
    blurDataURL: {
      description:
        'A Data URL to be used as a placeholder image before the src image successfully loads. Only takes effect when combined with [`placeholder="blur"`](https://nextjs.org/docs/pages/api-reference/components/image#placeholder).\n\nMust be a base64-encoded image. It will be enlarged and blurred, so a very small image (10px or less) is recommended.\n\nIncluding larger images as placeholders may harm your application performance.\n\n**Prop name:** `blurDataURL`',
      control: {
        type: null,
      },
    },
    // NOTE: The following attributes are removed from the table because they
    //       are from the Next.js API and are either marked as deprecated or
    //       are not primarily used by the consumer of the component.
    layout: {
      table: {
        disable: true,
      },
    },
    lazyRoot: {
      table: {
        disable: true,
      },
    },
    lazyBoundary: {
      table: {
        disable: true,
      },
    },
    objectFit: {
      table: {
        disable: true,
      },
    },
    objectPosition: {
      table: {
        disable: true,
      },
    },
    onLoadingComplete: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ImageProps>

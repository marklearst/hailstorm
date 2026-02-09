import type { Meta, StoryObj } from '@storybook/react-vite'
import { Page } from './page'

type PageStoryArgs = {
  title: string
  description: string
}

const meta: Meta<PageStoryArgs> = {
  title: 'Page',
  args: {
    title: 'Page Title',
    description: 'Description',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ title, description }) => (
    <Page>
      <Page.Title>{title}</Page.Title>
      <Page.Description>{description}</Page.Description>
    </Page>
  ),
}

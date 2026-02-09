import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarContainer } from './sidebar-container'

type SidebarContainerStoryArgs = {
  sidebarLabel: string
  pageLabel: string
}

const meta: Meta<SidebarContainerStoryArgs> = {
  title: 'SidebarContainer',
  args: {
    sidebarLabel: 'Sidebar Content',
    pageLabel: 'Page Content',
  },
  argTypes: {
    sidebarLabel: { control: { type: 'text' } },
    pageLabel: { control: { type: 'text' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
  render: ({ sidebarLabel, pageLabel }) => (
    <SidebarContainer
      sidebarContent={<div>{sidebarLabel}</div>}
      pageContent={<div>{pageLabel}</div>}
    />
  ),
}

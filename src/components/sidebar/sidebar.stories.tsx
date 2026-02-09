import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar } from './sidebar'

type SidebarStoryArgs = {
  label: string
}

const meta: Meta<SidebarStoryArgs> = {
  title: 'Sidebar',
  args: {
    label: 'Example',
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
  render: ({ label }) => <Sidebar.Header> {label} </Sidebar.Header>,
}
export const Menu: Story = {
  render: ({ label }) => <Sidebar.Menu> {label} </Sidebar.Menu>,
}
export const MenuHeader: Story = {
  render: ({ label }) => <Sidebar.MenuHeader> {label} </Sidebar.MenuHeader>,
}

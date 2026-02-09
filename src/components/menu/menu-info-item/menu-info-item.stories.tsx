/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MenuInfoItem } from './menu-info-item'

type MenuInfoItemStoryArgs = {
  title: string
  subtitle: string
  containerWidth: number
}

const meta: Meta<MenuInfoItemStoryArgs> = {
  title: 'Menu/MenuInfoItem',
  component: MenuInfoItem,
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    containerWidth: 208,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    containerWidth: {
      control: { type: 'range', min: 120, max: 320, step: 8 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: MenuInfoItemStoryArgs) => (
    <div style={{ width: args.containerWidth }}>
      <MenuInfoItem title={args.title} subtitle={args.subtitle} />
    </div>
  ),
}

/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MenuSeparator } from './menu-separator'

type MenuSeparatorStoryArgs = {
  containerWidth: number
}

const meta: Meta<MenuSeparatorStoryArgs> = {
  title: 'Menu/MenuSeparator',
  component: MenuSeparator,
  args: {
    containerWidth: 208,
  },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 120, max: 320, step: 8 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: MenuSeparatorStoryArgs) => (
    <div style={{ width: args.containerWidth }}>
      <MenuSeparator />
    </div>
  ),
}

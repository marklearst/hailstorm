import type { Meta, StoryObj } from '@storybook/react-vite'

import { DividerLine } from './divider-line'

type DividerLineStoryArgs = {
  padding: number
  showIcons: boolean
}

const meta: Meta<DividerLineStoryArgs> = {
  title: 'DividerLine',
  component: DividerLine,
  args: {
    padding: 8,
    showIcons: true,
  },
  argTypes: {
    padding: { control: { type: 'range', min: 0, max: 32, step: 2 } },
    showIcons: { control: { type: 'boolean' } },
  },
  parameters: { layout: 'fullscreen' },
  render: (args: DividerLineStoryArgs) => (
    <div style={{ padding: args.padding }}>
      {args.showIcons ?
        <span>🌞</span>
      : null}
      <DividerLine />
      {args.showIcons ?
        <span>🌙</span>
      : null}
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

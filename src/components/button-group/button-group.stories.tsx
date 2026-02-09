import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup } from './button-group'

type ButtonGroupStoryArgs = {
  normalLabel: string
  disabledLabel: string
  activeLabel: string
  activeDisabledLabel: string
  extraLabel: string
}

const meta: Meta<ButtonGroupStoryArgs> = {
  title: 'ButtonGroup',
  args: {
    normalLabel: 'Normal',
    disabledLabel: 'Disabled',
    activeLabel: 'Active',
    activeDisabledLabel: 'Active & Disabled',
    extraLabel: 'Button 1',
  },
  argTypes: {
    normalLabel: { control: { type: 'text' } },
    disabledLabel: { control: { type: 'text' } },
    activeLabel: { control: { type: 'text' } },
    activeDisabledLabel: { control: { type: 'text' } },
    extraLabel: { control: { type: 'text' } },
  },
  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({
    normalLabel,
    disabledLabel,
    activeLabel,
    activeDisabledLabel,
    extraLabel,
  }) => (
    <ButtonGroup>
      <ButtonGroup.Button type='button'>{normalLabel}</ButtonGroup.Button>
      <ButtonGroup.Button type='button' disabled>
        {disabledLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button' isActive>
        {activeLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button' isActive disabled>
        {activeDisabledLabel}
      </ButtonGroup.Button>
      <ButtonGroup.Button type='button'>{extraLabel}</ButtonGroup.Button>
    </ButtonGroup>
  ),
}

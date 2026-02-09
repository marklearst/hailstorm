import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  MultiComboboxCustomValueStory,
  multiComboboxArgTypes,
  multiComboboxArgs,
  type MultiComboboxStoryArgs,
} from './multi-combobox.story-helpers'

const meta: Meta<MultiComboboxStoryArgs> = {
  title: 'Input/MultiCombobox/CustomValue',
  args: multiComboboxArgs,
  argTypes: {
    ...multiComboboxArgTypes,
  },
  parameters: {
    controls: {
      exclude: ['value', 'onChange', 'className'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const CustomValue: Story = {
  render: ({ label, description, placeholder, width }) => (
    <div style={{ width: width ?? 288 }}>
      <MultiComboboxCustomValueStory
        label={label}
        description={description}
        placeholder={placeholder}
      />
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  MultiComboboxTagStory,
  multiComboboxArgTypes,
  multiComboboxArgs,
  type MultiComboboxStoryArgs,
} from './multi-combobox.story-helpers'

const meta: Meta<MultiComboboxStoryArgs> = {
  title: 'Input/MultiCombobox/Tags',
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

export const Tags: Story = {
  render: ({ label, description, placeholder, width }) => (
    <div style={{ width: width ?? 288 }}>
      <MultiComboboxTagStory
        label={label}
        description={description}
        placeholder={placeholder}
      />
    </div>
  ),
}

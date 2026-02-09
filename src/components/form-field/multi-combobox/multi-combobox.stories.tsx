/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  MultiComboboxTextStory,
  multiComboboxArgTypes,
  multiComboboxArgs,
  type MultiComboboxStoryArgs,
} from './multi-combobox.story-helpers'

const meta: Meta<MultiComboboxStoryArgs> = {
  title: 'Input/MultiCombobox',
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

export const Default: Story = {
  render: ({ label, description, placeholder, width }) => (
    <div style={{ width: width ?? 288 }}>
      <MultiComboboxTextStory
        label={label}
        description={description}
        placeholder={placeholder}
      />
    </div>
  ),
}

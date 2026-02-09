/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { FormField } from '../form-field'
import { SearchIcon } from '../../../icons'

type TextInputStoryArgs = {
  error: boolean
  disabled: boolean
  hasLeftIcon: boolean
  readOnly: boolean
  value: string
  optional: boolean
}

const meta: Meta<TextInputStoryArgs> = {
  title: 'Input/TextInput',
  component: FormField.TextInput,
  args: {
    error: false,
    disabled: false,
    hasLeftIcon: false,
    readOnly: false,
    value: '',
    optional: false,
  },
  argTypes: {
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    hasLeftIcon: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
    optional: { control: { type: 'boolean' } },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const TextInputWithHooks = ({
  error = false,
  disabled = false,
  hasLeftIcon = false,
  readOnly = false,
  value,
  optional,
}: {
  error?: boolean
  disabled?: boolean
  hasLeftIcon?: boolean
  readOnly?: boolean
  value?: string
  optional?: boolean
}) => {
  const [inputValue, setInputValue] = useState(value)

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value' optional={optional}>
          Label
        </FormField.Label>

        <FormField.Description id='value-description'>
          Description
        </FormField.Description>
      </FormField.LabelGroup>

      <FormField.TextInput
        id='value'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ariaDescribedBy='value-description'
        error={error}
        disabled={disabled}
        LeftIcon={hasLeftIcon ? SearchIcon : undefined}
        readOnly={readOnly}
      />

      {error ?
        <FormField.ErrorMessage>Error message.</FormField.ErrorMessage>
      : null}
    </FormField>
  )
}

export const Default: Story = {
  render: (args: TextInputStoryArgs) => (
    <div className='w-72'>
      <TextInputWithHooks {...args} />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className='w-72'>
      <TextInputWithHooks error />
    </div>
  ),
}

export const WithLeftIcon: Story = {
  render: () => (
    <div className='w-72'>
      <TextInputWithHooks hasLeftIcon />
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className='w-72'>
      <TextInputWithHooks readOnly value='Readonly text' />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='w-72'>
      <TextInputWithHooks disabled />
    </div>
  ),
}

export const Optional: Story = {
  render: () => (
    <div className='w-72'>
      <TextInputWithHooks optional />
    </div>
  ),
}

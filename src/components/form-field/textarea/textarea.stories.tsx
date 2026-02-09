/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { FormField } from '../form-field'

type TextareaStoryArgs = {
  error: boolean
  disabled: boolean
  label: string
  description: string
  placeholder: string
  value: string
}

const meta: Meta<TextareaStoryArgs> = {
  title: 'Input/Textarea',
  args: {
    error: false,
    disabled: false,
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
    value: '',
  },
  argTypes: {
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const TextareaWithHooks = ({
  error = false,
  disabled = false,
  label = 'Label',
  description = 'Description',
  placeholder = 'Placeholder',
  value = '',
}: {
  error?: boolean
  disabled?: boolean
  label?: string
  description?: string
  placeholder?: string
  value?: string
}) => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <FormField>
      <FormField.LabelGroup>
        <FormField.Label htmlFor='value'>{label}</FormField.Label>
        <FormField.Description id='value-description'>
          {description}
        </FormField.Description>
      </FormField.LabelGroup>
      <FormField.Textarea
        id='value'
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        ariaDescribedBy='value-description'
        error={error}
        disabled={disabled}
      />
      {error ?
        <FormField.ErrorMessage>Error message.</FormField.ErrorMessage>
      : null}
    </FormField>
  )
}

export const Default: Story = {
  render: (args: TextareaStoryArgs) => (
    <div className='w-72'>
      <TextareaWithHooks {...args} />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className='w-72'>
      <TextareaWithHooks error />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='w-72'>
      <TextareaWithHooks disabled />
    </div>
  ),
}

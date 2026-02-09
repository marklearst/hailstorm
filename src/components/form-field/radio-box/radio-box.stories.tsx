import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { FormField } from '../form-field'
import { FeaturedTag } from '../../featured-tag/featured-tag'

type RadioBoxStoryArgs = {
  recommendedLabel: string
  optionOneTitle: string
  optionTwoTitle: string
  optionThreeTitle: string
  optionDescription: string
  defaultValue: string
  disableThirdOption: boolean
  width: number
}

const meta: Meta<RadioBoxStoryArgs> = {
  title: 'Input/RadioBox',
  args: {
    recommendedLabel: 'Recommended',
    optionOneTitle: 'Option 1',
    optionTwoTitle: 'Option 2',
    optionThreeTitle: 'Option 3',
    optionDescription:
      'To be, or not to be, that is the question: Whether ’tis nobler in the mind to suffer The slings and arrows of outrageous fortune, …',
    defaultValue: 'value_1',
    disableThirdOption: true,
    width: 384,
  },
  argTypes: {
    recommendedLabel: { control: { type: 'text' } },
    optionOneTitle: { control: { type: 'text' } },
    optionTwoTitle: { control: { type: 'text' } },
    optionThreeTitle: { control: { type: 'text' } },
    optionDescription: { control: { type: 'text' } },
    defaultValue: {
      control: { type: 'select', options: ['value_1', 'value_2', 'value_3'] },
    },
    disableThirdOption: { control: { type: 'boolean' } },
    width: { control: { type: 'range', min: 320, max: 520, step: 16 } },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const RadioBoxWithHooks = ({
  recommendedLabel,
  optionOneTitle,
  optionTwoTitle,
  optionThreeTitle,
  optionDescription,
  defaultValue,
  disableThirdOption,
}: {
  recommendedLabel: string
  optionOneTitle: string
  optionTwoTitle: string
  optionThreeTitle: string
  optionDescription: string
  defaultValue: string
  disableThirdOption: boolean
}) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  return (
    <FormField>
      <FormField.RadioBox
        id='value'
        value={value}
        onChange={setValue}
        className='flex flex-col gap-2'
      >
        <FormField.RadioBox.Option value='value_1'>
          <FeaturedTag>{recommendedLabel}</FeaturedTag>

          <FormField.RadioBox.Option.Title>
            {optionOneTitle}
          </FormField.RadioBox.Option.Title>

          <FormField.RadioBox.Option.Description>
            {optionDescription}
          </FormField.RadioBox.Option.Description>
        </FormField.RadioBox.Option>

        <FormField.RadioBox.Option value='value_2'>
          <FormField.RadioBox.Option.Title>
            {optionTwoTitle}
          </FormField.RadioBox.Option.Title>

          <FormField.RadioBox.Option.Description>
            {optionDescription}
          </FormField.RadioBox.Option.Description>
        </FormField.RadioBox.Option>

        <FormField.RadioBox.Option
          value='value_3'
          disabled={disableThirdOption}
        >
          <FormField.RadioBox.Option.Title>
            {optionThreeTitle}
          </FormField.RadioBox.Option.Title>

          <FormField.RadioBox.Option.Description>
            {optionDescription}
          </FormField.RadioBox.Option.Description>
        </FormField.RadioBox.Option>
      </FormField.RadioBox>
    </FormField>
  )
}

export const Default: Story = {
  render: ({ width, ...args }) => (
    <div style={{ width: width ?? 384 }}>
      <RadioBoxWithHooks {...args} />
    </div>
  ),
}

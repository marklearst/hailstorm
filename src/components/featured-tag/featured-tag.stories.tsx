import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { FeaturedTag } from './featured-tag'
import { Panel } from '../panel'
import { FormField } from '../form-field'

type FeaturedTagStoryArgs = {
  tagLabel: string
  panelText: string
}

const meta: Meta<FeaturedTagStoryArgs> = {
  title: 'Input/FeaturedTag',
  args: {
    tagLabel: 'Recommended!',
    panelText: 'This example uses a Panel component',
  },
  argTypes: {
    tagLabel: { control: { type: 'text' } },
    panelText: { control: { type: 'text' } },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const RadioBoxWithRecommendationTag = ({ tagLabel }: { tagLabel: string }) => {
  const [value, setValue] = useState('value_1')

  return (
    <div className='w-96'>
      <FormField>
        <FormField.RadioBox
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          id='value'
        >
          <FormField.RadioBox.Option value='option_1'>
            Option 1<FeaturedTag>{tagLabel}</FeaturedTag>
          </FormField.RadioBox.Option>

          <FormField.RadioBox.Option value='option_2'>
            Option 2
          </FormField.RadioBox.Option>

          <FormField.RadioBox.Option value='option_3'>
            Option 3
          </FormField.RadioBox.Option>
        </FormField.RadioBox>
      </FormField>
    </div>
  )
}

export const Default: Story = {
  render: ({ tagLabel }) => (
    <RadioBoxWithRecommendationTag tagLabel={tagLabel} />
  ),
}

export const PanelExample: Story = {
  render: ({ tagLabel, panelText }) => (
    <div className='w-96'>
      <Panel className='relative'>
        <p>{panelText}</p>
        <FeaturedTag>{tagLabel}</FeaturedTag>
      </Panel>
    </div>
  ),
}

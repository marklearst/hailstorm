import type { Meta, StoryObj } from '@storybook/react-vite'
import { Section } from './section'
import { Button } from '../button/button'

type SectionStoryArgs = {
  title: string
  description: string
  panelText: string
  actionLabel: string
}

const meta: Meta<SectionStoryArgs> = {
  title: 'Section',
  args: {
    title: 'Section Title',
    description: 'Description',
    panelText: 'Place panel content here',
    actionLabel: 'Button',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    panelText: { control: { type: 'text' } },
    actionLabel: { control: { type: 'text' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ title, description, panelText }) => (
    <Section>
      <Section.TitleGroup>
        <Section.Title>{title}</Section.Title>
        <Section.Description>{description}</Section.Description>
      </Section.TitleGroup>
      <Section.Panel>{panelText}</Section.Panel>
    </Section>
  ),
}

export const SectionWithAction: Story = {
  render: ({ title, description, panelText, actionLabel }) => (
    <Section>
      <Section.TitleGroup>
        <Section.Title>{title}</Section.Title>
        <div className='mb-4 flex w-full justify-between gap-4'>
          <Section.Description>{description}</Section.Description>
          <Button variant='primary' onClick={() => alert('clicked')}>
            {actionLabel}
          </Button>
        </div>
      </Section.TitleGroup>
      <Section.Panel>{panelText}</Section.Panel>
    </Section>
  ),
}

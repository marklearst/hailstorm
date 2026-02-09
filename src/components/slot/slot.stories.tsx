import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slot } from './slot'

type SlotStoryArgs = {
  label: string
  href: string
  className: string
}

const meta: Meta<SlotStoryArgs> = {
  title: 'Slot',
  component: Slot,
  args: {
    label: 'Slotted link',
    href: '/',
    className: 'text-primary-500 underline',
  },
  argTypes: {
    label: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ label, href, className }) => (
    <Slot className={className}>
      <a href={href}>{label}</a>
    </Slot>
  ),
}

export const WithStyles: Story = {
  render: () => (
    <Slot
      className='rounded-sm bg-neutral-100 px-2 py-1'
      style={{ fontWeight: 600 }}
    >
      <button type='button'>Slotted button</button>
    </Slot>
  ),
}

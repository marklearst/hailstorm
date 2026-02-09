import type { Meta, StoryObj } from '@storybook/react-vite'
import { Disclosure } from './disclosure'

type DisclosureStoryArgs = {
  buttonLabel: string
  panelContent: string
}

const meta: Meta<DisclosureStoryArgs> = {
  title: 'Disclosure',
  args: {
    buttonLabel: 'Disclosure Button',
    panelContent: 'Disclosure Content',
  },
  argTypes: {
    buttonLabel: { control: { type: 'text' } },
    panelContent: { control: { type: 'text' } },
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
  render: ({ buttonLabel, panelContent }) => (
    <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
  ),
}

export const Stacked: Story = {
  render: ({ buttonLabel, panelContent }) => (
    <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
  ),
}

export const DefaultOpen: Story = {
  render: ({ buttonLabel, panelContent }) => (
    <div className='w-96'>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure defaultOpen>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button>{buttonLabel}</Disclosure.Button>
        <Disclosure.Panel>{panelContent}</Disclosure.Panel>
      </Disclosure>
    </div>
  ),
}

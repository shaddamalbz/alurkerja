import type { Meta, StoryObj } from '@storybook/react'
import { Drawer, Button } from '@/components'
import { useState } from 'react'
import { FaAd } from 'react-icons/fa'

const meta = {
  title: 'Drawer',
  component: Drawer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    menuConfig: [
      { label: 'Menu1', href: '/menu1', icon: <FaAd /> },
      {
        label: 'Menu2',
        href: '/menu2',
        icon: <FaAd />,
        child: [
          {
            href: '/child1',
            label: 'Child1',
            child: [
              {
                href: '/grandchild',
                label: 'Grandchild',
                description: 'lorem ipsum',
              },
            ],
          },
          {
            href: '/child2',
            label: 'Child2',
            description: 'lorem ipsum',
          },
        ],
      },
      { label: 'Menu3', href: '/menu3', icon: <FaAd />, groupBy: 'Group' },
      {
        label: 'Menu4',
        href: '/menu4',
        icon: <FaAd />,
        child: [
          {
            href: '/child2',
            label: 'Child2',
            child: [
              {
                href: '/grandchild2',
                label: 'Grandchild2',
                description: 'lorem ipsum',
              },
            ],
          },
        ],
      },
    ],
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <header className="w-screen h-20 flex items-center bg-red-400">
          <Button onClick={() => setIsOpen(true)}>Open</Button>
        </header>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          menuConfig={args.menuConfig}
        />
      </>
    )
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '@/components'
import { FaAd } from 'react-icons/fa'
import { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {
    currentPathName: '/menu3/child2/grandchild',
    menuConfig: [
      { label: 'Menu1', href: '/menu1', icon: <FaAd /> },
      { label: 'Menu Nested 2', href: '/menu2', icon: <FaAd />, child: [{ href: '/menu2/child1', label: 'Child1' }] },
      {
        label: 'Menu Nested 3',
        href: '/menu3',
        icon: <FaAd />,
        child: [
          {
            href: '/menu3/child2',
            label: 'Child2',
            child: [{ href: '/menu3/child2/grandchild', label: 'Grandchild' }],
          },
        ],
      },
      { label: 'Menu Group', href: '/menu3', icon: <FaAd />, groupBy: 'Group' },
    ],
    menuWrapper: ({ children, menu }) => (
      <Link to={menu.href}>
        <>{children}</>
      </Link>
    ),
  },
  render: (args) => {
    const [toogled, setToggled] = useState(false)

    return (
      <div className="max-w-screen">
        <div className="fixed">
          <Sidebar
            toggled={toogled}
            setToggled={setToggled}
            menuConfig={args.menuConfig}
            currentPathName={args.currentPathName}
          />
        </div>
        <div
          className={clsx('transition-[margin] ease-in-out duration-400', toogled ? 'sm:ml-[80px]' : 'sm:ml-[270px]')}
        >
          tes
        </div>
      </div>
    )
  },
}

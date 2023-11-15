import type { Meta, StoryObj } from '@storybook/react'
import { DiagramBpmn } from './Diagram'

const meta = {
  title: 'Components/DiagramBpmn',
  component: DiagramBpmn,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DiagramBpmn>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    url: 'https://api-geekacademy.merapi.javan.id/api/bpmn/cuti',
  },
}

export const CurrentEvent: Story = {
  args: {
    url: 'https://api-geekacademy.merapi.javan.id/api/bpmn/cuti',
    currentEvent: 'review',
  },
}

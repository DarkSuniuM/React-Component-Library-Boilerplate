import { Story, Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story = () => <Button />;

export const Simple = Template.bind({});

import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button',
  },
};

export const button = (): JSX.Element => {
  return (
    <Button variant='warning' size='medium'>
      primary
    </Button>
  );
};

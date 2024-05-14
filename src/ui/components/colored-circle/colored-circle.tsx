import { memo } from 'react';

import { classes } from '@helpers';

type ColoredCircleParams = {
  color: 'red' | 'yellow' | 'green';
  size?: number;
};

export const ColoredCircle = memo(({ color, size = 3 }: ColoredCircleParams) => {
  return <div className={classes('mr-2 rounded-full', `h-${size} w-${size}`, `bg-${color}-500`)}></div>;
});

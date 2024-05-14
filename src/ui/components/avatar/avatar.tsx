import { memo } from 'react';

import { classes } from '@helpers';

export type AvatarProps = {
  rounded?: boolean;
};

export const Avatar = memo(({ rounded = true }: AvatarProps) => {
  return (
    <img src="/img/mauricio-paulino.png" className={classes('mr-4 max-h-full max-w-full', rounded && 'rounded-full')} />
  );
});

import React from 'react';

import { ActionIcon } from '@mantine/core';
import { Menu2 } from 'tabler-icons-react';

interface Props {
  handleOpen: () => void;
}

export const MenuButton = ({ handleOpen }: Props) => {
  return (
    <ActionIcon
      variant={'filled'}
      onClick={handleOpen}
      sx={{
        backgroundColor: 'var(--color-theme)',
      }}
    >
      <Menu2 size={48} strokeWidth={2} color={'white'} />
    </ActionIcon>
  );
};

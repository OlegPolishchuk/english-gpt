import React from 'react';

import { Drawer } from '@mantine/core';

import { LogoutButton } from '@/components/Buttons';

interface Props {
  opened: boolean;
  close: () => void;
}

export const Navigation = ({ opened, close }: Props) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Navigation"
      size={'xs'}
      overlayProps={{ opacity: 0.5, blur: 4 }}
    >
      {/* Drawer content */}
      some content
      <LogoutButton />
    </Drawer>
  );
};

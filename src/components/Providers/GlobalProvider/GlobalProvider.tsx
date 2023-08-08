import React from 'react';

import {ClientAuthnProvider} from "../ClientAuthnProvider/ClientAuthnProvider";
import {Mantine} from '../Mantine/Mantine';

import {User} from "@/models";
import {me} from '@/services';

export const GlobalProvider = async ({ children }: { children: React.ReactNode }) => {
  /* Исправить, когда понадобится стор */
  const user = await me() || {} as User;

  return (
    <ClientAuthnProvider user={user}>
      <Mantine>{children}</Mantine>
    </ClientAuthnProvider>
  );
};

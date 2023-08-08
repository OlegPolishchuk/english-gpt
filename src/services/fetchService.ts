import {cookies} from "next/headers";

export const fetchAPI = async (url: string, init?: RequestInit ) => {
  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString()
    },
    ...init
  } as RequestInit;

  return fetch(url, {...options});
}
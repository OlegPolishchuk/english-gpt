import {User} from "@/models";
import {fetchAPI} from "@/services/fetchService";
import {Endpoints} from "@/shared/constants";
import {Nullable} from "@/types/common";


export const me = async (): Promise<Nullable<User>> => {
 try {
   const res = await fetchAPI(Endpoints.auth.base);
   const data: User = await res.json();

   if (!data.id) {
     return null;
   }

   return data;
 }
 catch (e) {
   console.log('Error in Me authService', e)
   return null
 }
}

export const updateTokens = async (refreshToken: string) => {
  return await fetch(Endpoints.auth.refreshToken , {
    credentials: 'include',
    headers: {
      Cookie: `refreshToken=${refreshToken}`
    }
  })
}


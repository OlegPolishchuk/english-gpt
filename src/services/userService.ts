import {User, UserActivity} from '@/models';
import {fetchAPI} from "@/services/fetchService";
import {Endpoints} from "@/shared/constants";


export interface UserDataResponse extends User {
  Activity: UserActivity[];
}

export const userService = {
  async getUserProfile() {
    try {
      const res = await fetchAPI(Endpoints.user);

      const data = await res.json();
      console.log(data)
      return data;
    }
    catch (e) {
      console.log('Error in userService', e)
    }
  },

  async updateActivity(userEmail: Email) {
    return fetch(Endpoints.activity, {
      method: 'PUT',
      body: JSON.stringify({userEmail})
    })
  },

};

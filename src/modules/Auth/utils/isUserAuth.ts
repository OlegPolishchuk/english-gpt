import {me} from "@/services";

export const isUserAuth = async () => {
  const user = await me();

  return !!user;
}
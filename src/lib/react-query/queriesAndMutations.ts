import {
  userQuery,
  useMutation,
  useQueryClient,
  userInfiniteQuery,
  useMutation,
} from "@tanstack/react-query";

import { createUserAccount, signInAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => signInAccount(user),
  });
};

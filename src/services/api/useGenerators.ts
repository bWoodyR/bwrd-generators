import { TGeneratorsUser } from "@/types/GeneratorsUserType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";
import { ACTION_TYPES } from "../Context/appReducer";
import { useAuth } from "@clerk/clerk-react";
import { Inputs, TTag } from "@/types/TagType";
import axiosServer from "@/utils/axios";

export const useGeneratorsUsers = () => {
  const { dispatch } = useContext(AppContext);
  const { data, isPending, mutate } = useMutation({
    mutationFn: async (data: TGeneratorsUser) => {
      const response = await axiosServer.post("/generators/user", data);
      return response.data;
    },
    onSuccess: (data) => {
      dispatch({ type: ACTION_TYPES.SET_USER, payload: data });
      return data;
    },
  });

  return { data, isPending, mutate };
};

export const useGeneratorsTags = () => {
  const { userId } = useAuth();
  const { state } = useContext(AppContext);
  const { data, error, isError, isFetching, refetch } = useQuery({
    queryKey: ["tags", state.user],
    queryFn: async () => {
      if (!state.user || !state.user?.isTipsport) return null;
      const response = await axiosServer.get(`/generators/${userId}/tags`);
      return response.data as TTag[];
    },
    staleTime: 20 * (60 * 1000),
  });
  return { data, error, isError, isFetching, refetch };
};

export const useUpdateTagUrl = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const { data, isPending, mutate } = useMutation({
    mutationFn: async (data: TTag) => {
      const response = await axiosServer.patch(`/generators/${userId}/tags/balance`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });

  return { data, isPending, mutate };
};

export const useDeleteTag = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: TTag) => {
      const response = await axiosServer.delete(`/generators/${userId}/tags/${data._id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
  return { mutate, isPending };
};

export const useAddTag = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const { data, isPending, mutate } = useMutation({
    mutationFn: async (data: Inputs) => {
      const response = await axiosServer.post(`/generators/${userId}/tags`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
  return { data, isPending, mutate };
};

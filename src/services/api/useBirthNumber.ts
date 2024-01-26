import axiosServer from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

type BirthNumberProps = {
  day: number;
  month: number;
  year: number;
  gender: string;
};

export const useBirthNumber = (birthNumberData: BirthNumberProps) => {
  const { data, isError, error, isFetching, refetch } = useQuery({
    enabled: false,
    queryKey: ["birth-number"],
    queryFn: async () => {
      const response = await axiosServer.get("/birth-number", {
        params: birthNumberData,
      });
      return response.data;
    },
  });
  return { data, isError, error, isFetching, refetch };
};

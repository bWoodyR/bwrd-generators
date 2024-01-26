import axiosServer from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

type TextGeneratorProps = {
  max_length: string;
  paragraphs: string;
  start_with_lorem_ipsum: boolean;
  random: boolean;
};

export const useTextGenerator = ({ max_length, paragraphs, start_with_lorem_ipsum, random }: TextGeneratorProps) => {
  const { data, error, isError, isFetching, refetch } = useQuery({
    enabled: false,
    queryKey: ["text-generator"],
    queryFn: async () => {
      const response = await axiosServer.get(`/random-text`, {
        params: {
          max_length,
          paragraphs,
          start_with_lorem_ipsum,
          random,
        },
      });
      return response.data;
    },
  });

  return { data, error, isError, isFetching, refetch };
};

///random-text

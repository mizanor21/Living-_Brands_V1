// hooks/useWorkData.js
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useItemsData = () => {
  const { data, error } = useSWR(
    "https://living-brands-admin.vercel.app/api/works",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

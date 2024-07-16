import { useQueryClient } from "@tanstack/react-query";

export const useGetCache = (keys: (string | undefined)[]) => {
	const queryClient = useQueryClient();
	const cachedData = queryClient.getQueryData(keys as any);
	return cachedData as any;
};

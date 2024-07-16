import { QueryKey, useQueryClient } from "@tanstack/react-query";

export const useRefetch = (queryKey?: QueryKey) => {
	const queryClient = useQueryClient();
	return (queryKey2?: QueryKey) =>
		queryClient.invalidateQueries({ queryKey: queryKey2 || queryKey });
};

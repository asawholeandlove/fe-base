import { useQueryClient } from "@tanstack/react-query";
import { Button } from "antd";
import { styled } from "styled-components";

const StyledButton = styled(Button)`
	position: fixed;
	right: 10px;
	top: 18%;
	z-index: 10;
`;

export const RefetchAll = () => {
	const queryClient = useQueryClient();

	const invalidateAllQueries = () => {
		queryClient.invalidateQueries();
	};

	return <StyledButton onClick={invalidateAllQueries}>Fetch</StyledButton>;
};

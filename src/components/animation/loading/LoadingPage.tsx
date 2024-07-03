import { Spin } from "antd";
import styled from "styled-components";

const LoaderOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999; /* Ensure it appears on top of other content */
`;

export const LoadingPage = () => {
	return (
		<LoaderOverlay>
			<Spin size="large" />
		</LoaderOverlay>
	);
};

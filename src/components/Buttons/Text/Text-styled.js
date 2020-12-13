import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Text = styled(Button)`
	height: max-content;
	color: ${(props) =>
		props.dark ? "rgb(41, 23, 8, 0.8) !important" : "#ffffff !important"};
	font-size: 18px !important;
	font-weight: 500 !important;
	text-transform: unset !important;
	letter-spacing: -0.26px;
	line-height: 23px;
	text-align: center;
	margin: 0 10px !important;
	background: transparent !important;
	@media (max-width: 768px) {
		width: max-content;
		color: rgb(41, 23, 8, 0.8) !important;
		font-size: 16px !important;
	}
`;

export const Contained = styled(Text)`
	height: 48px;
	background: #fff !important;
	color: #e8832f !important;

	@media (max-width: 768px) {
		color: #e8832f !important;
	}
`;

import styled from "styled-components";

export const SimpleBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 262px;
	width: 275px;
	/* border: 10px solid #f9fafa; */
	opacity: 0.85;
	padding: 20px;
	border-radius: 4px 0 0 0;
	background-color: #ffffff;

	-webkit-border-radius: 4px 0 0 0;
	-moz-border-radius: 4px 0 0 0;
	-ms-border-radius: 4px 0 0 0;
	-o-border-radius: 4px 0 0 0;

	.simpleBoxText {
		width: 226px;
		color: #3a4152;
		font-size: 24px !important;
		text-transform: uppercase;
		font-weight: bold !important;
		letter-spacing: -0.34px;
		line-height: 31px;
		text-align: center;
	}
`;

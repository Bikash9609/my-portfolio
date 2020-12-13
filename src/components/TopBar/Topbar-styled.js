import styled from "styled-components";

export const HeaderBarWrapper = styled.div`
	width: 100%;
	background: #fff;
	height: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #e8592b;
	padding: 5px 0;
	.headerBarText {
		line-height: 15px;
		height: 15px !important;
		vertical-align: middle;
		font-size: 12px;
		font-weight: bolder;
	}

	.headerIcon {
		width: 12px;
		margin-right: 5px;
		vertical-align: text-top;
	}
`;

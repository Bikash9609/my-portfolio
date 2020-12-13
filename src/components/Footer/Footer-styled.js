import styled from "styled-components";

export const Footer = styled.div`
	background-color: #fafbfc;
	min-height: 320px;
	padding-top: 41px;

	.brandLogo {
		width: 266px !important;
		margin-bottom: 20px;
	}

	@media (max-width: 768px) {
		.brandLogo {
			width: 40% !important;
		}
	}
`;

export const Widget = styled.div`
	margin-top: 10px !important;
	margin-bottom: 10px !important;

	.widgetTitle {
		color: #5a657d;
		font-size: 12px !important;
		font-weight: bolder !important;
		letter-spacing: -0.17px;
		line-height: 15px;
	}

	.widgetContent {
		color: #5a657d !important;
		font-size: 16px !important;
		font-weight: 300;
		letter-spacing: -0.23px;
		line-height: 21px;
	}
`;

export const CardImages = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
	margin: 9px 0;
	img {
		height: 100%;
		width: 100%;
		margin: 0 auto;
	}
	div {
		margin-right: 5px !important;
	}

	@media (max-width: 768px) {
		img {
			height: 100%;
			width: 100%;
			margin-right: 2px !important;
			margin: 0 auto;
			margin-right: 10px;
		}
	}
`;

import styled from "styled-components";
import { Button } from "@material-ui/core";

import Section3BgImage from "../../assets/section3/bloc/pre-footer/Rectangle.png";
import Section5BgImage from "../../assets/section5/rectangle-copy-3.png";

export const PartnersWrapper = styled.section`
	height: max-content;
	margin-top: 64px;
	padding-bottom: 56px;
	img {
		width: max-content;
		height: max-content;
		margin: 0 auto;
		margin-top: 20px;
	}
	.partnersFooterText {
		color: #657088;
		font-size: 18px !important;
		letter-spacing: -0.26px;
		line-height: 23px;
		margin-top: 18px !important;
		text-align: center;
	}

	@media (max-width: 768px) {
		height: 640px;
		max-height: max-content;
		margin-top: 24px;
	}
`;

export const PartnersHeader = styled.div`
	display: flex;
	flex-direction: row;
	/* align-items: flex-end; */
	justify-content: flex-start;
	padding-top: 20px !important;

	.partnersHeaderTagline {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;

		margin: 0 auto;
	}
	.partnersHeaderText {
		color: #344157 !important;
		text-transform: uppercase;
		width: 50%;
		margin: 0 10px !important;
		font-size: 32px !important;

		text-align: center;
	}

	.partnersHeaderText strong {
		font-size: 54px !important;
	}

	.headerBlock {
		background: #eee;
		height: 20px;
		width: 35%;
	}
	.headerBlock:first-child {
		width: 25% !important;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding-top: 20px !important;

		.partnersFooterText {
			color: #657088;
			font-size: 18px !important;
			letter-spacing: -0.26px;
			line-height: 23px;
			margin-top: 18px !important;
			text-align: center;
		}
		.partnersHeaderText {
			color: #344157 !important;
			text-transform: uppercase;
			width: 100%;
			margin: 0 10px !important;
			font-size: 19px !important;
		}
		.partnersHeaderText strong {
			width: 50%;
			font-size: 24px !important;
		}
		.headerBlock {
			width: 25%;
		}

		.headerBlock:first-child {
			width: 25% !important;
		}
	}

	@media (min-width: 425px) and (max-width: 768px) {
		.headerBlock {
			width: 45%;
		}

		.partnersHeaderText strong {
			width: 30%;
		}
	}
`;

export const Image = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: 10px;
	@media (max-width: 768px) {
		margin-bottom: 10px;
		margin-right: 0;
	}
`;

// section 2

export const Section2 = styled.div`
	height: max-content;
	margin-top: 119px;
	.profitCard {
		margin-top: 68px;
		width: 100% !important;
		box-sizing: border-box;
		box-shadow: 0 10px 20px -5px rgba(180, 186, 189, 0.5),
			0 -10px 20px -5px rgba(237, 242, 245, 0.57);
		border-radius: 4px;
	}
	.profitImage {
		padding: 0 !important;
	}

	.parallelogram {
		box-sizing: border-box;
		width: 122px;
		height: 106px;
		background: linear-gradient(90deg, #e8832f 0%, #e8592b 100%);
		clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
		margin: 0 auto;
	}

	.profitImage {
		div {
			object-fit: contain;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			margin: 0 auto;
		}

		img {
			height: 64px;
			width: 66px;
			margin-right: 40%;
		}
	}

	.profitTextWrapper {
		width: 100%;
		padding-left: 13%;
		word-wrap: break-word;
	}

	.profitText {
		width: 313px;
		color: #68758a;
		font-size: 24px !important;
		letter-spacing: 0;
		text-transform: uppercase;
		line-height: 31px;
		font-weight: 500 !important;
	}

	.profitsBottomImageWrapper {
		width: 95%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}

	.profitsBottomImageWrapper img {
		margin-top: -40px;
	}
	@media (max-width: 768px) {
		height: max-content;
		width: 100%;
		.profitText {
			word-wrap: break-word !important;
			max-width: 100% !important;
			font-size: 16px !important;
		}
		.profitCard {
			margin-top: 20px;
			width: 100% !important;
			margin-right: 20px !important;
		}

		.parallelogram {
			box-sizing: border-box;
			width: 122px;
			height: 106px;
			background: linear-gradient(90deg, #e8832f 0%, #e8592b 100%);
			clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
			margin: 0 auto;
		}

		.profitImage {
			div {
				object-fit: contain;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				margin: 0 auto;
			}

			img {
				height: 64px;
				width: 66px;
				margin-right: 40%;
			}
		}
		.profitTextWrapper {
			padding-left: 25%;
		}

		.profitsBottomImageWrapper {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
		}
		.profitsBottomImageWrapper img {
			margin-top: -10px;
			width: 50%;
		}
	}

	@media (max-width: 1024px) {
		.profitText {
			font-size: 16px !important;
			word-break: normal;
			word-wrap: break-word;
		}
	}
`;

export const CommonButton = styled(Button)`
	height: 48px;
	width: 276px;
	border-radius: 4px;
	background: linear-gradient(90deg, #e8832f 0%, #e8592b 100%) !important;
	color: #ffffff !important;
	font-size: 16px !important;
	text-transform: unset !important;
	font-weight: bold !important;
	letter-spacing: 0;
	line-height: 21px;
	margin-top: 68px !important;
	margin-bottom: 68px !important;
	text-align: center;
`;

// Section 3

export const Section3 = styled.section`
	height: max-content;
	margin-top: 66.15px;
	background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
		url(${Section3BgImage});
	background-size: cover;
	background-position: center;
	background-attachment: scroll;
	background-repeat: no-repeat;

	.boxWrapper {
		margin-top: 67px !important;
	}
`;

export const SimpleBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 262px;
	width: 275px;
	border: 0.1px solid #f9fafa;
	opacity: 0.85;
	padding: 20px;
	border-radius: 4px 0 0 0;
	background-color: #ffffff;
	box-shadow: 0 -10px 20px -5px rgba(237, 242, 245, 0.56),
		0 10px 20px -5px rgba(180, 186, 189, 0.5);
	-webkit-border-radius: 4px 0 0 0;
	-moz-border-radius: 4px 0 0 0;
	-ms-border-radius: 4px 0 0 0;
	-o-border-radius: 4px 0 0 0;
	/* margin-bottom: 20px;
    margin-right: 20px; */

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
	.absoluteImage {
		position: absolute;
		width: 132px;
		height: 132px;
		top: -60px;
		left: -50px;
	}
`;

/* Section 4 = Testimonials */

export const Section4 = styled.section`
	min-height: 600px;
	max-height: max-content;
	padding-top: 77px !important;
	.TestimonialCardsWrapper {
		margin-top: 32px !important;
	}
`;

// Section 5
export const Section5 = styled.section`
	min-height: 600px;
	max-height: max-content;
	.formWrapper {
		background: url(${Section5BgImage});
		min-height: 500px;
		max-width: 882px;
		margin: 0 auto;
		margin-top: 53px;
		padding: 52px 47px;

		form {
			margin: 0 auto;
			width: 100%;
			background: #fff;
			padding: 20px;
			border-radius: 8px;
			box-shadow: 0 -10px 20px -5px rgba(237, 242, 245, 0.56),
				0 10px 20px -5px rgba(180, 186, 189, 0.5);
			input {
				width: 100% !important;
			}

			input::placeholder {
				color: #c1c8d4 !important;
				font-size: 16px;
				font-weight: normal;
			}
		}
	}

	.inputField {
		width: 100% !important;
		input {
			font-weight: bold !important;
			padding: 20px 0 !important;
			border-bottom: 2px solid #eee !important;
		}
	}

	@media (max-width: 768px) {
		min-height: 600px;
		max-height: max-content;
		.formWrapper {
			width: 100%;
			box-sizing: border-box;
			padding: 10px 0;
			form {
				box-sizing: border-box;
				margin: 0 auto;
				width: 100%;
				background: #fff;
				padding: 10px 20px;
				input {
					width: 100% !important;
				}
			}
		}
		.inputField {
			width: 100% !important;
		}
	}
`;

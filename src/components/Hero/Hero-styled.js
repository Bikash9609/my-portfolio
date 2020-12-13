import styled from "styled-components";
import { Button } from "@material-ui/core";

import heroLandingBgImage from "../../assets/Landing/Rectangle.png";
import heroLandingBgImage2x from "../../assets/Landing/Rectangle@2x.png";

export const HeroWrapper = styled.div`
	min-height: 608px;
	width: 100% !important;
	background: url(${heroLandingBgImage});
	background-size: cover;
	background-position: center center;
	background-attachment: scroll;
	position: relative;
	border-radius: 0;

	.ribbionWrapper {
		left: -20px;
		position: absolute;
	}

	.ribbion {
		position: absolute;
	}

	.heroHeaderText {
		margin-top: 36px !important;
		color: #ffffff;
		font-size: 64px !important;
		max-width: 870px;
		font-weight: bolder !important;
		letter-spacing: -0.91px;
		line-height: 62px;
	}

	.headerSubtitleText {
		margin-top: 18px !important;
		width: 607px;
		color: #ffffff;
		font-size: 18px !important;
		letter-spacing: -0.26px;
		line-height: 23px;
	}

	@media (max-width: 768px) {
		min-height: 300px;
		max-height: max-content !important;
		width: 100% !important;
		padding-bottom: 50px;

		.heroLogo img {
			max-width: 100%;
		}
		.heroHeaderText {
			margin-top: 36px !important;
			color: #ffffff;
			font-size: 34px !important;
			max-width: 100%;
			font-weight: bolder !important;
			letter-spacing: -0.91px;
			line-height: 62px;
		}
		.headerSubtitleText {
			margin-top: 18px !important;
			width: 100%;
			height: 100%;
			color: #ffffff;
			font-size: 18px !important;
			letter-spacing: -0.26px;
			line-height: 23px;
		}
	}

	@media (min-width: 1440px) {
		background: url(${heroLandingBgImage2x});
		background-position: 0 5px !important;
		background-size: cover;
		background-repeat: no-repeat;
		.ribbionWrapper {
			left: -20px;
			position: absolute;
			top: 4px;
		}
	}
`;

export const HeroButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	height: 75px;
	margin-right: 20px;
	background: transparent;

	.desktopButtons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.mobileMenuButton {
		display: none;
	}

	.logo {
		align-self: center;
		justify-self: flex-start;
	}

	@media (max-width: 768px) {
		.mobileMenuButton {
			display: block;
		}
		.desktopButtons {
			display: none !important;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-end;
			align-items: center;
			height: 75px;
			width: 100%;
			/* margin-right: 20px; */
		}
	}
`;

export const FloatingNavbar = styled.div`
	display: ${(props) => (props.show ? "none" : "block")};
	position: fixed;
	background: #ffffff;
	padding: 0;
	box-shadow: 0 10px 20px rgb(0, 0, 0, 0.1);
	top: 0;
	right: 0;
	z-index: 111;
	width: 100%;
	height: max-content;
	transition: all 0.75s ease-in-out;

	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.heroLogo {
			img {
				width: 70%;
			}
		}
	}

	.desktopButtons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.mobileMenuButton {
		display: none;
	}

	.logo {
		align-self: center;
		justify-self: flex-start;
	}

	@media (max-width: 764px) {
		.mobileMenuButton {
			display: block;
			svg {
				color: #e8592b !important;
			}
		}
		.desktopButtons {
			display: none !important;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-end;
			align-items: center;
			height: 75px;
			width: 100%;
			/* margin-right: 20px; */
		}
	}
`;

export const HomeButton = styled(Button)`
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
	margin-top: 37px !important;
	text-align: center;
`;

export const FloatingCTOButton = styled(HomeButton)`
	margin-top: 0 !important;

	@media (max-width: 768px) {
		max-width: max-content;
	}
`;

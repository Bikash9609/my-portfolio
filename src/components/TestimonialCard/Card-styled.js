import styled from "styled-components";

export const TestimonialCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
	border: 0.1px solid #f9fafa;
	border-radius: 4px;
	background-color: #ffffff;
	box-shadow: 0 -10px 20px -5px rgba(237, 242, 245, 0.5),
		0 10px 20px -5px rgba(237, 242, 245, 0.5);

	.Avatar {
		width: 64px;
		height: 64px;
		margin: 10px;
		margin-top: -50px;
	}

	.brandImage {
		width: 96px !important;
		margin-bottom: 10px;
	}

	.title {
		color: #657088;
		font-size: 16px !important;
		font-weight: 300;
		letter-spacing: -0.23px;
		line-height: 21px;
		text-align: center;
		margin-bottom: 31.15px;
	}

	.description {
		color: #3a4152 !important;
		font-size: 18px !important;
		letter-spacing: -0.26px;
		line-height: 23px;
		text-align: center;
		font-weight: 500px !important;
		padding: 10px;
		padding-top: 0;
	}
`;

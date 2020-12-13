import styled from "styled-components";

export const HeaderTagline = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 auto;

	.partnersHeaderText {
		color: #344157 !important;
		text-transform: uppercase;
		width: 45%;
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
		width: 50%;
    }
    
    
@media (max-width: 768px) {
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
	
`;

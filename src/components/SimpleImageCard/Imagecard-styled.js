import styled from "styled-components";
import { CardMedia } from "@material-ui/core";

export const SimpleImageBoxWrapper = styled(CardMedia)`
	height: 262px;
	width: 275px;
	border-radius: 0 4px 0 0;
	box-sizing: border-box;

	.simpleImageBox {
		height: 100%;
		width: 100%;
	}
`;

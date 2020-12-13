import React from "react";

import { CardMedia } from "@material-ui/core";

import { SimpleImageBoxWrapper } from "./Imagecard-styled";

function ImageCard({ image, alt }) {
	return (
		<div>
			<SimpleImageBoxWrapper>
				<img src={image} className={"simpleImageBox"} />
			</SimpleImageBoxWrapper>
		</div>
	);
}

export default ImageCard;

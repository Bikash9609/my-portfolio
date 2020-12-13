import React from "react";

import { Typography } from "@material-ui/core";

import { SimpleBox } from "./Textbox-styled";

function TextBox({ text, image }) {
	return (
		<SimpleBox>
			<img src={image} alt="Box" className={"absoluteImage"} />
			<Typography variant="body1" className={"simpleBoxText"}>
				{text}
			</Typography>
		</SimpleBox>
	);
}

export default TextBox;

import React from "react";

import { Typography } from "@material-ui/core";

import { HeaderTagline } from "./Dashed-styled";

function DashedHeader({ text, highlightedText }) {
	return (
		<HeaderTagline>
			<div className={"headerBlock"}></div>
			<Typography variant="h2" align="center" className={"partnersHeaderText"}>
				{text}
				<br /> <strong>{highlightedText}</strong>
			</Typography>
			<div className={"headerBlock"}></div>
		</HeaderTagline>
	);
}

export default DashedHeader;

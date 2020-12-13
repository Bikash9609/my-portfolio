import React from "react";

import { Contained, Text } from "./Text-styled";

export const TextButton = ({ text, dark }) => {
	return (
		<div>
			<Text variant="text" dark={dark && dark}>
				{text}
			</Text>
		</div>
	);
};

export const ContainedButton = ({ text }) => {
	return (
		<div>
			<Contained variant="contained">{text}</Contained>
		</div>
	);
};

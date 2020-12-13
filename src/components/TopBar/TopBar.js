import React, { useRef, useState, useEffect } from "react";

import { Container, Typography, Icon } from "@material-ui/core";

import { HeaderBarWrapper } from "./Topbar-styled";

function TopBar({ text, icon }) {
	return (
		<>
			<HeaderBarWrapper as={"div"}>
				<Container style={{ marginLeft: "!58px" }}>
					<Icon className={"headerIcon"}>{icon}</Icon>
					<Typography variant="body" className={"headerBarText"}>
						{text}
					</Typography>
				</Container>
			</HeaderBarWrapper>
		</>
	);
}

export default TopBar;

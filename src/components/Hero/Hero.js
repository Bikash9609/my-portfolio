import React, { useState } from "react";

import {
	Container,
	Button,
	Typography,
	IconButton,
	ListItem,
	SwipeableDrawer,
	Avatar,
} from "@material-ui/core";
import { AiOutlineMenu } from "react-icons/ai";

import { TextButton, ContainedButton } from "../Buttons/Text/TextButton";
import RibbionImage from "../../assets/Hero/A_MGFjZjlkZDY2YjhlM2JmOcjOrXqCqJ9y7kHHUblUq1eHSk5DlW0e_YpRFavl2eBdNNEJkF7a-B2BJOqqoUGKOdmJeQqzE7tOqBNMQI8SmhYd0RuaEhC4DTl5SUF7-X8E.png";

import {
	FloatingCTOButton,
	HeroWrapper,
	HeroButtons,
	HomeButton,
	FloatingNavbar,
} from "./Hero-styled";
import { useEffect } from "react";

const CustomSwipeableDrawer = ({ open, close }) => {
	return (
		<SwipeableDrawer open={open} onClose={close}>
			<ListItem>
				<TextButton text="Nos domaines" />
			</ListItem>
			<ListItem>
				<TextButton text="Avis clients" />
			</ListItem>
			<ListItem>
				<ContainedButton text="Demander un devis" />
			</ListItem>
		</SwipeableDrawer>
	);
};

function Hero({ headerText, headerSubtitleText }) {
	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => {
		setDrawer(!drawer);
	};

	const [transparentNavbar, setTransparentNavbar] = useState(true);

	useEffect(() => {
		let listener = null;
		listener = document.addEventListener("scroll", (e) => {
			let scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				setTransparentNavbar(false);
			} else {
				setTransparentNavbar(true);
			}
		});
		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [transparentNavbar]);

	return (
		<>
			<FloatingNavbar show={transparentNavbar}>
				<Container>
					<div className="navbar">
						<div className={"heroLogo"}>
							<img
								src={require("../../assets/Hero/group-60.png")}
								alt="Group 60"
							/>
						</div>
						<div className={"desktopButtons"}>
							<TextButton text="Nos domaines" dark={!transparentNavbar} />
							<TextButton text="Avis clients" dark={!transparentNavbar} />
							<FloatingCTOButton variant="contained">
								Demander un devis
							</FloatingCTOButton>
						</div>
						<IconButton onClick={showDrawer} className={"mobileMenuButton"}>
							<AiOutlineMenu color="#fff" />
						</IconButton>
						{<CustomSwipeableDrawer open={drawer} close={showDrawer} />}
					</div>
				</Container>
			</FloatingNavbar>

			<HeroWrapper>
				<div className={"ribbionWrapper"}>
					<img src={RibbionImage} alt="Ribbion" className={"ribbion"} />
				</div>
				<HeroButtons>
					<div className={"desktopButtons"}>
						<TextButton text="Nos domaines" />
						<TextButton text="Avis clients" />
						<ContainedButton text="Demander un devis" />
					</div>
					<IconButton onClick={showDrawer} className={"mobileMenuButton"}>
						<AiOutlineMenu color="#fff" />
					</IconButton>
					{<CustomSwipeableDrawer open={drawer} close={showDrawer} />}
				</HeroButtons>
				<Container>
					<div className={"heroLogo"}>
						<img
							src={require("../../assets/Hero/Group 60.png")}
							alt="Group 60"
						/>
					</div>
					<div className={"heroHeaderTextWrapper"}>
						<Typography variant="h1" className={"heroHeaderText"}>
							{headerText}
						</Typography>
						<Typography variant="h6" className={"headerSubtitleText"}>
							{headerSubtitleText}
						</Typography>
						<HomeButton variant="contained">Demander un devis</HomeButton>
					</div>
				</Container>
			</HeroWrapper>
		</>
	);
}

export default Hero;

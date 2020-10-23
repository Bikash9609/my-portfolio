import React, { useState } from "react";

import {
	Avatar,
	Button,
	Grid,
	Modal,
	Paper,
	Typography,
} from "@material-ui/core";
import Skeleton from "react-loading-skeleton";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { GoLocation } from "react-icons/go";
import { VscMailRead } from "react-icons/vsc";
import { BiArrowBack } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

import Work1 from "../../assets/Images/Work/Coffee-Day-Coffee-Shop.png";
import Work2 from "../../assets/Images/Work/DSPMU-Official.png";
import Work3 from "../../assets/Images/Work/Home (1).png";
import Work4 from "../../assets/Images/Work/React-App-Mobile.png";
import Work5 from "../../assets/Images/Work/React-App.png";
import Work6 from "../../assets/Images/Work/Sign-In.png";
import Work7 from "../../assets/Images/Work/Title.png";

import Spinner from "../../components/Spinner/Spinner";
import LazyLoadImage from "../../components/ImageLoazyLoader/ImageLazyLoad";

import "./HomePage.css";

const ViewImageModal = ({ pic }) => {
	let imgSrc = pic && pic;

	const [show, setShow] = useState(false);

	const modalShowHandler = () => {
		setShow(!show);
	};
	return (
		<>
			<Modal open={show} onClose={modalShowHandler} className="workModal">
				<>
					<Button
						variant="contained"
						onClick={modalShowHandler}
						style={{
							marginBottom: "10px",
							backgroundColor: "#cc3131",
							position: "-webkit-sticky",
							position: "sticky",
							top: 0,
							color: "#fff",
							fontSize: "29px",
							boxShadow: "0 10px 30px rgb(0,0,0,0.1)",
						}}
					>
						<BiArrowBack />{" "}
						<span
							style={{
								fontSize: "12px",
								marginLeft: "5px",
							}}
						>
							Go back
						</span>
					</Button>
					<img src={imgSrc} alt="Work_Image" />
				</>
			</Modal>
			<Paper className="workPaper" onClick={modalShowHandler}>
				<LazyLoadImage
					src={imgSrc}
					alt="Work_Image"
					height="100%"
					width="100%"
				/>
			</Paper>
		</>
	);
};

function HomePage() {
	return (
		<div>
			<div className="Header__Wrapper">
				<Grid container justify="space-between">
					<Grid item xs={2} className="Avatar">
						<div>
							<div>
								<Typography variant="h5" component="p">
									Skills
								</Typography>
							</div>
						</div>
						<div>
							<div>
								<p>JavaScript</p>
							</div>
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/icons8-javascript-48.png")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>Bootstrap</p>
							</div>{" "}
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/Bootstrap_(front-end_framework)-Logo.wine.svg")}
							></Avatar>
						</div>

						<div>
							<div>
								<p>ReactJS</p>
							</div>{" "}
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/download (1).png")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>HTML</p>
							</div>
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/icons8-html-50.png")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>MongoDb</p>
							</div>
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/icons8-mongodb-48.png")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>Redux</p>
							</div>{" "}
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/icons8-redux-48.png")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>MaterialUi</p>
							</div>
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/material-ui-logo-png-transparent.png")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>ExpressJS</p>
							</div>
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/nodejs-expressjs-javascript-solution-stack-web-application-expressjs-png-800_490.jpg")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>NodeJS</p>
							</div>
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/nodejs-javascript-web-application-expressjs-computer-software-node-png-820_820.jpg")}
							></Avatar>
						</div>
						<div>
							<div>
								<p>CSS</p>
							</div>
							<Avatar
								className="langImage"
								variant="circle"
								src={require("../../assets/Images/Languages/png-transparent-html-css-design-and-build-web-sites-web-development-cascading-style-sheets-world-wide-web-web-design-text-logo.png")}
							></Avatar>
						</div>
					</Grid>
					<Grid item xs={8}>
						<header className="Header">
							<div className="Header__PortPic">
								<LazyLoadComponent
									placeholder={<Spinner />}
									style={{ margin: "0 auto", width: "max-content" }}
								>
									<Avatar
										src={require("../../assets/Images/UserPic/PinkShirt.png")}
										alt="Bikash Tiwari"
										className="Header__PortPic_UserPic"
									/>
								</LazyLoadComponent>
							</div>

							<div className="Header__PortPic_Bio">
								<h1>Bikash Tiwari</h1>
								<p className="Header__PortPic_Pos">Mern Stack Developer</p>
								<p>
									<GoLocation />
									India
								</p>
								<p>
									<VscMailRead />
									<a href="mailto:bikashtiwari020@gmail.com">
										bikashtiwari020@gmail.com
									</a>
								</p>
							</div>
						</header>
					</Grid>
					<Grid item xs={2}>
						<p className="rightText">}}}}}</p>
					</Grid>
				</Grid>
			</div>

			<main>
				<Typography variant="h3">My work</Typography>
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
				>
					<LazyLoadComponent>
						<Grid item xs={3}>
							<ViewImageModal pic={Work2} />
						</Grid>
						<Grid item xs={3}>
							<ViewImageModal pic={Work3} />
						</Grid>
						<Grid item xs={3}>
							<ViewImageModal pic={Work4} />
						</Grid>
						<Grid item xs={3}>
							<ViewImageModal pic={Work5} />
						</Grid>
						<Grid item xs={3}>
							<ViewImageModal pic={Work7} />
						</Grid>
						<Grid item xs={3}>
							<ViewImageModal pic={Work1} />
						</Grid>
						<Grid item xs={3}>
							<ViewImageModal pic={Work6} />
						</Grid>
					</LazyLoadComponent>
				</Grid>
			</main>

			<section>
				<div className="Grid">
					<Button variant="outlined" className="talkButton">
						Want to talk
					</Button>
				</div>
			</section>

			<footer>
				<Typography variant="subtitle1" className={"footer"}>
					{" "}
					Made with <FcLike /> by me | All rights reserved
				</Typography>
			</footer>
		</div>
	);
}

export default HomePage;

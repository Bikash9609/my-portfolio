import React from "react";

import {
	Typography,
	Container,
	Button,
	Grid,
	TextField,
} from "@material-ui/core";
import { BiPhoneCall } from "react-icons/bi";

import TopBar from "../../components/TopBar/TopBar";
import Hero from "../../components/Hero/Hero";
import DashedHeader from "../../components/DashedHeader/DashedHeader";
import SimpleImageBox from "../../components/SimpleImageCard/ImageCard";
import SimpleTextBox from "../../components/SimpleTextBox/TextBox";
import TestimonialCard from "../../components/TestimonialCard/Card";
import FileUpload from "../../components/FileUploader/FileUpload";
import Footer from "../../components/Footer/Footer";

//Images Import
//Partners
import PartnersLogo1 from "../../assets/nos-fournisseurs/partners/1280px-Logo_Legrand.svg.png";
import PartnersLogo2 from "../../assets/nos-fournisseurs/partners/NEXANS_Logo_RVB_Baseline300.png";
//section 2
import ProfitImage1 from "../../assets/section1/vehicle.png";
import ProfitImageHome from "../../assets/section1/categorie-electricit-basse-tension@2x.png";
import ProfitImageElectric from "../../assets/section1/categorie-electricit-mt@2x.png";
import ProfitImagePlomb from "../../assets/section1/categorie-plomberie@2x.png";
import ProfitImageChant from "../../assets/section1/categorie-chant-it@2x.png";
import ProfitImageRevent from "../../assets/section1/categorie-revetements@2x.png";
import ProfitImageBath from "../../assets/section1/categorie-robinneteries@2x.png";
import ProfitImageSolar from "../../assets/section1/categorie-batiment@2x.png";
import ProfitImageFan from "../../assets/section1/categorie-froid-et-quipements@2x.png";

//section 3
import SquareImageBox from "../../assets/section3/Icon/landing-icons-bot-2-copy.png";
import SquareImageTime from "../../assets/section3/Icon/landingtime.png";
import SquareImagePayment from "../../assets/section3/Icon/landing-icons-service-client-2-copy.png";
import SquareImage1 from "../../assets/section3/rectangle-copy-3_2.jpg";
import SquareImage2 from "../../assets/section3/IMG_8794.png";
import SquareImage3 from "../../assets/section3/rectangle.jpg";
import SquareImage4 from "../../assets/section3/rectangle-copy.png";

//section 4
import TestimonialAvatar1 from "../../assets/section4/A_MGFjZjlkZDY2YjhlM2JmOap5uPKUvIy5AD1QO0NJDREOQE24oNWClLlanNBpku_-IzgbNZqNUDEzhp1sepk6-7XD_HXeNwb_KTFDmeDAQlYD61eikDMMhFjoRcD9XxVZ.png";

import {
	PartnersWrapper,
	PartnersHeader,
	Image,
	Section2,
	Section3,
	Section4,
	Section5,
	CommonButton,
	SimpleBox,
} from "./layout-styled";

// partners section
const CustomPartnersImage = ({ src, alt }) => {
	return (
		<Grid item xs={12} sm={6} md={2}>
			<Image>
				<img src={src} alt={alt} />
			</Image>
		</Grid>
	);
};

// sections 2 = Nos DOMAINES
const CustomProfitsCard = ({
	cardImageSrc,
	cardImageAlt,
	cardBottomImageSrc,
	cardBottomImageAlt,
	cardText,
}) => {
	return (
		<>
			<Grid
				container
				direction="row"
				alignItems="center"
				justify="center"
				className={"profitCard"}
			>
				<Grid item xs={2} className={"profitImage"}>
					<div className={"parallelogram"}>
						<div>
							<img src={cardImageSrc} alt={cardImageAlt} />
						</div>
					</div>
				</Grid>
				<Grid item xs={10} className={"profitTextWrapper"}>
					<Typography variant="body1" align="left" className={"profitText"}>
						{cardText}
					</Typography>
				</Grid>
			</Grid>
			<div className={"profitsBottomImageWrapper"}>
				<img src={cardBottomImageSrc} alt={cardBottomImageAlt} />
			</div>
		</>
	);
};

function Layout() {
	return (
		<div>
			<TopBar
				text={
					"Appelez nous dès maintenant pour prévoir un rendez-vous + 99 999 999999"
				}
				icon={<BiPhoneCall />}
			/>
			<Hero
				headerText={`Vos matériaux différemment, vos constructions autrement`}
				headerSubtitleText={`Découvrez bientôt nos offres globales pour professionnels et particuliers`}
			/>

			<PartnersWrapper>
				<Container>
					<PartnersHeader>
						<Image>
							<img src={require("../../assets/nos-fournisseurs/Group 7.png")} />
						</Image>

						<div className={"partnersHeaderTagline"}>
							<div className={"headerBlock"}></div>
							<Typography
								variant="h2"
								align="center"
								className={"partnersHeaderText"}
							>
								Nos
								<br /> <strong>fournisseurs</strong>
							</Typography>
							<div className={"headerBlock"}></div>
						</div>
					</PartnersHeader>

					<Grid
						container
						direction="row"
						alignItems="center"
						justify="space-between"
					>
						<CustomPartnersImage src={PartnersLogo1} alt="Alt Text" />
						<CustomPartnersImage src={PartnersLogo2} alt="Alt Text" />
						<CustomPartnersImage src={PartnersLogo1} alt="Alt Text" />
						<CustomPartnersImage src={PartnersLogo2} alt="Alt Text" />
						<CustomPartnersImage src={PartnersLogo1} alt="Alt Text" />
					</Grid>
					<Typography variant="h6" className={"partnersFooterText"}>
						Et plus de 300 autres fournisseurs…
					</Typography>
				</Container>
			</PartnersWrapper>

			<Section2>
				<Container>
					<DashedHeader text="Nos" highlightedText="Domaines" />
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
						spacing={3}
					>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImageHome}
								cardImageAlt={"Alt"}
								cardText={"Électricité bassé tension"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImageElectric}
								cardImageAlt={"Alt"}
								cardText={"Électricité MT / MH"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImagePlomb}
								cardImageAlt={"Alt"}
								cardText={"Plomberie et assainissements"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImageChant}
								cardImageAlt={"Alt"}
								cardText={"Étancheité et chimie du bâtiment"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImageRevent}
								cardImageAlt={"Alt"}
								cardText={"Revétements sol et mur"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImageBath}
								cardImageAlt={"Alt"}
								cardText={"Robinetterie et salles de bain"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImageFan}
								cardImageAlt={"Alt"}
								cardText={"Froid et équipements"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<CustomProfitsCard
								cardImageSrc={ProfitImageSolar}
								cardImageAlt={"Alt"}
								cardText={"Nouvelles techniques du bâtiment"}
								cardBottomImageSrc={ProfitImage1}
								cardBottomImageAlt={"Alt for bottom image"}
							/>
						</Grid>
					</Grid>
					<Grid container direction="row" justify="center" alignItems="center">
						<CommonButton variant="contained">Demander un devis</CommonButton>
					</Grid>
				</Container>
			</Section2>

			<Section3>
				<Container>
					<DashedHeader text="Pourquoi" highlightedText="BTPMAT ?" />
					<Grid
						container
						direction="row"
						alignItems="center"
						justify="center"
						className={"boxWrapper"}
						spacing={3}
					>
						<Grid item>
							<SimpleBox>
								<img
									src={SquareImageBox}
									alt="Box"
									className={"absoluteImage"}
								/>
								<Typography variant="body1" className={"simpleBoxText"}>
									Des milliers de produits directement en ligne
								</Typography>
							</SimpleBox>
						</Grid>
						<Grid item>
							<SimpleImageBox image={SquareImage1} />
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						alignItems="center"
						justify="center"
						spacing={3}
					>
						<Grid item>
							<SimpleImageBox image={SquareImage2} />
						</Grid>
						<Grid item>
							<SimpleTextBox text="Livraisonen 24H" image={SquareImageTime} />
						</Grid>
						<Grid item>
							<SimpleImageBox image={SquareImage3} />
						</Grid>
					</Grid>
					<Grid
						container
						direction="row"
						alignItems="center"
						justify="center"
						spacing={3}
					>
						<Grid item>
							<SimpleImageBox image={SquareImage4} />
						</Grid>
						<Grid item>
							<SimpleTextBox
								text="Paiement sécurisé"
								image={SquareImagePayment}
							/>
						</Grid>
					</Grid>
					<Grid container direction="row" justify="center" alignItems="center">
						<CommonButton variant="contained" style={{ marginTop: "98px" }}>
							Demander un devis
						</CommonButton>
					</Grid>
				</Container>
			</Section3>

			<Section4>
				<Container>
					<DashedHeader text="Avis de nos" highlightedText="clients" />
					<Grid
						container
						direction="row"
						spacing={3}
						justify="center"
						alignItems="center"
						className={"TestimonialCardsWrapper"}
					>
						<Grid item xs={12} sm={6} md={4}>
							<TestimonialCard />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<TestimonialCard />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<TestimonialCard />
						</Grid>
					</Grid>
					<Grid container direction="row" justify="center" alignItems="center">
						<CommonButton variant="contained">Demander un devis</CommonButton>
					</Grid>
				</Container>
			</Section4>

			<Section5>
				<Container>
					<PartnersHeader>
						<Image>
							<img src={require("../../assets/nos-fournisseurs/Group 7.png")} />
						</Image>

						<div className={"partnersHeaderTagline"}>
							<div className={"headerBlock"}></div>
							<Typography
								variant="h2"
								align="center"
								className={"partnersHeaderText"}
							>
								Demandez
								<br /> <strong>un devis</strong>
							</Typography>
							<div className={"headerBlock"}></div>
						</div>
					</PartnersHeader>
					<div className={"formWrapper"}>
						<form>
							<Grid container direction="row" spacing={3}>
								<Grid item xs={6} md={6}>
									<TextField
										required
										variant="standard"
										label="Nom"
										placeholder="Do"
										InputLabelProps={{
											shrink: true,
										}}
										className={"inputField"}
									/>
								</Grid>
								<Grid item xs={6} md={6}>
									<TextField
										required
										label="Prénom"
										placeholder="Franck"
										InputLabelProps={{
											shrink: true,
										}}
										className={"inputField"}
									/>
								</Grid>
								<Grid item xs={12} md={12}>
									<TextField
										required
										label="Numéro et adresse postale"
										placeholder="Adresse"
										InputLabelProps={{
											shrink: true,
										}}
										className={"inputField"}
									/>
								</Grid>
								<Grid item xs={12} md={12}>
									<TextField
										required
										label="Numéro et adresse postale"
										placeholder="01 01 01 01 01"
										InputLabelProps={{
											shrink: true,
										}}
										className={"inputField"}
									/>
								</Grid>
								<Grid item xs={12} md={12}>
									<TextField
										required
										placeholder="Communiquez-nous un maximum d’informations afin d’être le plus précis possible dans notre estimation."
										InputLabelProps={{
											shrink: true,
										}}
										label="Numéro et adresse postale"
										className={"inputField"}
									/>
								</Grid>
								<Grid item xs={12} md={12}>
									<FileUpload />
								</Grid>
							</Grid>
							<Grid
								container
								direction="row"
								justify="center"
								alignItems="center"
							>
								<CommonButton variant="contained">
									Demander un devis
								</CommonButton>
							</Grid>
						</form>
					</div>
				</Container>
			</Section5>

			<Footer />
		</div>
	);
}

export default Layout;

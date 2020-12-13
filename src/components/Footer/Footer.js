import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import CompanyLogo from "../../assets/Hero/group-60.png";
import MasterCardImage from "../../assets/Footer/mastercard-png.png";
import VisaEleCardImage from "../../assets/Footer/visa-electron-png.png";
import VisaCardImage from "../../assets/Footer/visa-png.png";
import AmericanExpCardImage from "../../assets/Footer/american-express-png.png";

import { Footer, Widget, CardImages } from "./Footer-styled";

function FooterComp() {
	return (
		<Footer>
			<Container>
				<Grid container direction="row" spacing={3}>
					<Grid item xs={12} md={6}>
						<Grid container direction="row">
							<Grid xs={12} md={12}>
								<img src={CompanyLogo} alt={"Logo"} className={"brandLogo"} />
							</Grid>
							<Grid item xs={6} md={6}>
								<Widget>
									<Typography variant="h5" className={"widgetTitle"}>
										Nos locaux
									</Typography>
									<Typography variant="body2" className={"widgetContent"}>
										COCODY Angré 8ème Tranche
									</Typography>
								</Widget>
								<Widget>
									<Typography variant="h5" className={"widgetTitle"}>
										Appelez-nous !
									</Typography>
									<Typography variant="body2" className={"widgetContent"}>
										+ 225 69 22 22 22
									</Typography>
								</Widget>
							</Grid>
							<Grid item xs={6} md={6}>
								<Widget>
									<Typography variant="h5" className={"widgetTitle"}>
										Moyens de paiement
									</Typography>
									<CardImages>
										<div item xs={3} md={3}>
											<img src={MasterCardImage} alt="Card" />
										</div>
										<div item xs={3} md={3}>
											<img src={VisaEleCardImage} alt="Card" />
										</div>
										<div item xs={3} md={3}>
											<img src={VisaCardImage} alt="Card" />
										</div>
										<div item xs={3} md={3}>
											<img src={AmericanExpCardImage} alt="Card" />
										</div>
									</CardImages>
									<Typography variant="body2" className={"widgetContent"}>
										Chèques et virements.
									</Typography>
								</Widget>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6} md={6}></Grid>
				</Grid>
			</Container>
		</Footer>
	);
}

export default FooterComp;

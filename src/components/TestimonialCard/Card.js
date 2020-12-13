import React from "react";
import { Card, Avatar, Typography } from "@material-ui/core";

import PartnersLogo2 from "../../assets/nos-fournisseurs/partners/NEXANS_Logo_RVB_Baseline300.png";
import TestimonialAvatar1 from "../../assets/section4/A_MGFjZjlkZDY2YjhlM2JmOap5uPKUvIy5AD1QO0NJDREOQE24oNWClLlanNBpku_-IzgbNZqNUDEzhp1sepk6-7XD_HXeNwb_KTFDmeDAQlYD61eikDMMhFjoRcD9XxVZ.png";

import { TestimonialCard } from "./Card-styled";

function TestimonailCardComp({ avatarImage, brandImage, title, description }) {
	return (
		<TestimonialCard>
			<Avatar src={avatarImage} alt="Avatar" className={"Avatar"} />
			<Avatar
				src={brandImage}
				alt="Avatar"
				variant="square"
				className={"brandImage"}
			/>
			<Typography varaint="body1" align="center" className={"title"}>
				{title}
			</Typography>
			<Typography varaint="body2" align="center" className={"description"}>
				{description}
			</Typography>
		</TestimonialCard>
	);
}

TestimonailCardComp.defaultProps = {
	avatarImage: TestimonialAvatar1,
	brandImage: PartnersLogo2,
	title: "Ahmad Chour, CEO",
	description:
		"Alii autem, quibus ego cum soluta nobis est primum igitur, quid bonumsit sentiri haec ratio late patet in oculis quidem exercitus quid ex eoest primum igitur, inquit, modo dixi, constituto, ut ratione et ultimumbonorum, quod omnium.",
};

export default TestimonailCardComp;

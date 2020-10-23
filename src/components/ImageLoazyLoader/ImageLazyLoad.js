import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Spinner from "../Spinner/Spinner";

const MyImage = ({ image, width, height, src, alt }) => (
	<LazyLoadImage
		alt={alt}
		height={height}
		src={src} // use normal <img> attributes as props
		width={width}
		placeholder={<Spinner />}
		effect={"blur"}
	/>
);

export default MyImage;

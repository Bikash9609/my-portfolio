import React, { useState } from "react";

import { Button } from "@material-ui/core";
import Files from "react-butterfiles";

import UploadCloudIcon from "../../assets/section5/A_MGFjZjlkZDY2YjhlM2JmOUk03d3u7X2dn2jOsQMqcJM6myBBgEWFi_cmn4o0qR0R8pp4dpZK3AfOlsEvCDmDh00JPBl4Ay_pdMpeIlplYN6E_nklBcTzj-kJ4q0bsALO.png";

import { FileuploadWrapper } from "./Fileuploader-styled";

function FileUpload() {
	const [files, setFiles] = useState(null);
	const [errors, setErrors] = useState(null);

	const [pageQuality, setPageQuality] = useState(
		"High quality large file size"
	);
	const [pageRange, setPageRange] = useState("all-pages");

	const setPageRangeHandler = (event) => {
		setPageRange(event.target.value);
	};

	const pageQualityChangeHandler = (event) => {
		setPageQuality(event.target.value);
	};

	const fileName = files && files[0].name;
	return (
		<FileuploadWrapper>
			<Files
				multiple={false}
				maxSize="2mb"
				multipleMaxCount={1}
				accept={["application/pdf", "image/jpg", "image/jpeg"]}
				onSuccess={(files) => setFiles(files)}
				onError={(errors) => setErrors(errors)}
			>
				{({ browseFiles, getDropZoneProps, getLabelProps }) => (
					<>
						<label {...getLabelProps()} className={"uploadHeader"}>
							Envoyez-nous des éléments comme des photos
						</label>
						<div
							{...getDropZoneProps({ className: "myDropZone" })}
							onClick={browseFiles}
						>
							<p>
								<img src={UploadCloudIcon} alt="UploadCloudIcon" />
								<br />
								<span style={{ fontSize: "12px" }}>
									Sélectionner un/des fichiers
								</span>
								<br />
								<span style={{ margin: "10px 0", fontSize: "10px" }}>
									Ou bien
								</span>
								<br />
								<Button variant="outlined" className={"fileUploadButton"}>
									Parcourez vos fichiers
								</Button>
							</p>
						</div>

						<ol>
							{errors &&
								errors.map((error) => (
									<li key={error.file.name}>
										{error.file.name} - {error.type}
									</li>
								))}
						</ol>
					</>
				)}
			</Files>
		</FileuploadWrapper>
	);
}

export default FileUpload;

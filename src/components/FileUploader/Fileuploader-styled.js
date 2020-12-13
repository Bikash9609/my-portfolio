import styled from "styled-components";

export const FileuploadWrapper = styled.div`
	width: 100%;

	.uploadHeader {
		font-weight: 300;
		font-size: 12px;
		line-height: 55px;
		color: rgba(0, 0, 0, 0.54);
	}

	.myDropZone {
		border: 2px dashed #eee !important;
		min-height: 156px !important;
		padding-bottom: 20px;
		min-width: 100%;
		border-radius: 10px;
		max-width: 100%;
		min-height: 100px;
		-webkit-border-radius: ;
		-moz-border-radius: ;
		-ms-border-radius: ;
		-o-border-radius: ;
	}

	.myDropZone:active {
		background: #fff;
	}

	.myDropZone {
		p {
			margin: 0 auto;
			margin-top: 30px;
			font-size: 19px;
			text-align: center;
			color: #c1c8d4;
		}

		button {
			width: max-content;
			background: #fff !important;
			color: #e8592b !important;
			font-weight: bold !important;
			margin: 10px !important;
			padding: 5px 20px !important;
			border-radius: 7px !important;
			border: 1px solid#E8592B !important;
			-webkit-border-radius: 7px !important;
			-moz-border-radius: 7px !important;
			-ms-border-radius: 7px !important;
			-o-border-radius: 7px !important;
			text-transform: unset !important;
		}
	}

	.myDropZone .fileUploadWrapper input {
		text-align: left !important;
		margin: 10px 0;
		margin-right: 5px;
		border: 1px solid rgb(0, 0, 0, 0.4);
		background: #fff;
		border-radius: 7px;
		padding: 10px 10px;
		width: 60%;
		-webkit-border-radius: 7px;
		-moz-border-radius: 7px;
		-ms-border-radius: 7px;
		-o-border-radius: 7px;
	}
`;

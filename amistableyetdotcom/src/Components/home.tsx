import React, { FunctionComponent } from "react";
import {
	Typography,
	Box,
	Container,
	Grid,
	SxProps,
	Theme,
} from "@mui/material";
import { OS } from "../Classes/OS";
import { storage } from "../Functions/firebase";
import { ref, getDownloadURL } from "firebase/storage";

const boxStyle: SxProps<Theme> = {
	minHeight: 200,
	backgroundColor: "primary.light",
	padding: 2,
	borderRadius: 6,
};

type OSPreviewProps = {
	//OSToPrev: OS;
};

class OSPreviewComponent extends React.Component {
	private iconURL: string = "";
	constructor(OS: OS) {
		super(OS);
		let iconString: string = OS.getName() + OS.getCurrentVersion().getMajor();
		getDownloadURL(ref(storage, `${iconString}.png`)).then((url) => {
			this.iconURL = url;
		});
	}

	render() {
		return (
			<div>
				Test
				<br />
				<img src={this.iconURL} alt="Lithuanian flag" />
				<br />
			</div>
		);
	}
}

export const Home: FunctionComponent = () => {
	let iconURL;
	getDownloadURL(ref(storage, `ios-16-num-96x96_2x.png`)).then((url) => {
		iconURL = url;
	});
	let page = (
		<Grid container spacing={2} padding={5}>
			<Grid item xs={8}>
				<Box sx={boxStyle}>
					<OSPreviewComponent />
				</Box>
			</Grid>
			<Grid item xs={4}>
				<img src={iconURL} alt="iOS 16" />
			</Grid>
			<Grid item xs={4}>
				<Box sx={boxStyle}>xs=4</Box>
			</Grid>
			<Grid item xs={8}>
				<Box sx={boxStyle}>xs=8</Box>
			</Grid>
		</Grid>
	);
	return page;
};

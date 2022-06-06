// Created By Judah Fuller Monday the 6th of June 2022
// Default React Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// React Router Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MUI Libraries
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

// Pages
import App from "./App";
import { pages } from "./Interface";

// Modify MUI button settings
declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		dashed: true; // Allow dashed button variant
	}
}

// Create an MUI theme
const theme = createTheme({
	palette: {
		primary: {
			// Primary Colours
			main: "#1565c0",
			light: "#306EFF",
			dark: "#003c8f",
			contrastText: "#fff",
		},
		secondary: {
			// Secondary Colours
			main: "#4a148c",
			light: "#7c43bd",
			dark: "#12005e",
			contrastText: "#fff",
		},
		info: {
			// Info Colours
			main: "#fff",
		},
	},
	components: {
		MuiButton: {
			// Modify MUI button
			variants: [
				{
					// Create dashed button variant
					props: { variant: "dashed" },
					style: {
						textTransform: "none",
						border: `2px dashed`,
					},
				},
				{
					props: { variant: "dashed", color: "secondary" },
					style: {
						border: `4px dashed`,
					},
				},
			],
		},
	},
	typography: {
		// Change text settings
		fontFamily: [
			// Change Fonts
			"Ubuntu Mono",
			"Roboto Mono",
			"Roboto",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		h6: {
			fontSize: "1.2rem",
		},
		body2: {
			fontSize: "2rem",
		},
	},
});

// Define avaliable pages
const Pages: pages = {
	labels: ["App"],
	pageNum: [0],
	element: [<App />],
};

// Render The Site
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Box
					sx={{
						backgroundColor: "secondary.dark",
						display: "flex",
						flexDirection: "column",
						alignItems: "top",
						justifyContent: "space-between",
						color: "secondary.contrastText",
					}}
				>
					<Box
						sx={{
							backgroundColor: "secondary.dark",
							display: "flex",
							flexDirection: "column",
							flexWrap: "wrap",
							minHeight: "93vh",
							justifyContent: "space-between",
							color: "secondary.contrastText",
						}}
					>
						<Routes>
							<Route index element={Pages.element[0]} />
							{Pages.pageNum.map((num) => (
								<Route
									path={Pages.labels[num].toLowerCase()}
									element={Pages.element[num]}
								/>
							))}
						</Routes>
					</Box>
				</Box>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

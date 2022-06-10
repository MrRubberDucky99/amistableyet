import React from "react";
import { createTheme } from "@mui/material/styles";

// Modify MUI button settings
declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		dashed: true; // Allow dashed button variant
	}
}

// Create an MUI theme
export const theme = createTheme({
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

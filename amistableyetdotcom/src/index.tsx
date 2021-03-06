// Created By Judah Fuller Monday the 6th of June 2022
// Website Index
// V0.0.1
// Default React Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// React Router Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MUI Libraries
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

// Interface/Classes
import { pages } from "./Interface";

// Theme
import { theme, darkTheme } from "./theme";

import { ResponsiveAppBar } from "./Components/TopNav";
import { Home } from "./Components/home";

// Define avaliable pages
const Pages: pages = {
	labels: ["Home"],
	pageNum: [0],
	element: [<Home />],
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
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
					<ResponsiveAppBar pageLabels={Pages.labels} currentPage={0} />
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

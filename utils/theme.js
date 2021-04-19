import { extendTheme } from "@chakra-ui/react";

const colors = {
	primary: {
		0: "#50242B",
	},
	spicy: {
		0: "#F89999",
	},
	gluttenFree: {
		0: "#98D177",
	},
	background: {
		0: "rgba(255, 255, 255, 0.9)",
	},
};

const textStyles = {
	body: {
		fontSize: "18px",
		fontWeight: 400,
		color: "#505050",
	},

	body2: {
		fontSize: "17px",
		fontWeight: 400,
		color: "#848484",
	},

	body22: {
		fontSize: "17px",
		fontWeight: 400,
		color: "#505050",
	},

	body3: {
		fontSize: "14px",
		color: "#505050",
		fontWeight: 400,
	},
	tag: {
		fontSize: "12px",
		fontWeight: 600,
		textTransform: "uppercase",
		color: "white",
	},
	inputLabel: {
		fontSize: "14px",
		fontWeight: 600,
		textTransform: "uppercase",
		color: "rgba(255, 255, 255, 0.80)",
	},
	menuGroupLabel: {
		fontSize: "30px",
		fontWeight: 700,
		color: "#50242B",
		textTransform: "capitalize",
	},
};

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const theme = extendTheme({ colors, config, textStyles });
export default theme;

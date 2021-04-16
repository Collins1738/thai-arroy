import { extendTheme } from "@chakra-ui/react";

const colors = {
	primary: {
		0: "#50242B",
	},
};

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });
export default theme;

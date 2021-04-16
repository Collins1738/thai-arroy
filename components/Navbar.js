import { Box, Circle, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

function ActiveBar() {
	return <Box w="46px" h="2px" bg="white" />;
}
export default function Navbar() {
	const textStyles = {
		color: "white",
		fontSize: "17px",
		fontWeight: 500,
	};
	const router = useRouter();
	const currentPath = router.asPath;
	return (
		<Flex h="74px" w="100%" bg="primary.0" alignItems="center">
			<Circle bg="white" w="90px" h="50px">
				<Text>Logo</Text>
			</Circle>
			<Spacer />
			<Flex w="525px" justifyContent="space-around">
				<Link href="/">
					<a>
						<Text {...textStyles}>Home</Text>
						{currentPath === "/" && <ActiveBar />}
					</a>
				</Link>

				<Link href="/menu">
					<a>
						<Text {...textStyles}>Menu</Text>
						{currentPath === "/menu" && <ActiveBar />}
					</a>
				</Link>

				<Text {...textStyles}>Contact</Text>
				<Text {...textStyles}>Reservation</Text>
			</Flex>
		</Flex>
	);
}

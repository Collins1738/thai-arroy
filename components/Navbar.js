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
		<Flex
			h="74px"
			w="100%"
			bg="primary.0"
			alignItems="center"
			pos="sticky"
			top="0px"
			zIndex="10"
		>
			<Circle bg="white" w="90px" h="50px">
				<Text>Logo</Text>
			</Circle>
			<Spacer />
			<Flex w="525px" justifyContent="space-around">
				<Link href="/">
					<a>
						<Flex flexDir="column" alignItems="center">
							<Text {...textStyles}>Home</Text>
							{currentPath === "/" && <ActiveBar />}
						</Flex>
					</a>
				</Link>
				<Link href="/menu">
					<a>
						<Flex flexDir="column" alignItems="center">
							<Text {...textStyles}>Menu</Text>
							{currentPath === "/menu" && <ActiveBar />}
						</Flex>
					</a>
				</Link>
				<Text {...textStyles}>Contact</Text>
				<Link href="/reservation">
					<a>
						<Flex flexDir="column" alignItems="center">
							<Text {...textStyles}>Reservation</Text>
							{currentPath === "/reservation" && <ActiveBar />}
						</Flex>
					</a>
				</Link>
			</Flex>
		</Flex>
	);
}

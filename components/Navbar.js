import { Box, Circle, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

function ActiveBar() {
	return <Box w="46px" h="2px" bg="white" />;
}
export default function Navbar() {
	const textStyles = {
		color: "white",
		fontSize: "16px",
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
			pl="30px"
		>
			<Image src="/logo.png" />
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
				<Link href="/?contact=true">
					<a>
						<Flex flexDir="column" alignItems="center">
							<Text {...textStyles}>Contact</Text>
							{currentPath === "/?contact=true" && <ActiveBar />}
						</Flex>
					</a>
				</Link>
				<Link href="/reservation">
					<a>
						<Flex flexDir="column" alignItems="center">
							<Text {...textStyles}>Reservation</Text>
							{currentPath === "/reservation" && <ActiveBar />}
						</Flex>
					</a>
				</Link>
				<Link href="https://www.doordash.com/store/pie-in-the-sky-baltimore-220241/">
					<a>
						<Flex flexDir="column" alignItems="center">
							<Text {...textStyles}>Order online</Text>
						</Flex>
					</a>
				</Link>
			</Flex>
		</Flex>
	);
}

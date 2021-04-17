import {
	Text,
	Box,
	Button,
	Image,
	Flex,
	Input,
	Textarea,
	Divider,
	HStack,
	Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { FaPhoneAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

export function SpicyTag() {
	return (
		<Flex bg="spicy.0" px="10px">
			<Text textStyle="tag">SPICY</Text>
		</Flex>
	);
}

export function GluttenFreeTag() {
	return (
		<Flex bg="gluttenFree.0" px="10px">
			<Text textStyle="tag">Glutten free</Text>
		</Flex>
	);
}
export default function Home() {
	const form = () => {
		const inputProps = {
			bg: "rgba(196, 196, 196, 0.1)",
			color: "white",
			borderColor: "rgba(196, 196, 196, 0.3)",
			w: "100%",
			borderRadius: "5px",
			mt: "5px",
		};
		const [loading, setLoading] = useState(false);
		const [name, setName] = useState("");
		const [email, setEmail] = useState("");
		const [message, setMessage] = useState("");

		return (
			<Box w="100%" maxW="575px">
				<Flex>
					<Box flex={1} mr="30px">
						<Text textStyle="inputLabel">Name</Text>
						<Input
							{...inputProps}
							h="51px"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Box>
					<Box flex={1}>
						<Text textStyle="inputLabel">Email</Text>
						<Input
							{...inputProps}
							h="51px"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Box>
				</Flex>
				<Box mt="20px">
					<Text textStyle="inputLabel">Message</Text>
					<Textarea
						{...inputProps}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Box>
				<Box mt="20px">
					<Button
						w="195px"
						h="51px"
						onClick={() => {
							setLoading(true);
							// send the message
							setTimeout(() => {
								setLoading(false);
								alert("Your message has been sent");
								setName("");
								setEmail("");
								setMessage("");
							}, 1000);
						}}
						isLoading={loading}
						fontSize="19px"
						fontWeight={500}
					>
						Send
					</Button>
				</Box>
			</Box>
		);
	};

	const section1 = () => {
		return (
			<Flex maxW="1300px" px="30px" m="auto" mt="100px">
				<Box>
					<Text fontSize="41px" fontWeight={700}>
						Welcome to Thai Arroy Baltimore!
					</Text>
					<Flex mt="15px">
						<Flex>
							<Icon
								as={ImLocation2}
								alignSelf="center"
								mr="10px"
								color="#848484"
							/>
							<Text textStyle="body2">
								1218 Baltimore st, Baltimore MD
							</Text>
						</Flex>
						<Flex ml="30px">
							<Icon
								as={FaPhoneAlt}
								alignSelf="center"
								mr="10px"
								color="#848484"
							/>
							<Text textStyle="body2">571-901-9891</Text>
						</Flex>
					</Flex>

					<Box mt="10px">
						<Text textStyle="body2" color="#178B15">
							Currently open
						</Text>
					</Box>

					<Text maxW="55ch" textStyle="body" mt="20px">
						Thai Arroy offers you a thai cuisine serving classic
						dishes and its insistence on only using high-quality
						fresh ingredients. We also offer a variety of vegetarian
						food.
					</Text>
					<Box mt="40px">
						<Button
							variant="solid"
							bg="primary.0"
							color="white"
							borderRadius="full"
							w="253px"
							h="59px"
							fontWeight={500}
							fontSize="18px"
							_hover={{
								bg: "#462026",
							}}
						>
							Order online
						</Button>
						<Button
							variant="outline"
							color="primary.0"
							borderColor="primary.0"
							borderRadius="full"
							w="253px"
							h="59px"
							ml="30px"
							border="2px"
							fontWeight={500}
							fontSize="18px"
						>
							Make reservation
						</Button>
					</Box>
				</Box>
				<Box display={["none", "block"]}>
					<Image
						src="/main2.png"
						objectFit="cover"
						w="553px"
						h="277px"
					/>
				</Box>
			</Flex>
		);
	};

	const section2 = () => {
		const [position, setPosition] = useState(0);
		return (
			<Box
				maxW="1300px"
				px="30px"
				m="auto"
				mt="100px"
				pt="50px"
				pb="80px"
			>
				<Flex justifyContent="space-between">
					<Text
						fontSize="22px"
						fontWeight={700}
						color="primary.0"
						textTransform="uppercase"
					>
						Featured items
					</Text>
					<Box>
						<Link href="/menu">
							<a>
								<Flex>
									<Text
										textStyle="body"
										color="primary.0"
										fontWeight={500}
									>
										View full menu
									</Text>
									<Icon
										as={BsChevronRight}
										color="primary.0"
										alignSelf="center"
										ml="5px"
									/>
								</Flex>
							</a>
						</Link>
					</Box>
				</Flex>
				<Flex overflowX="hidden" position="relative">
					<Flex
						mt="20px"
						transform={`translate3d(-${position}px, 0, 0)`}
						transition="500ms transform ease-in-out"
						overflowX={["scroll", "scroll", "visible"]}
						py="10px"
					>
						{[
							...featuredItems,
							...featuredItems,
							...featuredItems,
						].map((item) => {
							return (
								<Link href="/menu">
									<a>
										<Flex
											flexDir="column"
											minW="285px"
											w="285px"
											p="17px"
											mr="30px"
											bg="white"
											boxShadow="0px 4px 4px 0px rgba(0,0,0,0.25)"
											borderRadius="5px"
											_hover={{
												boxShadow:
													"0px 4px 10px 2px rgba(0,0,0,0.25)",
											}}
										>
											<Image
												src={item.image}
												w="285px"
												h="285px"
												objectFit="cover"
												borderRadius="10px"
											/>
											<Flex
												justifyContent="space-between"
												mt="17px"
											>
												<Text
													fontSize="17px"
													fontWeight={700}
												>
													{item.name}
												</Text>
												<Text
													textStyle="body"
													fontSize="17px"
												>
													${item.price}
												</Text>
											</Flex>
											<HStack spacing="3" mt="10px">
												{item.tags.includes(
													"spicy"
												) && <SpicyTag />}
												{item.tags.includes(
													"glutten-free"
												) && <GluttenFreeTag />}
											</HStack>
											<Text textStyle="body3" mt="10px">
												{item.description}
											</Text>
										</Flex>
									</a>
								</Link>
							);
						})}
					</Flex>
					{position > 0 && (
						<Button
							onClick={() => {
								setPosition(
									Math.max(0, position - window.innerWidth)
								);
							}}
							position="absolute"
							left="0px"
							my="auto"
							top="0px"
							bottom="0px"
							h="146px"
							w="43px"
							bg="rgba(0,0,0,0.24)"
							_hover={{
								color: "white",
							}}
							display={["none", "block"]}
						>
							<Icon as={FaChevronLeft} />
						</Button>
					)}
					{position < (285 + 30) * 8 && (
						<Button
							onClick={() => {
								setPosition(
									position +
										Math.min(
											window.innerWidth,
											(285 + 30) * 4
										)
								);
							}}
							position="absolute"
							right="0px"
							my="auto"
							top="0px"
							bottom="0px"
							h="146px"
							w="43px"
							bg="rgba(0,0,0,0.24)"
							_hover={{
								color: "white",
							}}
							display={["none", "block"]}
						>
							<Icon as={FaChevronRight} />
						</Button>
					)}
				</Flex>
			</Box>
		);
	};

	const section3 = () => {
		const fontStyles = {
			fontSize: "18px",
			color: "white",
			fontWeight: 400,
		};
		return (
			<Box pt="50px" pb="80px" px="30px" maxW="1300px" m="auto">
				<Text color="white" fontSize="25px" fontWeight={600}>
					Contact us
				</Text>
				<Flex h="400px" mt="20px">
					<Box flex={1} pt="40px">
						<Flex>
							<Icon
								as={FaPhoneAlt}
								alignSelf="center"
								mr="20px"
								color="white"
							/>
							<Text {...fontStyles}>571-989-8721</Text>
						</Flex>
						<Flex mt="30px">
							<Icon
								as={ImLocation2}
								alignSelf="center"
								mr="20px"
								color="white"
							/>
							<Text {...fontStyles}>
								1019 Light St. Baltimore, MD 21230
							</Text>
						</Flex>
					</Box>
					<Divider orientation="vertical" h="100%" mr="40px" />
					<Flex flex={1} pt="20px">
						{form()}
					</Flex>
				</Flex>
			</Box>
		);
	};

	return (
		<Box>
			{section1()}
			<Box bg="#F3FAFB">{section2()}</Box>
			<Box bg="primary.0">{section3()}</Box>
		</Box>
	);
}

const featuredItems = [
	{
		image: "/food1.jpg",
		name: "Ground Chicken Salad",
		tags: ["spicy", "glutten-free"],
		description:
			"Seasoned with chili pepper, onions, lime juice and thai spices.",
		price: "17",
	},
	{
		image: "/food2.jpg",
		name: "Gui Chai (Chive)",
		tags: ["glutten-free"],
		description:
			"Seasoned with chili pepper, onions, lime juice and thai spices.",
		price: "6.50",
	},
	{
		image: "/food3.jpeg",
		name: "Crab Rangoon",
		tags: ["spicy"],
		description:
			"Seasoned with chili pepper, onions, lime juice and thai spices.",
		price: "12",
	},
	{
		image: "/food1.jpg",
		name: "Mixture of greens",
		tags: ["spicy", "glutten-free"],
		description:
			"Seasoned with chili pepper, onions, lime juice and thai spices.",
		price: "28",
	},
];

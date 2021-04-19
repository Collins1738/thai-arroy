import { Text, Box, Flex, SimpleGrid, HStack, Image } from "@chakra-ui/react";
import { SpicyTag, GluttenFreeTag } from "./index";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

function MenuNav() {
	const [activeId, setActiveId] = useState(null);
	function handleSetActive(id) {
		setActiveId(id);
	}
	const activeProps = {
		fontWeight: 700,
		color: "primary.0",
	};
	return (
		<Flex
			pos="sticky"
			top="74"
			bg="background.0"
			h="60px"
			borderBottom="1px solid"
			borderColor="primary.0"
			justifyContent="space-around"
			alignItems="center"
		>
			{menu.map((itemGroup) => {
				return (
					<ScrollLink
						to={itemGroup.id}
						smooth={true}
						offset={-74 - 60}
						fontWeight={500}
						onSetActive={handleSetActive}
						spy={true}
					>
						<Text
							textTransform="capitalize"
							fontSize="20px"
							cursor="pointer"
						>
							{activeId === itemGroup.id ? (
								<Text {...activeProps}>{itemGroup.name}</Text>
							) : (
								<Text>{itemGroup.name}</Text>
							)}
						</Text>
					</ScrollLink>
				);
			})}
		</Flex>
	);
}
export default function MenuPage() {
	const itemGroupComponent = ({ id, name, description, items }) => {
		return (
			<Box id={id} py="50px">
				<Text textStyle="menuGroupLabel">{name}</Text>
				<Text>{description}</Text>
				<SimpleGrid
					columns={3}
					spacing="40px"
					minChildWidth="350px"
					mt="40px"
				>
					{[...items, ...items, ...items, ...items, ...items].map(
						({
							name,
							price,
							tags,
							description,
							image,
							proteins,
						}) => {
							return (
								<Box>
									<Flex
										flexDir="column"
										minW="285px"
										w="350px"
										p="17px"
										mr="30px"
										bg="white"
										borderRadius="5px"
									>
										<Image
											src={image}
											w="350px"
											h="250px"
											objectFit="cover"
											borderRadius="10px"
										/>
										<Flex
											justifyContent="space-between"
											mt="17px"
										>
											<Text
												fontSize="19px"
												fontWeight={700}
											>
												{name}
											</Text>
											<Text
												textStyle="body"
												fontSize="17px"
											>
												${price}
											</Text>
										</Flex>
										<HStack spacing="3" mt="20px">
											{tags.includes("spicy") && (
												<SpicyTag />
											)}
											{tags.includes("glutten-free") && (
												<GluttenFreeTag />
											)}
										</HStack>
										<Text textStyle="body22" mt="20px">
											{description}
										</Text>
										{proteins && (
											<Box mt="20px">
												<Text textStyle="body22">
													Choice of protein
												</Text>
												<Box mt="10px">
													{proteins.map(
														({ name, price }) => (
															<Flex
																justifyContent="space-between"
																mt="5px"
															>
																<Text
																	textStyle="body22"
																	textTransform="capitalize"
																>
																	{name}
																</Text>
																<Text textStyle="body22">
																	${price}
																</Text>
															</Flex>
														)
													)}
												</Box>
											</Box>
										)}
									</Flex>
								</Box>
							);
						}
					)}
				</SimpleGrid>
			</Box>
		);
	};
	return (
		<Box pos="relative" maxW="1500px" m="auto" px="20px">
			<MenuNav />
			{menu.map((itemGroup) => {
				return <Box>{itemGroupComponent(itemGroup)}</Box>;
			})}
		</Box>
	);
}

const menu = [
	{
		name: "starters",
		id: "starters",
		description:
			"Authentic thai appetizers to get you started with our delicious food",
		items: [
			{
				name: "Fresh Spring Rolls",
				price: "17",
				tags: ["spicy", "glutten-free"],
				description:
					"Soft wrappers with lettuce, egg, cucumbers, cilantro, basil. Served with Thai sweet and spicy sauce.",
				image: "/food1.jpg",
			},
		],
	},
	{
		name: "entree",
		id: "entree",
		description:
			"Authentic thai appetizers to get you started with our delicious food",
		items: [
			{
				name: "Fresh Spring Rolls",
				price: "6-10",
				tags: ["spicy", "glutten-free"],
				description:
					"Soft wrappers with lettuce, egg, cucumbers, cilantro, basil. Served with Thai sweet and spicy sauce.",
				image: "/food1.jpg",
				proteins: [
					{ name: "Tofu", price: "6" },
					{ name: "chicken", price: "7" },
					{ name: "veggie", price: "7" },
					{ name: "Shrimp", price: "9" },
					{ name: "Seafood", price: "10" },
				],
			},
		],
	},
	{
		name: "soups",
		id: "soup",
		description:
			"Authentic thai appetizers to get you started with our delicious food",
		items: [
			{
				name: "Fresh Spring Rolls",
				price: "6-10",
				tags: ["spicy", "glutten-free"],
				description:
					"Soft wrappers with lettuce, egg, cucumbers, cilantro, basil. Served with Thai sweet and spicy sauce.",
				image: "/food1.jpg",
				proteins: [
					{ name: "Tofu", price: "6" },
					{ name: "chicken", price: "7" },
					{ name: "veggie", price: "7" },
					{ name: "Shrimp", price: "9" },
					{ name: "Seafood", price: "10" },
				],
			},
		],
	},
	{
		name: "desserts",
		id: "desserts",
		description:
			"Authentic thai appetizers to get you started with our delicious food",
		items: [
			{
				name: "Fresh Spring Rolls",
				price: "6-10",
				tags: ["spicy", "glutten-free"],
				description:
					"Soft wrappers with lettuce, egg, cucumbers, cilantro, basil. Served with Thai sweet and spicy sauce.",
				image: "/food1.jpg",
				proteins: [
					{ name: "Tofu", price: "6" },
					{ name: "chicken", price: "7" },
					{ name: "veggie", price: "7" },
					{ name: "Shrimp", price: "9" },
					{ name: "Seafood", price: "10" },
				],
			},
		],
	},
	{
		name: "drinks",
		id: "drinks",
		description:
			"Authentic thai appetizers to get you started with our delicious food",
		items: [
			{
				name: "Fresh Spring Rolls",
				price: "6-10",
				tags: ["spicy", "glutten-free"],
				description:
					"Soft wrappers with lettuce, egg, cucumbers, cilantro, basil. Served with Thai sweet and spicy sauce.",
				image: "/food1.jpg",
				proteins: [
					{ name: "Tofu", price: "6" },
					{ name: "chicken", price: "7" },
					{ name: "veggie", price: "7" },
					{ name: "Shrimp", price: "9" },
					{ name: "Seafood", price: "10" },
				],
			},
		],
	},
];

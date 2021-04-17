import {
	Text,
	Box,
	Flex,
	Divider,
	SimpleGrid,
	HStack,
	Image,
} from "@chakra-ui/react";
import { SpicyTag, GluttenFreeTag } from "./index";

function MenuNav() {
	return (
		<Box>
			<Flex>
				<Text>Starters</Text>
				<Text>Entree</Text>
				<Text>Soups</Text>
				<Text>Desserts</Text>
				<Text>Drinks</Text>
			</Flex>
			<Divider borderColor="primary.0" />
		</Box>
	);
}
export default function Menu() {
	const starters = () => {
		return (
			<Box>
				<Text>Starters</Text>
				<Text>{menu.starters.description}</Text>
				<SimpleGrid columns={3} spacing="40px" minChildWidth="285px">
					{[
						...menu.starters.items,
						...menu.starters.items,
						...menu.starters.items,
						...menu.starters.items,
						...menu.starters.items,
					].map((item) => {
						return (
							<Box>
								<Flex
									flexDir="column"
									minW="285px"
									w="285px"
									p="17px"
									mr="30px"
									bg="white"
									borderRadius="5px"
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
										<Text fontSize="17px" fontWeight={700}>
											{item.name}
										</Text>
										<Text textStyle="body" fontSize="17px">
											${item.price}
										</Text>
									</Flex>
									<HStack spacing="3" mt="10px">
										{item.tags.includes("spicy") && (
											<SpicyTag />
										)}
										{item.tags.includes("glutten-free") && (
											<GluttenFreeTag />
										)}
									</HStack>
									<Text textStyle="body3" mt="10px">
										{item.description}
									</Text>
								</Flex>
							</Box>
						);
					})}
				</SimpleGrid>
			</Box>
		);
	};
	return (
		<Box>
			<MenuNav />
			{starters()}
			{/* {soups()} */}
		</Box>
	);
}

const menu = {
	starters: {
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
};

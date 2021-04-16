import { Text, Box, Button } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box>
			<Text fontSize="40px" fontWeight={700}>
				Welcome to Thai Arroy Baltimore!
			</Text>

			<Text>1218 Baltimore st, Baltimore MD</Text>
			<Text>571-901-9891</Text>
			<Text color="green.500">Currently open</Text>

			<Text>
				Thai Arroy offers you a thai cuisine serving classic dishes and
				its insistence on only using high-quality fresh ingredients. We
				also offer a variety of vegetarian food.
			</Text>
			<Button
				variant="solid"
				bg="primary.0"
				color="white"
				borderRadius="full"
			>
				Order online
			</Button>
			<Button
				variant="outline"
				color="primary.0"
				borderColor="primary.0"
				borderRadius="full"
			>
				Make reservation
			</Button>
		</Box>
	);
}

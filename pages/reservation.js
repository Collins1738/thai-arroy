import {
	Box,
	Text,
	Image,
	Flex,
	Input,
	Button,
	Accordion,
	AccordionItem,
	AccordionIcon,
	AccordionButton,
	AccordionPanel,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ReservationPage() {
	const [step, setStep] = useState(1);
	const [dateTime, setDateTime] = useState(
		new Date().toISOString().split("T")[0] + "T22:30"
	); //"2021-12-12T22:30")
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [people, setPeople] = useState(2);

	const inputProps = {
		w: "320px",
		h: "51px",
		mt: "5px",
		fontSize: "17px",
	};

	const inputLabelProps = {
		color: "#505050",
		fontSize: "14px",
		textTransform: "uppercase",
		fontWeight: 500,
	};

	const header = () => {
		return (
			<Box>
				<Flex pos="relative">
					<Image
						src="/people-in-restaurant.jpg"
						filter="saturate(0%)"
						w="695px"
						h="300px"
						objectFit="cover"
						borderRadius="5px"
					/>
					<Box
						w="695px"
						h="300px"
						bg="primary.0"
						opacity={0.75}
						pos="absolute"
						zIndex={1}
						borderRadius="5px"
					/>
					<Text
						fontSize="42px"
						fontWeight={700}
						pos="absolute"
						zIndex={2}
						color="white"
						bottom="30px"
						left="30px"
					>
						Make a reservation
					</Text>
				</Flex>
			</Box>
		);
	};

	const operationHours = () => {
		return (
			<Box mt="30px">
				<Accordion allowToggle>
					<AccordionItem>
						<AccordionButton
							display="flex"
							justifyContent="space-between"
						>
							<Text fontSize="18px" fontWeight={400}>
								View operation hours
							</Text>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel>
							<Box w="100%" mt="20px">
								{operationHoursList.map(
									({ day, hours }, index) => {
										return (
											<Flex
												bg={
													index % 2 === 0
														? "#F8F8F8"
														: "#FFFFFF"
												}
												h="47px"
												alignItems="center"
												px="10px"
											>
												<Text
													flex={1}
													fontWeight={400}
													textStyle="body22"
												>
													{day}
												</Text>
												<Text
													flex={1}
													textStyle="body22"
													fontWeight={400}
												>
													{hours}
												</Text>
											</Flex>
										);
									}
								)}
							</Box>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		);
	};

	const step1 = () => {
		return (
			<Box mt="60px">
				<Text color="primary.0" fontSize="20px" fontWeight={500}>
					Booking information
				</Text>
				<Flex justifyContent="space-between" mt="25px">
					<Box>
						<Text {...inputLabelProps}>Date and Time</Text>
						<Input
							{...inputProps}
							type="datetime-local"
							value={dateTime}
							onChange={(e) => setDateTime(e.target.value)}
						/>
					</Box>
					<Box>
						<Text {...inputLabelProps}>Number of people</Text>
						<Input
							{...inputProps}
							value={people}
							type="number"
							onChange={(e) => setPeople(e.target.value)}
						/>
					</Box>
				</Flex>
				{step === 1 && (
					<Button
						onClick={() => setStep(2)}
						mt="30px"
						variant="solid"
						bg="primary.0"
						color="white"
						borderRadius="full"
						w="253px"
						h="51px"
						fontWeight={500}
						fontSize="18px"
						_hover={{
							bg: "#462026",
						}}
					>
						Continue
					</Button>
				)}
			</Box>
		);
	};

	const step2 = () => {
		return (
			<Box>
				{step >= 2 && (
					<Box mt="50px">
						<Text
							color="primary.0"
							fontSize="20px"
							fontWeight={500}
						>
							Contact information
						</Text>
						<Flex justifyContent="space-between" mt="25px">
							<Box>
								<Text {...inputLabelProps}>Name</Text>
								<Input
									{...inputProps}
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Box>
							<Box>
								<Text {...inputLabelProps}>Phone number</Text>
								<Input
									{...inputProps}
									value={phoneNumber}
									onChange={(e) =>
										setPhoneNumber(e.target.value)
									}
									type="tel"
								/>
							</Box>
						</Flex>
						<Box mt="20px">
							<Text {...inputLabelProps}>Email address</Text>
							<Input
								{...inputProps}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Box>
						{step === 2 && (
							<Button
								onClick={() => setStep(2)}
								isLoading={loading}
								mt="30px"
								variant="solid"
								bg="primary.0"
								color="white"
								borderRadius="full"
								w="253px"
								h="51px"
								fontWeight={500}
								fontSize="18px"
								_hover={{
									bg: "#462026",
								}}
								onClick={() => {
									setLoading(true);
									setTimeout(() => {
										setLoading(false);
										alert(
											"Your reservation has been booked"
										);
										setStep(1);
										setName("");
										setEmail("");
										setPhoneNumber("");
										setPeople(2);
									}, 1000);
								}}
							>
								Book now
							</Button>
						)}
					</Box>
				)}
			</Box>
		);
	};
	return (
		<Box maxW="695px" m="auto" pt="40px" pb="200px">
			{header()}
			{operationHours()}
			{step1()}
			{step2()}
		</Box>
	);
}

export const operationHoursList = [
	{ day: "Monday", hours: "Closed" },
	{
		day: "Tuesday, Wednesday, Thursday",
		hours: "11:30am - 3:00pm, 5:00pm - 9:00pm",
	},
	{
		day: "Friday",
		hours: "11:30am - 3:00pm, 5:00pm - 10:00pm",
	},
	{
		day: "Saturday",
		hours: "11:30am - 10:00pm",
	},
	{ day: "Sunday", hours: "4:00pm - 9:00pm" },
];

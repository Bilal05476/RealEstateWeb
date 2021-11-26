import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text paddingTop="3" paddingBottom="3" fontSize="lg" color="gray.700">
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner
        purpose="Rent a Home"
        title1="Rental homes for"
        title2="Everyone"
        desc1="Explore Apartment, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Banner
        purpose="Buy a Home"
        title1="Find, Buy & Own your"
        title2="Dream home"
        desc1="Explore Apartment, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
    </div>
  );
}

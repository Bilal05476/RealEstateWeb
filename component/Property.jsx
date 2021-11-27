import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import defaultImage from "../assets/house.jpg";

export const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    baths,
    title,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => (
  <Link href={`/property${externalId}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImage}
          width={400}
          height={260}
          alt="house"
        />
      </Box>
    </Flex>
  </Link>
);

import { useState } from "react";
import { useRouter } from "next/router";
// import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilter from "../component/SearchFilter";

const Search = () => {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilter((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
      </Flex>
      {searchFilter && <SearchFilter />}
    </Box>
  );
};
export default Search;

import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, filterGetValues } from "../utils/filterData";

const SearchFilter = () => {
  const [filter, setFilters] = useState(filterData);
  const searchProperties = (filterValues) => {};
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filter.map((fil) => (
        <Box key={fil.queryName}>
          <Select
            placeholder={fil.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              searchProperties({ [fil.queryName]: e.target.value })
            }
          >
            {fil?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilter;

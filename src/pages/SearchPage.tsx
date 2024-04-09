import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearch } from "../Context/SearchContext";

interface SearchResult {
  Title: string;
  Year: string;
  Runtime: string;
  Poster: string;
  Genre: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
}

function SearchPage() {
  const [searchValue, setSearchValue] = useState<SearchResult | null>(null);
  const { results } = useSearch();

  useEffect(() => {
    if (results) {
      setSearchValue(results);
    }
  }, [results]);

  return (
    <Card>
      <CardHeader>
        <Heading>{searchValue && searchValue.Title}</Heading>
        <HStack>
          <Text>{searchValue && searchValue.Year}</Text>
          {"."}
          <Text>{searchValue && searchValue.Runtime}</Text>
        </HStack>
      </CardHeader>
      <CardBody>
        {searchValue && (
          <>
            <img src={searchValue.Poster} alt={searchValue.Title} />
            <Text>{searchValue.Genre}</Text>
            {""}
            <Text>{searchValue.Plot}</Text>

            <HStack>
              <Text fontWeight="bold">Director</Text>
              <Text color="blue.500">{searchValue.Director}</Text>
            </HStack>
            {""}
            <HStack>
              <Text fontWeight="bold">Writers</Text>
              <Text color="blue.500">{searchValue.Writer}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Stars</Text>
              <Text color="blue.500">{searchValue.Actors}</Text>
            </HStack>
          </>
        )}
      </CardBody>
    </Card>
  );
}
export default SearchPage;

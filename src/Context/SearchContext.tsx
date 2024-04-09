import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";
const apiKey = "896ecd8c";

interface SearchContextValue {
  movieName: string;
  setMovieName: React.Dispatch<React.SetStateAction<string>>;
  results: any;
  SearchNow: () => Promise<void>;
}
interface childrenInterface {
  children: ReactNode;
}
const CreateSearch = createContext<SearchContextValue>({
  movieName: "",
  setMovieName: () => {},
  results: null,
  SearchNow: () => Promise.resolve(),
});

function SearchContextProvider({ children }: childrenInterface) {
  const [movieName, setMovieName] = useState("");
  const [results, setResults] = useState<any>(null);

  const SearchNow = async () => {
    try {
      const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
        movieName
      )}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data);
      return setResults(data);
    } catch (error) {
      console.log(" Sorry Couldn't load the required data", error);
    }
  };

  return (
    <CreateSearch.Provider
      value={{ movieName, setMovieName, results, SearchNow }}
    >
      {children}
    </CreateSearch.Provider>
  );
}
const useSearch = () => useContext(CreateSearch);

export { SearchContextProvider, useSearch };

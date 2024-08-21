import { type FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

interface HomeViewLoaderData {
  url?: string;
}

const HomeView: FC = () => {
  const data = useLoaderData() as HomeViewLoaderData;

  return (
    <Flex
      bg="gray.100"
      h="100vh"
      w="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="green.400">Data: {data?.url} </Text>
    </Flex>
  );
};

export const HomeViewLoader: () => Promise<HomeViewLoaderData> = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  const result: HomeViewLoaderData = { url: dog.url };

  return result;
};

export default HomeView;

import { Center, Flex } from "@chakra-ui/react";
import { PortfolioItemCard } from "./PortfolioItemCard";
import { portfolioItems } from "../utils/data";

const PortfolioPage = ({ onCardClick }) => {
  return (
    <Flex gap={5} align='center'>
      {portfolioItems.map((item) => (
        <PortfolioItemCard key={item.id} item={item} onClick={onCardClick} />
      ))}
    </Flex>
  );
};

export default PortfolioPage;

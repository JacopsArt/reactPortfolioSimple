import React, { useState } from "react";
import { Center, ChakraProvider } from "@chakra-ui/react";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import PortfolioPage from "./pages/PortfolioPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <ChakraProvider>
    <Center>
      <div className="App">
        {selectedItem ? (
          <PortfolioItemPage item={selectedItem} />
        ) : (
          <PortfolioPage onCardClick={handleCardClick} />
        )}
      </div>
      </Center>
    </ChakraProvider>
  );
};

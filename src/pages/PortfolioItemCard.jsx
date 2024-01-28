import React from "react";
import { Tag, Box, Image, Text, VStack } from "@chakra-ui/react";

export const PortfolioItemCard = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={handleClick}
    >
      <Image src={item.imageUrl} alt={item.title} width="100%" height="200px" />

      <VStack p="4">
        <Text fontWeight="bold" fontSize="lg" mb="2">
          {item.title}
        </Text>

        <Text fontSize="sm" color="gray.600" mb="2">
          {item.summary}
        </Text>

        <VStack spacing="2">
          {item.skills.map((skill, index) => (
            <Tag key={index} size="md" colorScheme="blue">
              {skill}
            </Tag>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};



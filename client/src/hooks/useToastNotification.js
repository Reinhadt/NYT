import { useToast } from "@chakra-ui/react";

const useToastNotification = () => {
  const toast = useToast();

  return {
    toast: (title, status) =>
      toast({
        title,
        status,
        isClosable: true,
      }),
  };
};

export default useToastNotification;

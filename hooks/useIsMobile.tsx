import { useMediaQuery } from "@mantine/hooks";

const useIsMobile = () => {
  return useMediaQuery("(max-width: 700px)");
};

export default useIsMobile;

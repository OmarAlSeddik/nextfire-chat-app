// -- basic & custom hooks -- //
import { useMediaQuery } from "@mantine/hooks";

const useIsMobile = () => {
  return useMediaQuery("(max-width: 500px)");
};

export default useIsMobile;

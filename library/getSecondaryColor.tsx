const getSecondaryColor = (primaryColor: string) => {
  if (primaryColor === "orange") return "red";
  if (primaryColor === "cyan") return "blue";
  if (primaryColor === "pink") return "grape";
  return "dark";
};

export default getSecondaryColor;

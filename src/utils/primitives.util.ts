export const convertToNumber = (value: any): any => {
  if (Array.isArray(value)) return value.map(convertToNumber);
  if (value === "0" || value === 0) return 0;
  return Number(value) ? Number(value) : value;
};

export const convertToString = (value: any) => {
  if (value === "0" || value === 0) return "0";
  return value ? value + "" : value;
};

export const notEmptyValue = (value: any) => {
  return value !== undefined && value !== null && value !== "";
};

export const isPrimitiveValue = (value: any) => {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
};

export function generateRandomCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomCode = "";

  for (let i = 0; i < 4; i++) {
    const randomChar = characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
    randomCode += randomChar;
  }

  return randomCode;
}

export function uppercaseFirstLetter(str: string) {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
}

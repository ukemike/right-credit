export const formatPin = (pin: string) => {
  const withoutDashes = pin.replace(/-/g, '');
  return withoutDashes.split('').join('-');
};

export const validateSize = (size: number, maxSize: number = 1) => {
  const maxValue = maxSize * 1024 * 1024;
  return size < maxValue;
};

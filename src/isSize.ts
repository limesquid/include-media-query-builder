const isSize = <Size extends string | number | symbol>(
  breakpoints: Record<Size, number>,
  value: unknown,
): value is Size => {
  return typeof value === 'string' && Object.keys(breakpoints).includes(value);
};

export default isSize;

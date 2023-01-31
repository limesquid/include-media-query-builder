const isSize = <Size extends string | number | symbol>(
  sizes: Record<Size, number>,
  value: unknown,
): value is Size => {
  return typeof value === 'string' && Object.keys(sizes).includes(value);
};

export default isSize;

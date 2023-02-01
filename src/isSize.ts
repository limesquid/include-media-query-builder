const isSize = <Size extends string | number | symbol>(
  breakpoints: Record<Size, number>,
  value: unknown,
): value is Size => {
  return (
    typeof value === 'string' &&
    Object.keys(breakpoints)
      .map((size) => size.toLowerCase())
      .includes(value.toLowerCase())
  );
};

export default isSize;

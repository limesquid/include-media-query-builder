import { ParsedQuery } from './types';

const buildParsedQuery = <Size extends string | number | symbol>(
  breakpoints: Record<Size, number>,
  { operator, size }: ParsedQuery<Size>,
): string => {
  const value = breakpoints[size];

  if (operator === '<') {
    return `(max-width: ${value - 1}px)`;
  }

  if (operator === '<=') {
    return `(max-width: ${value}px)`;
  }

  if (operator === '>=') {
    return `(min-width: ${value}px)`;
  }

  if (operator === '>') {
    return `(min-width: ${value + 1}px)`;
  }

  throw new Error('Unknown operator');
};

export default buildParsedQuery;

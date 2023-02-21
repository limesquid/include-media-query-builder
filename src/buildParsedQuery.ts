import { isRawQuery, ParsedQuery, RawQuery } from './types';

const buildParsedQuery = <Size extends string | number | symbol>(
  breakpoints: Record<Size, number>,
  query: ParsedQuery<Size> | RawQuery,
): string => {
  if (isRawQuery(query)) {
    return query;
  }

  const { operator, size } = query;
  const value = breakpoints[size];

  if (operator === '<') {
    return `(max-width: ${value - 1}px)`;
  }

  if (operator === '<=') {
    return `(max-width: ${value}px)`;
  }

  if (operator === '>=' || operator === '≥') {
    return `(min-width: ${value}px)`;
  }

  if (operator === '>' || operator === '≤') {
    return `(min-width: ${value + 1}px)`;
  }

  throw new Error('Unknown operator');
};

export default buildParsedQuery;

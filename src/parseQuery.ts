import isOperator from './isOperator';
import isSize from './isSize';
import { ParsedQuery, RawQuery } from './types';

const parseQuery = <Size extends string | number | symbol>(
  breakpoints: Record<Size, number>,
  query: string,
): ParsedQuery<Size> | RawQuery => {
  const matches = query.match(/^([<>]=?)(\w+)$/);

  if (!matches) {
    return query;
  }

  const [, operator, size] = matches;

  if (!isOperator(operator) || !isSize(breakpoints, size)) {
    return query;
  }

  return { operator, size };
};

export default parseQuery;

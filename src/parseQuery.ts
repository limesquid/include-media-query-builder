import isOperator from './isOperator';
import isSize from './isSize';
import { ParsedQuery } from './types';

const parseQuery = <Size extends string | number | symbol>(
  sizes: Record<Size, number>,
  query: string,
): ParsedQuery<Size> => {
  const matches = query.match(/^([<>]=?)(\w+)$/);

  if (!matches) {
    throw new Error('Invalid query');
  }

  const [, operator, size] = matches;

  if (!isOperator(operator) || !isSize(sizes, size)) {
    throw new Error('Invalid query');
  }

  return { operator, size };
};

export default parseQuery;

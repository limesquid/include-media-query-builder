import buildParsedQuery from './buildParsedQuery';
import parseQuery from './parseQuery';

const buildMediaQuery = <Size extends string | number | symbol>(
  sizes: Record<Size, number>,
  queries: string[],
): string => {
  return queries
    .map((query) => parseQuery(sizes, query))
    .map((query) => buildParsedQuery(sizes, query))
    .join(' and ');
};

export default buildMediaQuery;

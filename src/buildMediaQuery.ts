import buildParsedQuery from './buildParsedQuery';
import parseQuery from './parseQuery';

const buildMediaQuery = <Size extends string | number | symbol>(
  breakpoints: Record<Size, number>,
  queries: string[],
): string => {
  return queries
    .map((query) => parseQuery(breakpoints, query))
    .map((query) => buildParsedQuery(breakpoints, query))
    .join(' and ');
};

export default buildMediaQuery;

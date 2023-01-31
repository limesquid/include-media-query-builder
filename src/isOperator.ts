import { OPERATORS } from './constants';
import { Operator } from './types';

const isOperator = (value: unknown): value is Operator => {
  return typeof value === 'string' && (OPERATORS as string[]).includes(value);
};

export default isOperator;

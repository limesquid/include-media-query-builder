export type Operator = '<' | '<=' | '>=' | '>' | `≤` | `≥`;

export interface ParsedQuery<Size extends string | number | symbol> {
  operator: Operator;
  size: Size;
}

export type RawQuery = string;

export const isRawQuery = (value: unknown): value is RawQuery => {
  return typeof value === 'string';
};

export type Operator = '<' | '<=' | '>=' | '>';

export interface ParsedQuery<Size extends string | number | symbol> {
  operator: Operator;
  size: Size;
}

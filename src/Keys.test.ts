import Keys from './Keys';

type TestProps = {
  str: string;
  num: number;
  date: Date;
  bool: boolean;
};

type RequiredProps = {
  str: string;
  num: number;
  date: Date;
  bool: boolean;
  obj: TestProps;
  arr: TestProps[];
};

describe('Keys', () => {
  test('全て', () => {
    type FullKeys = Keys<RequiredProps>;
    const str: FullKeys = 'str';
    const num: FullKeys = 'num';
    const date: FullKeys = 'date';
    const bool: FullKeys = 'bool';
    const obj: FullKeys = 'obj';
    const arr: FullKeys = 'arr';
    expect(true).toBe(true);
  });
  test('一部', () => {
    type PartialKeys = Keys<RequiredProps, string | number | Date>;
    const str: PartialKeys = 'str';
    const num: PartialKeys = 'num';
    const date: PartialKeys = 'date';
    expect(true).toBe(true);
  });
});

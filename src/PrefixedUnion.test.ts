import PrefixedUnion from './PrefixedUnion';

type TestUnion = 'str' | 'num' | 'date' | 'bool' | 'obj' | 'arr';

describe('PrefixedUnion', () => {
  test('全て', () => {
    type FullPrefixedUnion = PrefixedUnion<'x', TestUnion>;
    const str: FullPrefixedUnion = 'xStr';
    const num: FullPrefixedUnion = 'xNum';
    const date: FullPrefixedUnion = 'xDate';
    const bool: FullPrefixedUnion = 'xBool';
    const obj: FullPrefixedUnion = 'xObj';
    const arr: FullPrefixedUnion = 'xArr';
    expect(true).toBe(true);
  });
  test('一部', () => {
    type PartialPrefixedUnion = PrefixedUnion<
      'x',
      TestUnion,
      'str' | 'num' | 'obj'
    >;
    const str: PartialPrefixedUnion = 'xStr';
    const num: PartialPrefixedUnion = 'xNum';
    const date: PartialPrefixedUnion = 'date';
    const bool: PartialPrefixedUnion = 'bool';
    const obj: PartialPrefixedUnion = 'xObj';
    const arr: PartialPrefixedUnion = 'arr';
    expect(true).toBe(true);
  });
});

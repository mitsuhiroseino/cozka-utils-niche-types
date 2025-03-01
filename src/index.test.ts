import { Keys, Prefixed, PrefixedUnion } from './index';

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

type PartialProps = {
  str?: string;
  num?: number;
  date?: Date;
  bool?: boolean;
  obj?: TestProps;
  arr?: TestProps[];
};

type TestUnion = 'str' | 'num' | 'date' | 'bool' | 'obj' | 'arr';

describe('utils-niche-types', () => {
  describe('Prefixed', () => {
    test('全て(Required)', () => {
      const record: Prefixed<'x', RequiredProps> = {
        xStr: '',
        xNum: 0,
        xDate: new Date(),
        xBool: false,
        xObj: {
          str: '',
          num: 0,
          date: new Date(),
          bool: false,
        },
        xArr: [
          {
            str: '',
            num: 0,
            date: new Date(),
            bool: false,
          },
        ],
      };
      expect(true).toBe(true);
    });

    test('全て(Partial)', () => {
      const record: Prefixed<'x', PartialProps> = {};
      expect(true).toBe(true);
    });

    test('一部(Required)', () => {
      const record: Prefixed<'x', RequiredProps, 'str' | 'num' | 'obj'> = {
        xStr: '',
        xNum: 0,
        date: new Date(),
        bool: false,
        xObj: {
          str: '',
          num: 0,
          date: new Date(),
          bool: false,
        },
        arr: [
          {
            str: '',
            num: 0,
            date: new Date(),
            bool: false,
          },
        ],
      };
      expect(true).toBe(true);
    });

    test('一部(Partial)', () => {
      const record: Prefixed<'x', PartialProps, 'str' | 'num' | 'obj'> = {};
      expect(true).toBe(true);
    });
  });

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
});

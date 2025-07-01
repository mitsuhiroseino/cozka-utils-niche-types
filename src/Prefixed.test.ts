import Prefixed from './Prefixed';

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

/**
 * typeofの結果の型
 */
export type TypeOfResult =
  | 'undefined'
  | 'object'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'function';

/**
 * 指定のプロパティにキャメルケースでプレフィックスを付与する
 * @template PREFIX プロパティに付与するプレフィックス
 * @template RECORD プロパティを持つレコード
 * @template KEYS 対象のプロパティ。未指定の場合は全てのプロパティ
 */
export type Prefixed<
  PREFIX extends string,
  RECORD extends Record<string, any>,
  KEYS extends keyof RECORD = keyof RECORD,
> = {
  [KEY in keyof RECORD as KEY extends KEYS
    ? `${PREFIX}${Capitalize<string & KEY>}`
    : KEY]: RECORD[KEY];
};

/**
 * ユニオン型の値にキャメルケースでプレフィックスを付与する
 * @template PREFIX ユニオン型の値に付与するプレフィックス
 * @template UNION ユニオン型
 * @template KEYS 対象のユニオン型の値。未指定の場合は全てのユニオン型の値
 */
export type PrefixedUnion<
  PREFIX extends string,
  UNION,
  KEYS extends UNION = UNION,
> = UNION extends KEYS & string ? `${PREFIX}${Capitalize<UNION>}` : UNION;

/**
 * レコードのキーのユニオン型を作る
 * TYPEに型を指定すると、その型の値を持つキーのみを抽出したユニオン型を作る
 *
 * @template RECORD 対象のレコード
 * @template TYPE 対象の値の型
 */
export type Keys<RECORD extends Record<PropertyKey, unknown>, TYPE = any> = {
  [KEY in keyof RECORD]: RECORD[KEY] extends TYPE ? KEY : never;
}[keyof RECORD];

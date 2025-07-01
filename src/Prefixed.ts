/**
 * 指定のプロパティにキャメルケースでプレフィックスを付与する
 * @template PREFIX プロパティに付与するプレフィックス
 * @template RECORD プロパティを持つレコード
 * @template KEYS 対象のプロパティ。未指定の場合は全てのプロパティ
 */
type Prefixed<
  PREFIX extends string,
  RECORD extends Record<string, any>,
  KEYS extends keyof RECORD = keyof RECORD,
> = {
  [KEY in keyof RECORD as KEY extends KEYS
    ? `${PREFIX}${Capitalize<string & KEY>}`
    : KEY]: RECORD[KEY];
};

export default Prefixed;

/**
 * ユニオン型の値にキャメルケースでプレフィックスを付与する
 * @template PREFIX ユニオン型の値に付与するプレフィックス
 * @template UNION ユニオン型
 * @template KEYS 対象のユニオン型の値。未指定の場合は全てのユニオン型の値
 */
type PrefixedUnion<
  PREFIX extends string,
  UNION,
  KEYS extends UNION = UNION,
> = UNION extends KEYS & string ? `${PREFIX}${Capitalize<UNION>}` : UNION;

export default PrefixedUnion;

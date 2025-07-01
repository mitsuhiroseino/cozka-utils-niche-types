/**
 * レコードのキーのユニオン型を作る
 * TYPEに型を指定すると、その型の値を持つキーのみを抽出したユニオン型を作る
 *
 * @template RECORD 対象のレコード
 * @template TYPE 対象の値の型
 */
type Keys<RECORD extends Record<PropertyKey, unknown>, TYPE = any> = {
  [KEY in keyof RECORD]: RECORD[KEY] extends TYPE ? KEY : never;
}[keyof RECORD];

export default Keys;

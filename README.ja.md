# @cozka/utils-niche-types

TypeScript のニッチな型定義を集めたライブラリです。

**[English README is available here](./README.md)**

## インストール

```sh
npm install @cozka/utils-niche-types
```

## 使い方

### `Prefixed<PREFIX, RECORD, KEYS>`

指定したプロパティにキャメルケースのプレフィックスを付与します。

#### パラメータ

- `PREFIX`: 付与するプレフィックス。
- `RECORD`: プロパティを持つレコード型。
- `KEYS`: プレフィックスを適用するプロパティ（デフォルトはすべてのプロパティ）。

#### 使用例

```ts
type Original = {
  name: string;
  age: number;
};

type PrefixedType = Prefixed<'user', Original>;
// 結果:
// {
//   userName: string;
//   userAge: number;
// }
```

### `PrefixedUnion<PREFIX, UNION, KEYS>`

ユニオン型の値にキャメルケースのプレフィックスを付与します。

#### パラメータ

- `PREFIX`: 付与するプレフィックス。
- `UNION`: 対象のユニオン型。
- `KEYS`: プレフィックスを適用するユニオン型の値（デフォルトはすべての値）。

#### 使用例

```ts
type Status = 'active' | 'inactive' | 'pending';
type PrefixedStatus = PrefixedUnion<'is', Status>;
// 結果: 'isActive' | 'isInactive' | 'isPending'
```

### `Keys<RECORD, TYPE>`

指定した型の値を持つキーのみを抽出するユニオン型を作成します。

#### パラメータ

- `RECORD`: 対象のレコード。
- `TYPE`: 抽出する値の型（デフォルトは any）。

#### 使用例

```ts
type Data = {
  id: number;
  name: string;
  age: number;
};

type NumberKeys = Keys<Data, number>;
// 結果: 'id' | 'age'
```

## ライセンス

MIT

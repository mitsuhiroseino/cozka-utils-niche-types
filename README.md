# @cozka/utils-niche-types

A library that collects niche TypeScript type definitions.

**[日本語の README はこちら](./README.ja.md)**

## Installation

```sh
npm install @cozka/utils-niche-types
```

## Usage

### `Prefixed<PREFIX, RECORD, KEYS>`

Adds a camel-case prefix to specified properties.

#### Parameters

- `PREFIX`: The prefix to be applied.
- `RECORD`: The record type containing properties.
- `KEYS`: The properties to which the prefix should be applied (defaults to all properties).

#### Example

```ts
type Original = {
  name: string;
  age: number;
};

type PrefixedType = Prefixed<'user', Original>;
// Result:
// {
//   userName: string;
//   userAge: number;
// }
```

### `PrefixedUnion<PREFIX, UNION, KEYS>`

Adds a camel-case prefix to specified values in a union type.

#### Parameters

- `PREFIX`: The prefix to be applied.
- `UNION`: The target union type.
- `KEYS`: The values to which the prefix should be applied (defaults to all values).

#### Example

```ts
type Status = 'active' | 'inactive' | 'pending';
type PrefixedStatus = PrefixedUnion<'is', Status>;
// Result: 'isActive' | 'isInactive' | 'isPending'
```

### `Keys<RECORD, TYPE>`

Creates a union type of keys that have a specified value type.

#### Parameters

- `RECORD`: The target record.
- `TYPE`: The value type to filter keys (defaults to any).

#### Example

```ts
type Data = {
  id: number;
  name: string;
  age: number;
};

type NumberKeys = Keys<Data, number>;
// Result: 'id' | 'age'
```

## License

MIT

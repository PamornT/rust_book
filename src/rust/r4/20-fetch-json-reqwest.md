# How to fetch json with reqwest

> 🚧 `#[tokio::main]` Not support `wasm`, do use `futures` instead.

#### `foo.json`

```json
{{#include ../../../examples/r4/20-fetch-json-reqwest/src/foo.json}}
```

#### `Cargo.toml`

```toml
{{#include ../../../examples/r4/20-fetch-json-reqwest/Cargo.toml}}
```

#### `main.rs`

```rust,edition2021
{{#include ../../../examples/r4/20-fetch-json-reqwest/src/main.rs}}
```

> 🤷‍♂️ `reqwest`+`TLS` is not runnable via Rust Playground so output is shown below.

<details>
<summary>Run</summary>

```
Ok(
    [
        AnimalData {
            id: "foo",
            weight: 123.45,
            created_at: "2022-09-01",
        },
        AnimalData {
            id: "bar",
            weight: 42.2424,
            created_at: "2022-08-01",
        },
    ],
)
```

</details>

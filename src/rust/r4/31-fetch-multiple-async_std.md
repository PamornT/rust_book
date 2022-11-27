# How to fetch multiple with async_std

> 🚧 `#[tokio::main]` Not support `wasm`, do use `futures` instead.

#### `foo.json`

```json
{{#include ../../../examples/r4/31-fetch-multiple-async_std/src/foo.json}}
```

#### `bar.json`

```json
{{#include ../../../examples/r4/31-fetch-multiple-async_std/src/bar.json}}
```

#### `Cargo.toml`

```toml
{{#include ../../../examples/r4/31-fetch-multiple-async_std/Cargo.toml}}
```

#### `main.rs`

```rust,edition2021
{{#include ../../../examples/r4/31-fetch-multiple-async_std/src/main.rs}}
```

> 🤷‍♂️ `reqwest`+`TLS` is not runnable via Rust Playground so output is shown below.

<details>
<summary>Run</summary>

```

```

</details>

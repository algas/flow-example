# flowtype example

flowtype example using underscore.js

## Setup

```
yarn global add flow-typed flow-bin flow-remove-types
yarn add underscore
flow-typed install -f v0.42.0 underscore@1.8.3
flow init
```

## Build

```
flow-remove-types src/ --out-dir build/
```

## Test

```
flow check
```

## Run

```
flow-node src/index.js
```

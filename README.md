# TypeScript Interface Generator

This library provides functionality to generate TypeScript interfaces from Swagger JSON URLs. It includes two main functions:

1. `generate`: Generates TypeScript interfaces and writes them to a `.ts` file.
2. `generateTypeScriptInterfaces`: Generates TypeScript interfaces and returns the interface definitions as a string.

## Installation

To use this library, include it in your project by importing the functions you need:

```typescript
import { generate, generateTypeScriptInterfaces } from 'swagger-to-typescript-interface';
```

## Usage

### generate

Generates TypeScript interfaces from a given Swagger JSON URL and writes the output to a TypeScript file.

**Syntax:**

```typescript
generate(url: string, output: string): Promise<string>;
```

**Parameters:**

- `url`: The URL to the Swagger JSON that defines the API.
- `output`: The path where the generated TypeScript file will be saved.

**Returns:** A `Promise` that resolves to a string indicating the path of the generated file.

**Example:**

```typescript
generate('http://example.com/swagger.json', './interfaces.ts')
  .then((path) => console.log(`Interfaces generated at ${path}`))
  .catch((error) => console.error(error));
```

### generateTypeScriptInterfaces

Generates TypeScript interface definitions from a Swagger JSON URL and returns the definitions as a string.

**Syntax:**

```typescript
generateTypeScriptInterfaces(url: string): Promise<string>;
```

**Parameters:**

- `url`: The URL to the Swagger JSON that defines the API.

**Returns:** A `Promise` that resolves to a string containing the TypeScript interface definitions.

**Example:**

```typescript
generateTypeScriptInterfaces('http://example.com/swagger.json')
  .then((definitions) => console.log(definitions))
  .catch((error) => console.error(error));
```

## License

MIT

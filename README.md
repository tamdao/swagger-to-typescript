# TypeScript Interface Generator

This library provides functionality to generate TypeScript interfaces from Swagger JSON URLs. It includes two main functions for programmatic use and a Command Line Interface (CLI) for direct command-line usage.

## Installation

To use this library, include it in your project by importing the functions you need:

```sh
npm install swagger-to-typescript-interface
```

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

### Command Line Interface (CLI)

For those who prefer using a CLI, `swagger-to-typescript-interface` offers a simple yet powerful command-line tool.

#### Installation

If you haven't installed the package globally, you might need to do so to access the CLI:

```sh
npm install -g swagger-to-typescript-interface
```

#### Usage

```sh
swagger-to-typescript-interface --input <URL> --output <FILE>
```

- `-i, --input <value>`: URL to the Swagger JSON (required).
- `-o, --output <value>`: Path for the output TypeScript file (required).

#### Example

```sh
swagger-to-typescript-interface -i http://example.com/swagger.json -o ./types.ts
```

This command generates TypeScript interfaces from the Swagger JSON at the given URL and writes them to `types.ts`.

## License

MIT

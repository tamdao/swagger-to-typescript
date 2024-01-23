import fs from 'fs';
import path from 'path';
import { Property, getSwaggerByUrl } from './swagger';
import { isUrl } from './utils';

export async function generate(url: string, output: string) {
  const content = await generateTypeScriptInterfaces(url);

  ensureDirectoryExistence(output);

  fs.writeFileSync(output, content);

  return content;
}

export async function generateTypeScriptInterfaces(url: string): Promise<string> {
  if (!isUrl(url)) {
    throw new Error('Swagger url is invalid');
  }

  const swagger = await getSwaggerByUrl(url);

  let content = '';

  for (const [key, definition] of Object.entries(swagger.definitions)) {
    if (definition.type === 'object') {
      content += `interface ${key} {\n`;

      if (definition.properties) {
        Object.entries(definition.properties).forEach(([propKey, propValue]) => {
          const type = generateTypeScriptType(propValue);
          content += `  ${propKey}: ${type};\n`;
        });
      }

      content += '}\n\n';
    }
  }

  return content;
}

function generateTypeScriptType(property: Property): string {
  if (property.$ref) {
    const refPaths = property.$ref.split('/');
    return refPaths[refPaths.length - 1];
  }
  if (property.enum) {
    return property.enum.map((e) => `"${e}"`).join(' | ');
  }
  if (property.type === 'array' && property.items) {
    if (property.items.enum) {
      return `(${generateTypeScriptType(property.items)})[]`;
    }
    return `${generateTypeScriptType(property.items)}[]`;
  }
  if (property.type === 'integer') {
    return `number`;
  }
  return property.type;
}

function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

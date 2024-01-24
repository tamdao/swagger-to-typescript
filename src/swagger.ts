export type DefinitionType = 'object' | 'string' | 'array' | 'boolean' | 'integer';

export interface Item {
  type: DefinitionType;
  $ref?: string;
  properties?: { [name: string]: Property };
  items?: Item;
  enum?: string[];
}

export interface Property {
  type: DefinitionType;
  items?: Item;
  enum?: string[];
  $ref?: string;
  additionalProperties?: Property;
}

export interface Definition {
  type: DefinitionType;
  properties?: {
    [name: string]: Property;
  };
}

export interface Swagger {
  definitions?: {
    [key: string]: Definition;
  };
  components?: {
    schemas: {
      [key: string]: Definition;
    };
  };
}

export async function getSwaggerByUrl(url: string): Promise<Swagger> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

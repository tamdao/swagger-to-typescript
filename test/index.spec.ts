import { describe, expect, it } from 'vitest';

import { generate, generateTypeScriptInterfaces } from '../src';

describe('index', () => {
  describe('swagger to typescript', () => {
    it('should generate interface', async () => {
      const url = 'https://dev-backend.trytemelio.com/api/swagger.json';
      const content = await generateTypeScriptInterfaces(url);
      expect(typeof content).toBe('string');
    });
    it('should generate interface and write output file', async () => {
      const url = 'https://dev-backend.trytemelio.com/api/swagger.json';
      const output = './output/swagger.ts';
      const result = await generate(url, output);
      expect(result).equal(output);
    });
  });
});

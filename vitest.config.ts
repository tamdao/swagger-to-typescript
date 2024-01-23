import { defaultExclude, defineConfig } from 'vitest/config';

const coverageExclude = [...defaultExclude, '.eslintrc.*', 'output'];

export default defineConfig({
  test: {
    coverage: {
      exclude: coverageExclude,
    },
  },
});

import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    name: 'nova-vue',
    file: 'dist/nova.esm.js',
    format: 'es'
  }
});

export default config;

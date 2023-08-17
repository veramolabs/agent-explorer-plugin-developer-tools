import * as esbuild from 'esbuild'
import pkg from 'esbuild-plugin-external-global';
const { externalGlobalPlugin } = pkg;

await esbuild.build({
  entryPoints: ['./src/index.jsx'],
  outfile: './dist/plugin.js',
  bundle: true,
  format: 'esm',
  external: [
    'react',
    'react/jsx-runtime',
    'react-dom',
    'antd',
    '@ant-design/pro-components',
    'react-query',
    '@veramo-community/veramo-react',
    'react-router-dom',
    'uuid',
    'date-fns',
    'antd/lib/button',
  ],
  plugins: [
    externalGlobalPlugin({
      'react': 'window.React',
      'react/jsx-runtime': 'window.reactjsxruntime',
      'react-dom': 'window.ReactDOM',
      'antd': 'window.antd',
      '@ant-design/pro-components': 'window.antdPro',
      'react-query': 'window.reactquery',
      '@veramo-community/veramo-react': 'window.veramoreact',
      'react-router-dom': 'window.reactrouterdom',
      'uuid': 'window.uuid',
      'date-fns': 'window.datefns',
      'antd/lib/button': 'window.antlibbutton',
    })
  ]
})
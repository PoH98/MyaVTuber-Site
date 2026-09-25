import assert from 'node:assert/strict'
import { test } from 'node:test'
import { signalrAnnotations } from './signalr-annotations.mjs'

test('removes invalid SignalR hints while preserving valid call annotations and source maps', () => {
  const code = '/*#__PURE__*/ function getOsName() {}\n/*#__PURE__*/ function getRuntimeVersion() {}\nconst value = /*#__PURE__*/ getOsName();'
  const plugin = signalrAnnotations()
  for (const path of [
    '/node_modules/@microsoft/signalr/dist/esm/Utils.js',
    'C:\\app\\node_modules\\@microsoft\\signalr\\dist\\cjs\\Utils.js',
  ]) {
    const result = plugin.transform(code, path)
    assert.equal(result.code, ' function getOsName() {}\n function getRuntimeVersion() {}\nconst value = /*#__PURE__*/ getOsName();')
    assert.ok(result.map.mappings.length)
  }
  assert.equal(plugin.transform(code, '/app/Utils.js'), undefined)
})

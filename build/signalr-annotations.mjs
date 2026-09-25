import MagicString from 'magic-string'

// SignalR annotates declarations as pure calls. Remove only those invalid hints.
export function signalrAnnotations() {
  return {
    name: 'signalr-annotations',
    transform(code, id) {
      if (!/@microsoft[\\/]signalr[\\/]dist[\\/](esm|cjs)[\\/]Utils\.js$/.test(id)) return

      const source = new MagicString(code)
      for (const match of code.matchAll(/\/\*#__PURE__\*\/(?=\s*function (?:getOsName|getRuntimeVersion)\()/g)) {
        source.remove(match.index, match.index + match[0].length)
      }
      return { code: source.toString(), map: source.generateMap({ hires: true }) }
    },
  }
}

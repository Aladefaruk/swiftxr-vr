// Suppress source map warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('Failed to parse source map')) return;
  originalWarn(...args);
};
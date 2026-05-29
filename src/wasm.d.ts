declare module "*.wasm" {
  const src: WebAssembly.Module;
  export default src;
}

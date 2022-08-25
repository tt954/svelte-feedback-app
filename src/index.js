import App from "./App.svelte";

// Why use Svelte?
// highly optimized JS, no virtual DOM (about 30% faster than other frameworks)
// great out of the box animations/transitions
// svelte kit (similar to Next.js), svelte native
// ease of use

const app = new App({
  target: document.body
});

export default app;

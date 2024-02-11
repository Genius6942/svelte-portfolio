// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

	const eruda: any;	
}

export {};

declare module "@fortawesome/pro-solid-svg-icons/index.es" {
  export * from "@fortawesome/pro-solid-svg-icons";
}
// Squelch warnings of image imports from your assets dir
declare module "$lib/assets/*" {
  const meta: Object[];
  export default meta;
}

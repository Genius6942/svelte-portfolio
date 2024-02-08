import type { Profile } from "@auth/sveltekit";
import type { Provider } from "@auth/sveltekit/providers";

export { handle } from "./auth";

declare module "@auth/core/types" {
  interface Session {
    user: {
      name: string;
			email: string;
      image: string;
      type?: string;
    };
  }
  interface User {
    type?: string;
  }
}

import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { AUTH_URL, GITHUB_ID, GITHUB_SECRET, GP } from "$env/static/private";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { dbClient, database as databaseName } from "$lib/database";

const adapter = MongoDBAdapter(dbClient, {
  databaseName
});

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter,
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
      redirectProxyUrl: GP === '1' ? "https://5173-genius6942-svelteportfo-c7i3puajt6w.ws-us108.gitpod.io/auth" : undefined
    })
  ],
  callbacks: {
    session({ session, trigger, user, newSession }) {
      if (session?.user) {
        session.user = { ...user, ...session.user };
      }

      if (newSession && trigger === "update") {
        const updateProperties: { [key: string]: any } = {};
        if (newSession.image && typeof newSession.image === "string") {
          updateProperties.image = newSession.image;
        }
        if (newSession.name && typeof newSession.name === "string") {
          updateProperties.name = newSession.name;
        }

        if (Object.keys(updateProperties).length > 0) {
          adapter.updateUser!({ id: user.id, ...updateProperties });
        }
      }

      return session;
    }
  },
  cookies:
    GP === '1'
      ? {
          sessionToken: {
            name: "next-auth.session-token",
            options: {
              domain: "5173-genius6942-svelteportfo-c7i3puajt6w.ws-us108.gitpod.io",
              path: "/",
              httpOnly: true,
              sameSite: "lax",
              secure: false
            }
          }
        }
      : undefined
});


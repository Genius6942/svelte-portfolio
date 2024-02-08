import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { dbClient, database as databaseName } from "$lib/database";

const adapter = MongoDBAdapter(dbClient, {
  databaseName
});

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter,
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
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
  }
});

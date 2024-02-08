import { redirect } from "@sveltejs/kit";
import { signIn } from "../../auth";
import type { Actions } from "./$types";
export const actions: Actions = { default: signIn };

export const load = async (params) => {
  const session = await params.locals.auth();

  if (session && session.user) {
    redirect(302, "/");
  }

	return {};
};

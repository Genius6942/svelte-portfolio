import { redirect } from "@sveltejs/kit";
import { signOut } from "../../auth";
export const actions = { default: signOut };

export const load = async ({ locals }) => {
  if (!(await locals.auth())) redirect(302, "/");

  return {};
};

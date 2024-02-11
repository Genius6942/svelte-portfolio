import { redirect } from "@sveltejs/kit";

export const load = async (params) => {
  const session = await params.locals.auth();

  if (session && session.user) {
    redirect(302, "/");
  }

  return {};
};

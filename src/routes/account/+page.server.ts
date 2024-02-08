export const load = async ({ locals }) => {
  if (!(await locals.auth())) {
    return {
      status: 302,
      headers: {
        location: "/login"
      }
    };
  }

  return {};
};

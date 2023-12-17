"use server";

export const submit = async (e) => {
  e.preventDefault;
  const username = e.get("username");
  const password = e.get("password");
  const response = await fetch(`${process.env.BACKEND_URL}login`, {
    method: 'POST',
    body: { username: username, password: password},
    mode: "cors",
    headers: {
    withCredentials: true,
    }
  });
;

  console.log('====================================');
  console.log(await response);
  console.log('====================================');
};

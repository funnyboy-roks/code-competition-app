const test = async () => {
  const out = await fetch('/login?query=123', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'username',
      password: 'password',
    }),
  });
};

test();

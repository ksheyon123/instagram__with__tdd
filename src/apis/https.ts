const get = async (domain: string, params = {}, headers = {}) => {
  const qs = new URLSearchParams(params);
  const initHeaders: HeadersInit = {
    ...headers,
  };
  console.log(`${domain}?${qs}`);
  const rsp = await fetch(`${domain}?${qs}`, {
    method: "GET",
    headers: {
      ...initHeaders,
    },
  });
  if (rsp.ok) {
    const result = await rsp.json();
    return result;
  } else {
    throw new Error(JSON.stringify({ code: rsp.status }));
  }
};

const post = async (domain: string, params = {}, headers = {}) => {
  const initHeaders: HeadersInit = {
    ...headers,
  };
  const rsp = await fetch(`${domain}`, {
    method: "GET",
    headers: {
      ...initHeaders,
    },
    body: JSON.stringify(params),
  });
  if (rsp.ok) {
    const result = await rsp.json();
    return result;
  } else {
    throw new Error(JSON.stringify({ code: rsp.status }));
  }
};

export { get, post };

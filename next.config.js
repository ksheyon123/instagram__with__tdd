// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  rewrites: async () => [
    {
      source: "/v1/fbid", // url이 source에 해당될 경우
      destination: "https://www.facebook.com/v19.0/dialog/oauth", // destination으로 redirect
    },
  ],
  // redirects: async () => [
  //   {
  //     source: "/v1/fbid", // url이 source에 해당될 경우
  //     statusCode: 302,
  //     destination: "https://www.facebook.com/v19.0/dialog/oauth", // destination으로 redirect
  //   },
  // ],
};

module.exports = nextConfig;

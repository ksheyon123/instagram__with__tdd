// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    INSTAGRAM_CLIENT_ID: process.env.INSTAGRAM_CLIENT_ID,
    INSTAGRAM_CLIENT_SECRET: process.env.INSTAGRAM_CLIENT_SECRET,
    NGROK_ENDPOINT: process.env.NGROK_ENDPOINT,
  },
};

module.exports = nextConfig;

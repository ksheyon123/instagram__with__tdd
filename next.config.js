// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
  },
};

module.exports = nextConfig;

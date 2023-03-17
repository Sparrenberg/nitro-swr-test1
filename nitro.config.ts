import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  routeRules: {
    '/': { swr: 60 },
  },
});

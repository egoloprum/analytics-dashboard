import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu1-distinct-sloth-40400.upstash.io',
  token: process.env.REDIS_KEY!,
})

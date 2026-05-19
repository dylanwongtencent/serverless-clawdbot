import { createWorld } from "@fantasticfour/world-upstash";

const redisUrl =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;

const redisToken =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

if (!redisUrl) {
  throw new Error("Missing UPSTASH_REDIS_REST_URL or KV_REST_API_URL");
}

if (!redisToken) {
  throw new Error("Missing UPSTASH_REDIS_REST_TOKEN or KV_REST_API_TOKEN");
}

if (!process.env.QSTASH_TOKEN) {
  throw new Error("Missing QSTASH_TOKEN");
}

export const world = createWorld({
  redisUrl,
  redisToken,
  qstashToken: process.env.QSTASH_TOKEN,
  qstashTargetUrl:
    process.env.QSTASH_TARGET_URL ??
    "https://serverless-clawdbot.edgeone.cool/api/claw?op=workflow",
  qstashCurrentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY,
  qstashNextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY,
  keyPrefix: process.env.WORKFLOW_REDIS_KEY_PREFIX ?? "clawbot:",
});

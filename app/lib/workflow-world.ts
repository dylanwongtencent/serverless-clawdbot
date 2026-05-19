// app/lib/workflow-world.ts
import { createWorld } from "@fantasticfour/world-upstash";

export const world = createWorld({
  redisUrl: process.env.KV_REST_API_URL!,
  redisToken: process.env.KV_REST_API_TOKEN!,
  qstashToken: process.env.QSTASH_TOKEN!,
  qstashTargetUrl:
    process.env.QSTASH_TARGET_URL ??
    "https://serverless-clawdbot.edgeone.cool/api/claw?op=workflow",
  keyPrefix: process.env.WORKFLOW_REDIS_KEY_PREFIX ?? "clawbot:",
});

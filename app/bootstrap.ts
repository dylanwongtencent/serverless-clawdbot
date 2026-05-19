import { start } from "workflow/api";
import { daemonWorkflow } from "@/app/workflows/daemon";
import { autopilotWorkflow } from "@/app/workflows/autopilot";
import { world } from "@/app/lib/workflow-world";
let started = false;

export async function bootstrapDev() {
  if (started) return;
  started = true;

  if (process.env.NODE_ENV !== "production") {
    await start(daemonWorkflow, [],  { world });
    await start(autopilotWorkflow, [], { world });
    console.log("Dev workflows started");
  }
}

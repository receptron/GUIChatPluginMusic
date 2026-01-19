import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { MusicToolData, MusicArgs } from "../core/types";
import { TOOL_DEFINITION, showMusic } from "../core/plugin";
import { samples } from "../core/samples";
import MusicView from "./View.vue";
import MusicPreview from "./Preview.vue";

export const plugin: ToolPlugin<MusicToolData, unknown, MusicArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: showMusic,
  generatingMessage: "Rendering sheet music...",
  isEnabled: () => true,
  viewComponent: MusicView,
  previewComponent: MusicPreview,
  samples,
};

export { showMusic as executeMusic } from "../core/plugin";
export * from "../core/types";
export { TOOL_DEFINITION } from "../core/definition";

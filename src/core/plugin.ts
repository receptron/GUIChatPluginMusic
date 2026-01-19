import type { ToolContext, ToolResult } from "gui-chat-protocol/vue";
import type { MusicToolData, MusicArgs } from "./types";
import { TOOL_DEFINITION } from "./definition";

export type MusicResult = ToolResult<MusicToolData>;

export const showMusic = async (
  _context: ToolContext,
  args: MusicArgs,
): Promise<MusicResult> => {
  try {
    const { musicXML, title } = args;

    if (!musicXML || typeof musicXML !== "string") {
      throw new Error("musicXML parameter is required and must be a string");
    }

    return {
      message: "Sheet music displayed",
      title: title || "Sheet Music",
      data: { musicXML },
      instructions:
        "Acknowledge that the sheet music has been displayed to the user.",
    };
  } catch (error) {
    console.error("ERR: exception\n Music rendering failed", error);
    return {
      message: `Music rendering failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      instructions: "Acknowledge that the music rendering failed.",
    };
  }
};

export { TOOL_DEFINITION };

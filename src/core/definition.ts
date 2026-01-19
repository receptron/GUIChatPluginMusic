export const TOOL_NAME = "showMusic";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description: "Display sheet music from MusicXML format.",
  parameters: {
    type: "object" as const,
    properties: {
      musicXML: {
        type: "string",
        description: "The music in MusicXML format",
      },
      title: {
        type: "string",
        description: "Optional title for the music piece",
      },
    },
    required: ["musicXML"],
  },
};

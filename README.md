# @gui-chat-plugin/music

MusicXML sheet music plugin for GUI Chat applications. Displays and plays sheet music from MusicXML format.

## Features

- Display sheet music from MusicXML format
- Audio playback with OpenSheetMusicDisplay and osmd-audio-player
- Tempo control
- Cursor following during playback

## Installation

```bash
yarn add @gui-chat-plugin/music
```

## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import MusicPlugin from "@gui-chat-plugin/music/vue";

const pluginList = [
  // ... other plugins
  MusicPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/music/style.css";
```

### Core-only Usage

```typescript
import { executeMusic, TOOL_DEFINITION } from "@gui-chat-plugin/music";

// Show sheet music
const result = await executeMusic(context, {
  musicXML: "<musicxml-content>",
  title: "My Song",
});
```

## API

### MusicArgs

```typescript
interface MusicArgs {
  musicXML: string;  // The music in MusicXML format
  title?: string;    // Optional title for the music piece
}
```

### MusicToolData

```typescript
interface MusicToolData {
  musicXML: string;
}
```

## Dependencies

This plugin requires:
- `opensheetmusicdisplay`: For rendering MusicXML as sheet music
- `osmd-audio-player`: For audio playback

## Development

```bash
# Install dependencies
yarn install

# Run demo
yarn dev

# Build
yarn build

# Lint
yarn lint
```

## License

MIT

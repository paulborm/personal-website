---
draft: false
category: "youtube-dl"
slug: "youtube-dl-extract-audio"
date: "2019-11-30-20:00:00"
---

```bash{2}
# Download and extract audio of youtube video
youtube-dl -x --audio-format mp3 <URL>
```
<!--
| Parameter             | Description                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| -x, --extract-audio   | Convert video files to audio-only files (requires ffmpeg or avconv and ffprobe or avprobe)                                     |
| --audio-format FORMAT | Specify audio format: "best", "aac", "flac", "mp3", "m4a", "opus", "vorbis", or "wav"; "best" by default; No effect without -x | -->

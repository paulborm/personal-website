---
draft: false
category: "ffmpeg"
slug: "ffmpeg-file-trimming"
date: "2019-11-30-20:00:00"
---

```bash{3}
# Trim audio and video file
# Format time duration: [HH:]MM:SS[.m...]
ffmpeg -i <INPUT_FILE> -ss 00:00:00.000 -to 00:00:00.000 -c copy <OUTPUT_FILE>
```
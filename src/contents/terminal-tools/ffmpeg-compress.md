---
draft: false
category: "ffmpeg"
slug: "ffmpeg-file-compression"
date: "2019-12-01-12:00:00"
---

```bash{6, 13}
# Compress a .mp4 file
#
# -crf range 0-51. Recommended 17–28
# https://trac.ffmpeg.org/wiki/Encode/H.264

ffmpeg -i <INPUT_FILE> -vcodec h264 -crf 34 <OUTPUT_FILE>

# Compress a .webm file
#
# -crf range 0-63. Recommended 15–35
# https://trac.ffmpeg.org/wiki/Encode/VP9

ffmpeg -i <INPUT_FILE> -c:v libvpx-vp9 -crf 48 -b:v 0 <OUTPUT_FILE>
```
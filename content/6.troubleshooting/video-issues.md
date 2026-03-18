# Video Troubleshooting

Solutions for common video upload and playback issues.

---

## Video Won't Upload

### Check File Format
Supported formats: **MP4, MOV, WebM**

If your video is in a different format (AVI, MKV, FLV), convert it first using:
- [HandBrake](https://handbrake.fr/) (free)
- [CloudConvert](https://cloudconvert.com/) (online)

### Check File Size
Maximum file size: **5GB**

If your video exceeds this:
- Compress using HandBrake (reduce bitrate)
- Split into multiple shorter videos
- Contact support for temporary limit increase (Business plans)

### Stable Internet
Large uploads need consistent connectivity.
- Use a wired connection if possible
- Avoid uploading on public WiFi
- Don't close the browser tab during upload

### Try a Different Browser
Recommended: **Chrome** (latest version)

If Chrome doesn't work, try Firefox or Edge.

---

## Upload Stuck at Processing

After upload, videos process (transcoding for streaming). This usually takes 1-2 minutes.

### If Processing Takes Too Long (>10 minutes)

1. **Wait up to 30 minutes** for long videos (1+ hour)
2. **Refresh the page** — status may have updated
3. **Check your email** — you'll receive a notification when complete
4. **If still stuck**, delete and re-upload

### Processing Failed

If you see "Processing Failed":
1. Check video format (must be MP4, MOV, WebM)
2. Ensure video isn't corrupted (plays locally)
3. Try re-uploading
4. If it fails again, contact support with the file details

---

## Video Won't Play for Learners

### Browser Issues
1. Ask learner to **refresh the page**
2. Try a **different browser** (Chrome recommended)
3. **Clear browser cache**:
   - Chrome: Settings → Privacy → Clear browsing data
   - Select "Cached images and files"
4. **Disable browser extensions** (ad blockers can interfere)

### Network Issues
1. Check internet connection
2. Try a different network (e.g., mobile data vs. WiFi)
3. Disable VPN if active

### Mobile Issues
1. Ensure device has latest OS updates
2. Try landscape mode for better playback
3. Check available storage (videos may buffer to device)

---

## Video Quality Is Poor

### During Upload
- Upload the highest quality source you have
- Minimum recommended: **1080p (1920x1080)**
- We create multiple quality levels for adaptive streaming

### During Playback
- Quality auto-adjusts based on connection speed
- Click the **gear icon** on the video player
- Select a higher quality manually (720p, 1080p)

### Source Quality Tips
When recording videos:
- Use 1080p or 4K resolution
- Good lighting improves perceived quality
- Avoid heavy compression before upload

---

## Audio Issues

### No Sound
1. Check device volume (not muted)
2. Check browser tab isn't muted (look for speaker icon)
3. Try headphones
4. Refresh the page

### Audio Out of Sync
1. Refresh the page
2. Try a different browser
3. This may indicate a source file issue — check original video

### Audio Quality Poor
- Record with a dedicated microphone
- Reduce background noise
- Check source file audio bitrate (recommend 128kbps+)

---

## Video Buffering / Slow Loading

### For Learners
1. Check internet speed (recommend 10+ Mbps for HD)
2. Lower video quality (gear icon → 480p)
3. Pause and wait for buffer before playing
4. Close other bandwidth-heavy applications

### For All Learners (Course Creator)
If multiple learners report buffering:
- Check our [status page](https://status.unicourse.io) for outages
- Contact support — may indicate CDN issue

---

## Captions / Subtitles

### Adding Captions
1. Edit the video lesson
2. Click **Captions**
3. Upload an SRT or VTT file
4. Select language
5. Save

### Auto-Generated Captions
1. Edit the video lesson
2. Click **Captions → Auto-Generate**
3. Select language
4. Wait for processing (usually 5-10 minutes)
5. Review and edit for accuracy

### Captions Not Showing
1. Ensure captions are enabled (CC button on player)
2. Check that captions were uploaded successfully
3. Try a different browser

---

## Still Having Issues?

If none of the above helps:

1. **Note the video URL** (copy from browser)
2. **Screenshot the error** (if any)
3. **Email support@unicourse.io** with:
   - Video URL
   - Browser and device
   - Description of the issue
   - Screenshots

**Response time:** Within 24 hours (Pro plans: within 4 hours)

---

*Related: [Adding Content](../courses/adding-content.md) | [FAQ](./faq.md)*

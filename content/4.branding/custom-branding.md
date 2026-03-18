# Custom Branding

Make Unicourse your own with logo, colors, and custom domain.

## Brand Settings

Go to **Settings → Branding** to customize your learning platform.

## Logo

Your logo appears in:
- Navigation header
- Login page
- Emails to learners
- Certificates

### Upload Your Logo
1. Go to **Settings → Branding → Logo**
2. Click **Upload Logo**
3. Select your image:
   - Recommended: 200x200px PNG with transparency
   - Max file size: 2MB
4. Preview the placement
5. Click **Save**

### Logo Tips
- Use a square or horizontal logo
- PNG with transparent background works best
- Avoid very detailed logos (they shrink in header)

## Colors

Customize the color scheme to match your brand.

### Primary Color
Used for:
- Buttons and links
- Progress bars
- Active states
- Header accents

### Secondary Color
Used for:
- Backgrounds
- Borders
- Secondary buttons

### Setting Colors
1. Go to **Settings → Branding → Colors**
2. Enter hex codes or use the color picker
3. Preview changes in real-time
4. Click **Save**

## Custom Domain

Use your own domain instead of `yourorg.unicourse.io`.

### Requirements
- You must own the domain
- Access to DNS settings

### Setup Steps

1. **Choose your subdomain**
   - Example: `training.yourcompany.com` or `learn.yourcompany.com`

2. **Add DNS record**
   ```
   Type: CNAME
   Name: training (or your subdomain)
   Value: custom.unicourse.io
   TTL: 3600
   ```

3. **Verify in Unicourse**
   - Go to **Settings → Branding → Custom Domain**
   - Enter your full domain (e.g., `training.yourcompany.com`)
   - Click **Verify Domain**

4. **Wait for SSL**
   - SSL certificate is automatically provisioned
   - Usually takes 10-30 minutes
   - Status shows "Active" when ready

### Troubleshooting

**"DNS not found"**
- Double-check your CNAME record
- Wait 24 hours for DNS propagation

**"SSL pending"**
- Certificates can take up to 24 hours
- Ensure CNAME is correctly configured

## Favicon

The small icon in browser tabs.

1. Go to **Settings → Branding → Favicon**
2. Upload your favicon:
   - Format: ICO, PNG, or SVG
   - Size: 32x32px or 64x64px
3. Click **Save**

## Email Branding

Customize emails sent to learners.

1. Go to **Settings → Branding → Emails**
2. Configure:
   - **From Name** — e.g., "Acme Training"
   - **Reply-To Email** — Where replies go
   - **Logo in emails** — Toggle on/off
   - **Footer text** — Custom message at bottom
3. Click **Save**

Preview any email template to see your branding.

## White Label (Pro Plans)

Remove "Powered by Unicourse" branding.

Available on Pro and Business plans:
- No Unicourse branding in footer
- No Unicourse branding on login
- Custom email sender domain (DKIM/SPF setup required)

Contact support@unicourse.io to enable white-label features.

---

*Related: [Email Templates](./email-templates.md) | [Embed Options](./embed-options.md)*

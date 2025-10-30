
Ad Astra — Full Site (Updated)

Files included:
- index.html
- bots.html
- live.html
- styles.css
- scripts.js
- assets/astracore-placeholder.png
- README.txt (this file)

What I added:
- Floating Discord widget using the iframe you provided (appears on wide screens).
- New Live page that includes sections for YouTube, SoundCloud, and Twitch/Kick.
- scripts.js populates the Live page with sample embeds. Replace sample IDs/URLs with real ones or wire up APIs.
- Invite button on AstraCore links to a placeholder OAuth invite (replace CLIENT_ID with your bot's client id).

How to auto-populate Live content (recommended next steps):
1) YouTube: Create a Google Cloud project, enable YouTube Data API v3, and fetch search results for q="#adAstra". Use the video's IDs to populate the ytSamples array in scripts.js. Remember to secure your API key server-side or proxy requests.
2) SoundCloud: Use SoundCloud's API or oEmbed endpoints to get tracks tagged with #adAstra.
3) Twitch/Kick: Use Twitch Search API for streams that include "#adAstra" in title or tags. Kick may require scraping or a third-party API.
4) On production domains, update the Twitch embed 'parent' parameter to match your domain (required by Twitch embed policy).

Deploying:
- This is static HTML/CSS/JS and can be hosted on GitHub Pages, Netlify, or Vercel. If you need server-side API proxying, use a small Node/Express or serverless function to hide API keys.

Notes:
- Replace the discord widget ID or iframe if you want different settings.
- Update sample IDs in scripts.js to show real content.
- If you want, I can implement serverless endpoints to fetch YouTube/Twitch results and populate the Live page automatically.

— Baby Vaun / Assistant

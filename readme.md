# Hookcord.js
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![Npm package total downloads](https://badgen.net/npm/dt/webhook.js)](https://npmjs.com/package/webhook.js) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Slyrith/Webhook.js/blob/main/LICENSE) [![Latest release](https://badgen.net/github/release/Naereen/Strapdown.js)](https://github.com/Slyrith/Webhook.js/releases) [![Discord](https://badgen.net/discord/members/pQBRrAQw4H)](https://discord.gg/pQBRrAQw4H)

Send webhook message on discord easily!

### Example

```js
const Hookcord = require('Hookcord.js');

const wb = new Hookcord({
    name: "Webhook name",
    token: "webhook token",
    id: "webhook id",
    avatar: "avatar link"
  });

// Send webhook message
wb.send("hi");


// Delete webhook message
wb.delete("1054816551527780483");
```

### TODO
- [ ] Embeds
- [ ] Attachments
- [ ] TTS

const axios = require('axios');
const colors = require('colors');

class Webhook {
    constructor(options) {
        if (!options.name) throw new Error('Please provide webhook name')
            this.name = options.name;
        if (!options.token) throw new Error('Please provide webhook token');
            this.token = options.token;
        if (!options.id) throw new Error('Please provide webhook id');
            this.id = options.id;
        if (!options.avatar) throw new Error('Please provide webhook avatar');
            this.avatar = options.avatar;
            this.base = "https://discord.com/api/v9";
            this.auth = { headers: { 'authorization': this.token } };
    }

    async send(message) {
        let msg = { content: message, username: this.name, avatar_url: this.avatar };
        const u = `${this.base}/webhooks/${this.id}/${this.token}`;
        try {
          const response = await axios.post(u, msg);
          console.log(colors.green.underline.bold("Success! ✔"));
          console.log(colors.bold.underline(`${this.name}:`) + " " + message);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      }
    
    async delete(message_id) {
        const u = `${this.base}/webhooks/${this.id}/${this.token}/messages/${message_id}`;
        try {
            const response = await axios.delete(u, this.auth);
            console.log(colors.green.underline.bold("Success! ✔"));
            return response.data;
        } catch (error) {
            console.error(error);
          }
    }
  }

  module.exports = Webhook;
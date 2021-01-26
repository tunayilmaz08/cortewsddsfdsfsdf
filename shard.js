const { ShardingManager } = require('discord.js');
const settings = require('./ayarlar.json');

const manager = new ShardingManager('./bot.js', { token: settings.token, totalShards: 'auto'});

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
const mineflayer = require('mineflayer');

const config = {
  host: 'localhost',
  port: 25565,
  username: 'NPC_Actor',
  auth: 'offline' // For TLauncher / offline mode server
};

function createBot() {
  console.log(`[NPC] Connecting to ${config.host}:${config.port} as ${config.username}...`);
  const bot = mineflayer.createBot(config);

  // Helper utility to pause execution
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  bot.on('spawn', async () => {
    console.log('[NPC] Spawned in the server!');
    await sleep(2000);
    
    // Start the movie loop
    playMovie(bot);
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    console.log(`[Chat] <${username}> ${message}`);
    
    // Simple response if someone talks to it
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      bot.chat(`Hello ${username}! I am recording my movie scene.`);
    }
  });

  bot.on('kicked', (reason) => {
    console.log(`[NPC] Kicked from server: ${reason}`);
  });

  bot.on('end', () => {
    console.log('[NPC] Disconnected from server. Reconnecting in 10 seconds...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.error('[NPC] Error occurred:', err);
  });
}

async function playMovie(bot) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  while (bot.entity) {
    try {
      console.log('[Movie] Action! Walking forward...');
      bot.setControlState('forward', true);
      await sleep(2000);
      bot.setControlState('forward', false);

      console.log('[Movie] Looking around...');
      await bot.look(Math.PI / 2, 0); // Look left
      await sleep(1000);
      await bot.look(-Math.PI / 2, 0); // Look right
      await sleep(1000);
      await bot.look(0, 0); // Look straight ahead
      await sleep(500);

      console.log('[Movie] Jumping!');
      bot.setControlState('jump', true);
      await sleep(500);
      bot.setControlState('jump', false);
      await sleep(500);

      console.log('[Movie] Sneaking...');
      bot.setControlState('sneak', true);
      await sleep(1500);
      bot.setControlState('sneak', false);
      await sleep(500);

      console.log('[Movie] Swinging arm...');
      bot.swingArm('right');
      await sleep(500);
      bot.swingArm('right');
      await sleep(500);

      console.log('[Movie] Saying something...');
      bot.chat('Action! Recording my scene...');
      await sleep(3000);

      console.log('[Movie] Walking backwards...');
      bot.setControlState('back', true);
      await sleep(1500);
      bot.setControlState('back', false);

      console.log('[Movie] Taking a break. Scene loop ends.');
      await sleep(5000);

    } catch (err) {
      console.error('[Movie] Error during scene play:', err);
      break;
    }
  }
}

// Start the bot
createBot();

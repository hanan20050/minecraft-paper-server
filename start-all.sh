#!/bin/bash
cd "$(dirname "$0")"

echo "Launching Minecraft Server and Playit Remote Tunnel..."

# Open Minecraft Server in a new Terminal window
osascript -e 'tell app "Terminal" to do script "cd /Users/hanansaleh/Documents/GitHub/minecraft-paper-server && ./start.sh"'

# Wait a brief moment
sleep 1

# Open Playit Tunnel in another Terminal window
osascript -e 'tell app "Terminal" to do script "cd /Users/hanansaleh/Documents/GitHub/minecraft-paper-server && ./start-playit.sh"'

echo "Done! Both windows are now open on your screen."

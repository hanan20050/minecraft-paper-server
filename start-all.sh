#!/bin/bash
cd "$(dirname "$0")"

echo "Launching Minecraft 26.2 Server and Remote Tunnel..."

# Open Minecraft 26.2 Server in a new Terminal window
osascript -e 'tell app "Terminal" to do script "cd /Users/hanansaleh/Downloads/minecraft-server-26.2 && ./start.sh"'

# Wait a brief moment
sleep 1

# Open Bore Tunnel in another Terminal window
osascript -e 'tell app "Terminal" to do script "cd /Users/hanansaleh/Downloads/minecraft-server-26.2 && ./start-ngrok.sh"'

echo "Done! Both windows are now open on your screen."

#!/bin/bash
cd "$(dirname "$0")"

echo "=== Minecraft 26.2 Remote Multiplayer Tunnel (ngrok) ==="
echo "Starting tunnel on port 25565..."
echo "To share your server with friends:"
echo "1. Start your Minecraft server by running ./start.sh"
echo "2. Look at the output below or check server_address.txt to find the port number assigned to you."
echo "3. Give that address to your friends to enter in TLauncher."
echo ""
echo "Press Ctrl+C to stop the tunnel."
echo "---------------------------------------------------"
./ngrok tcp 25565

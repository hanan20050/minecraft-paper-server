#!/bin/bash
cd "$(dirname "$0")"

echo "=== Minecraft 26.2 Remote Multiplayer Tunnel (bore) ==="
echo "Starting tunnel on port 25565..."
echo "To share your server with friends:"
echo "1. Start your Minecraft server by running ./start.sh"
echo "2. Look at the output below to find the port number assigned to you."
echo "   (e.g., 'bore.pub:12345')"
echo "3. Give that address to your friends to enter in TLauncher."
echo ""
echo "Press Ctrl+C to stop the tunnel."
echo "---------------------------------------------------"
./bore local 25565 --to 159.223.110.159 | tee bore.log

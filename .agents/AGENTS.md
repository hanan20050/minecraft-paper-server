# Minecraft Server Project Rules

- Always gracefully shut down the Minecraft server (by sending `/stop` or `/save-all`) to save all world data and player inventories before restarting or closing. Only use force-terminate (`pkill -9`) or process killing as a last resort if a process is completely frozen.
- Never stop or restart the Minecraft server or tunnel processes without first asking the user for permission.

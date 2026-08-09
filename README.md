# Minecraft Paper Server

This repository contains the configuration, plugins, and startup scripts for a Minecraft server running on the Paper platform.

## Features

- **Paper Platform**: High-performance Minecraft server implementation.
- **Port Forwarding Integrations**: Setup for multiple tunneling services including:
  - Playit.gg (`start-playit.sh`)
  - Ngrok (`start-ngrok.sh`)
  - Bore (`start-bore.sh`)
- **Automated Startup**: Use `start.sh` or `start-all.sh` to run the server.

## Getting Started

1. Ensure JDK 25 is installed.
2. Configure `server.properties` and other configuration files as needed.
3. Run the startup script for your preferred integration:
   ```bash
   ./start-playit.sh
   ```

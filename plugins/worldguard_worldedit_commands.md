# WorldGuard & WorldEdit Commands Reference Cheat Sheet

This file serves as a reference for common commands used with the WorldGuard and WorldEdit plugins on your Minecraft server.

---

## 🛡️ WorldGuard Commands

WorldGuard is used to protect server areas (regions) from griefing and control build/interact permissions.

### Region Management
*   **Define a new region**:
    `rg define <region_name>` (creates a region based on your active WorldEdit selection).
*   **Redefine an existing region**:
    `rg redefine <region_name>` (updates the boundaries of a region to match your current WorldEdit selection).
*   **Delete/remove a region**:
    `rg delete -w "world" <region_name>` (deletes the region from the specified world).
*   **List all regions**:
    `rg list -w "world"` (lists all defined regions in that world).
*   **Show region information**:
    `rg info -w "world" <region_name>` (shows details about a region, including flags and owners/members).

### Region Membership & Ownership
*   **Add Owner**:
    `rg addowner -w "world" <region_name> <player>`
*   **Remove Owner**:
    `rg removeowner -w "world" <region_name> <player>`
*   **Add Member**:
    `rg addmember -w "world" <region_name> <player>`
*   **Remove Member**:
    `rg removemember -w "world" <region_name> <player>`

### Region Flags
Flags are rules that apply inside a region (e.g. build allow/deny, chest access allow/deny).
*   **Set a flag**:
    `rg flag -w "world" <region_name> <flag_name> <value>`
*   **Common Flags**:
    *   `build` (allow/deny): Controls building and block breaking.
    *   `pvp` (allow/deny): Controls player vs. player combat.
    *   `chest-access` (allow/deny): Controls opening chests.
    *   `use` (allow/deny): Controls doors, buttons, levers, and pressure plates.

### General WorldGuard
*   **Reload WorldGuard configuration**:
    `wg reload`
*   **Toggle region bypass**:
    `/wg bypass` (temp toggle to bypass region protection for admins).

---

## 🛠️ WorldEdit Commands

WorldEdit is used for quick block generation, editing, and large-scale terraforming.

### Selection Commands
*   **Get selection wand**:
    `//wand` (gives you a wooden axe by default to set Position 1 with Left Click, Position 2 with Right Click).
*   **Set positions manually**:
    *   `//pos1` (sets Position 1 at your feet).
    *   `//pos2` (sets Position 2 at your feet).
    *   `//hpos1` (sets Position 1 at the block you are looking at).
    *   `//hpos2` (sets Position 2 at the block you are looking at).
*   **Expand selection**:
    `//expand <amount> <direction>` (e.g., `//expand 5 up` or `//expand 10 north`).
*   **Contract selection**:
    `//contract <amount> <direction>`.
*   **Select entire chunk**:
    `//chunk`.

### Block Modification
*   **Set block type**:
    `//set <block_type>` (e.g., `//set stone` or `//set air`).
*   **Replace blocks**:
    *   `//replace <to_block>` (replaces all non-air blocks in selection).
    *   `//replace <from_block> <to_block>` (replaces specific blocks, e.g., `//replace dirt stone`).
*   **Create walls/borders**:
    *   `//walls <block_type>` (builds walls around your selection).
    *   `//faces <block_type>` (builds walls, ceiling, and floor around selection).
*   **Undo/Redo**:
    *   `//undo` (reverts your last WorldEdit action).
    *   `//redo` (restores your last undone action).

### Clipboard (Copy / Paste)
*   **Copy selection**:
    `//copy` (copies selection relative to your current player position).
*   **Paste copied blocks**:
    `//paste` (pastes relative to your current player position).
*   **Rotate clipboard**:
    `//rotate <y-angle>` (rotates 90, 180, or 270 degrees).
*   **Flip clipboard**:
    `//flip <direction>`.

### Generation
*   **Cylinder**:
    *   `//cyl <block> <radius> <height>` (filled cylinder).
    *   `//hcyl <block> <radius> <height>` (hollow cylinder).
*   **Sphere**:
    *   `//sphere <block> <radius>` (filled sphere).
    *   `//hsphere <block> <radius>` (hollow sphere).

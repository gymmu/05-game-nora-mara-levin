import { k, addGeneralGameLogic } from "../game.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"
import createPlayer, { getPlayer } from "../player.js"

import "./finish.js"
import { TILESIZE } from "../globals.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-02", async () => {
  k.setGravity(0)

  //createPlayer()

  loadKeyboardRPG()

  await generateMapRPG("maps/level-02.txt")

  addGeneralGameLogic()

  const player = getPlayer()
  player.speed = 5 * TILESIZE

  k.onCollide("player", "cave", (player) => {
    if (player.hasFlower === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "cloud", (player, cloud) => {
    // cloud.destroy()
    player.pos.x = 38 * TILESIZE
    player.pos.y = 18 * TILESIZE
    player.speed += TILESIZE
  })

  k.onCollide("player", "flower", (player, flower) => {
    flower.destroy()
    player.hasFlower = true
  })
})

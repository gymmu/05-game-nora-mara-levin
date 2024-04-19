import { k } from "../game.js"
import { getPlayer } from "../player.js"
import "./intro.js"

/**
 * Dies ist eine weitere Szene die angezeigt wird wenn das Spiel vorbei bzw.
 * gewonnen ist.
 */
k.scene("finish", () => {
  const player = getPlayer()
  const numEggs = player.eggs_collected
  player.destroy()
  k.add([
    k.text(
      "Sie haben " +
        numEggs +
        " Eier gesammelt\nund dem Osterhasen dabei geholfen, sein Ziel zu erreichen",
      {
        size: 32,
        font: "sinko",
      },
    ),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center"),
  ])

  k.onKeyPress("space", () => {
    k.go("intro")
  })
})

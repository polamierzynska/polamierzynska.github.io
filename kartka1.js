import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","merrychristmas.png")



add([
    sprite("kartka"),
    pos(0,0)
])


loadSprite("kartka","gwiazda.png")
add([sprite("kartka"),
pos(0,0)
])
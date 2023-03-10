import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","merrychristmas.png")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka", "koleda.mp3")


add([
    sprite("kartka"),
    pos(0,0)
])

const gwiazda = add([sprite("gwiazda"),
    pos(0,30)
])

add([play("muzyka")])


onUpdate(()=>{

    if(gwiazda.pos.x < 500)

    gwiazda.pos.x=gwiazda.pos.x+1

    else gwiazda.pos.x=0
})
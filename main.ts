input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(60578)
})

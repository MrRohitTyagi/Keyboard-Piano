const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['a', 's', 'j', 'k', 'l']
const ARROW_Keys = ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'] 
let count = 0;

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const ArrowKeys = document.querySelectorAll('.cord')

keys.forEach(key => {
  
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)
  const ArrowKeyIndex = ARROW_Keys.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
  if (ArrowKeyIndex > -1) playNote(ArrowKeys[ArrowKeyIndex])
})

  function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  

  key.classList.add('active')
  
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
    
  })
  
}
let checkboxflag = false
//guitar
let AddButton = document.querySelector('#AB')
let RemoveButton = document.querySelector('#RB')

let guitardisplay = document.querySelector('.full-guitar')

AddButton.addEventListener('click',function(e){

  checkboxflag = !checkboxflag ;
  guitardisplay.style.display = 'flex'
  
})
RemoveButton.addEventListener('click',function(e){

  checkboxflag = !checkboxflag ;
  guitardisplay.style.display = 'none'
  
})


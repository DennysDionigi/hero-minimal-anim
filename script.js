let hero = document.querySelector('[data-text]')

let movecircle = function (e) {
  let { clientX, clientY } = e
  let x = Math.round((clientX / window.innerWidth) * 100)
  let y = Math.round((clientY / window.innerHeight) * 100)  
  hero.style.setProperty('--x', `${x}%`)
  hero.style.setProperty('--y', `${y}%`)
};

['mousemove','pointermove'].forEach( e => 
    window.addEventListener(e, movecircle, false)
);

/*extra styling*/

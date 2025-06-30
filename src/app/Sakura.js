export function startSakura() {
  const canvas = document.getElementById('sakura-canvas')
  const ctx = canvas.getContext('2d')
  let width, height
  let petals = []

  function resize() {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }

  function createPetal() {
    return {
      x: Math.random() * width,
      y: Math.random() * -height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 100,
      color: `rgba(255,255,255,${Math.random()})`
    }
  }

  function initPetals(num = 50) {
    petals = []
    for (let i = 0; i < num; i++) {
      petals.push(createPetal())
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height)
    petals.forEach(p => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.fill()
    })
    update()
  }

  function update() {
    petals.forEach(p => {
      p.y += 1
      p.x += Math.sin(p.d) * 0.5
      if (p.y > height) {
        p.y = -10
        p.x = Math.random() * width
      }
    })
  }

  function animate() {
    draw()
    requestAnimationFrame(animate)
  }

  resize()
  initPetals(80)
  animate()
  window.addEventListener('resize', resize)
}

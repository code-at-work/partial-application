
function toHex(v) {
  return ("0" + v.toString(16)).slice(-2).toUpperCase()
}

function rgb(r, g, b) {
  return "#" + [r,g,b].map(toHex).join("")
}

module.exports = rgb

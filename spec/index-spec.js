const rgb = require('../src')

describe("Partial Application", () => {
  it("should return the HTML code", () => {
    expect(rgb(255,255,255)).toEqual("#FFFFFF")
  })

  it("", () => {
    const shades_of_blue = (b) => rgb(0, 0, b)

    expect(shades_of_blue(128)).toEqual("#000080")
  })

  it("", () => {
    const shades_of_blue = rgb.bind(null, 0, 0)

    expect(shades_of_blue(255)).toEqual("#0000FF")
  })

  it("", () => {
    const no_red = rgb.bind(null, 0)

    expect(no_red(128, 255)).toEqual("#0080FF")
  })

  it("", () => {
    let i = [0, 128, 255]

    const shades_of_blue = rgb.bind(null, 0, 0)

    expect(i.map(shades_of_blue)).toEqual([
      "#000000",
      "#000080",
      "#0000FF",
    ])
  })
})

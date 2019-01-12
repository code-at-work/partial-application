# Partial Application

Here the video: [https://youtu.be/Tm7DOtet_U4](https://youtu.be/Tm7DOtet_U4)

```js
rgb(255,255,255) // #FFFFFF

// Partial Application in JS
const shades_of_blue = rgb.bind(null, 0, 0)

shades_of_blue(128) // #000080
```

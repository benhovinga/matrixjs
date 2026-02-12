# MatrixJS

This is a simple script to display [The Matrix](https://en.wikipedia.org/wiki/The_Matrix) rain animation.

## Customization

Use the [url query string](https://en.wikipedia.org/wiki/Query_string) to change the colors and font size.

**Example:** Makes the font small and red, with a white background, running fast, and with a quick fade.

```
index.html?size=10&bg=fff&fg=F00&speed=10&alpha=0.2
```

### Font Size

Set the `size` field to a number. This number is represented in px.

Default = 18

### Font Color

Set the `fg` field to a hex color (shorthand is also supported).

Default = 00FF00

### Background Color

Set the `bg` field to a hex color (shorthand is also supported).

Default = 000000

### Background Alpha

Set the `alpha` field to a float. Higher value fades the text faster.

Default = 0.05

### Speed

Set the `speed` field to a number. Lower = faster

Default = 40

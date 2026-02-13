# MatrixJS

This is a simple script to display [The Matrix](https://en.wikipedia.org/wiki/The_Matrix) rain animation.

## Customization

Use the [url query string](https://en.wikipedia.org/wiki/Query_string) to change the colors and font size.

**Example:** Makes the font small and red, with a white background, running fast, and with a quick fade.

```
?size=10&bg=fff&fg=F00&speed=10&alpha=0.2
```

| Property Name    | Query Field | Default Value | Notes                                           |
|------------------|-------------|---------------|-------------------------------------------------|
| Font Size        | `size`      | `18`          | Pixels (px)                                     |
| Font Color       | `fg`        | `00FF00`      | Hex color code (shorthand is also supported)    |
| Background Color | `bg`        | `000000`      | Hex color code (shorthand is also supported)    |
| Background Alpha | `alpha`     | `0.05`        | Float. Higher value fades the text faster       |
| Speed            | `speed`     | `40`          | Delay in ms between layers. Lower is faster     |

## Live Demo

Default settings: https://benhovinga.github.io/matrixjs/

Other examples:

1. https://benhovinga.github.io/matrixjs/?size=10&bg=fff&fg=F00&speed=10&alpha=0.2
2. https://benhovinga.github.io/matrixjs/?size=24&alpha=0.1&fg=9FF
3. https://benhovinga.github.io/matrixjs/?size=24&alpha=0.1&fg=F4F&speed=90
4. https://benhovinga.github.io/matrixjs/?size=32&alpha=0.1&fg=FF5&speed=70
5. https://benhovinga.github.io/matrixjs/?size=24&alpha=0.2&fg=9FF&bg=505

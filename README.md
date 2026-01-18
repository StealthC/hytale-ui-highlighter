# Hytale UI Syntax Highlighter

Syntax highlighting and language support for **Hytale `.ui` configuration files** in Visual Studio Code.

## Features

✨ **Syntax Highlighting**
- Variables (`$Variable`)
- Component templates (`@TemplateName`)
- Element IDs (`#ElementId`)
- Internationalization keys (`%i18n.key`)
- Hex colors (`#RRGGBB`)
- Comments and strings

🎨 **Dark Theme**
- Optimized color scheme for `.ui` files
- Proper contrast for readability
- Consistent with VS Code dark theme

📝 **Language Configuration**
- Auto-closing brackets and quotes
- Smart indentation
- Bracket matching
- Comment toggling with `Ctrl+/`

## Installation

1. Search for "Hytale UI Syntax Highlighter" in VS Code Extensions
2. Click Install
3. `.ui` files will automatically be highlighted

Or install directly from the command line:
```bash
code --install-extension StealthC.hytale-ui-highlighter
```

## Development

### Setup

```bash
git clone https://github.com/StealthC/hytale-ui-highlighter.git
cd hytale-ui-highlighter
```

### File Structure

```
├── syntaxes/
│   └── hytale-ui.tmLanguage.json    # TextMate grammar
├── themes/
│   └── hytale-ui-dark.json          # Color theme
├── language-configuration/
│   └── hytale-ui-language-configuration.json
├── package.json
└── README.md
```

### Testing

Open the project in VS Code and press `F5` to open a new window with the extension loaded.

### Publishing

```bash
npm install -g @vscode/vsce
vsce publish
```

## Grammar Details

The grammar recognizes Hytale UI configuration syntax:

```ui
// Variables
$C = "../Common.ui";

// Templates and components
$C.@PageOverlay {}

// Component with ID
Group #TabBar {
  LayoutMode: Top;
  
  // Element properties
  TextButton #SearchButton {
    Anchor: (Width: 100, Height: 28);
    Style: (...);
    Text: %stealthc.trademarket.gui.searchItems;
  }
}
```

### Token Types

| Token | Example | Color |
|-------|---------|-------|
| Variable | `$C` | Blue |
| Template | `@PageOverlay` | Orange |
| ID | `#TabBar` | Red |
| Component | `TextButton` | Cyan |
| I18n Key | `%stealthc.trademarket.gui.searchItems` | Magenta |
| Hex Color | `#4a6a4a` | Orange (bold) |
| Comment | `// Comment` | Green (italic) |
| String | `"text"` | Orange |
| Number | `100`, `28` | Green |
| Boolean | `true`, `false` | Cyan (bold) |

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

StealthC - [GitHub](https://github.com/StealthC)

---

For more information about Hytale, visit [hytale.com](https://hytale.com)

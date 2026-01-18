# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-18

### Added
- Initial release of Hytale UI Syntax Highlighter
- TextMate grammar for `.ui` file syntax highlighting
  - Variable syntax (`$Variable`)
  - Template definitions (`@TemplateName`)
  - Element IDs (`#ElementId`)
  - Function calls (`FunctionName(...)`)
  - Spread operator (`...`)
  - Dot notation access (`$var.@property`)
  - Internationalization keys (`%i18n.key`)
  - Hex color literals (`#RRGGBB`)
  - Comments (`//`)
  - Strings and numbers
- Dark theme optimized for `.ui` files
  - Color-coded syntax highlighting
  - Proper contrast for readability
- Language configuration for `.ui` files
  - Auto-closing brackets and quotes
  - Smart indentation based on nesting
  - Bracket matching
  - Line comment toggling with `Ctrl+/`
- Document formatter for `.ui` files
  - Automatic indentation formatting
  - Bracket-aware indentation
  - Clean formatting on demand (`Shift+Alt+F`)
- Full support for Hytale UI configuration syntax
  - Templates and inheritance patterns
  - Styling definitions
  - Component nesting
  - Custom themes and overrides

### Features
✨ **Syntax Highlighting** - Complete coverage of Hytale `.ui` syntax
🎨 **Dark Theme** - Optimized color scheme for `.ui` files
📝 **Language Support** - Full language configuration
🔧 **Auto-formatter** - Document formatting support
⌨️ **Smart Editing** - Auto-closing pairs and bracket matching

---

## Future Enhancements

- [ ] IntelliSense/autocomplete for common properties
- [ ] Hover documentation for built-in functions
- [ ] Validation for color format and syntax
- [ ] Snippets for common UI patterns
- [ ] Debugging support
- [ ] Light theme variant

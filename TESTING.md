# Guia de Teste - Autocomplete

## Como Testar o Autocomplete

1. **Pressione F5** no VS Code para abrir uma nova janela de desenvolvimento
2. Abra o arquivo `test-autocomplete.ui`
3. Teste os seguintes cenários:

### Teste 1: Autocomplete de Elementos
- Digite uma nova linha vazia
- Digite `Gro` e pressione `Ctrl+Space`
- **Resultado esperado**: Deve sugerir `Group` com snippet `Group { }`

### Teste 2: Autocomplete de Propriedades
- Dentro de um elemento `Group {}`
- Digite `Anc` e pressione `Ctrl+Space`
- **Resultado esperado**: Deve sugerir `Anchor: ()` com cursor dentro dos parênteses

### Teste 3: Autocomplete de Valores
- Após uma propriedade `LayoutMode:`
- Pressione `Ctrl+Space`
- **Resultado esperado**: Deve mostrar opções como `Top`, `Left`, `Center`, `Middle`, etc.

### Teste 4: Autocomplete de Funções
- Digite `Style: `
- Digite `Label` e pressione `Ctrl+Space`
- **Resultado esperado**: Deve sugerir `LabelStyle()` com parâmetros

### Teste 5: Autocomplete Automático
- Digite `:` após uma propriedade
- **Resultado esperado**: Deve mostrar autocomplete automaticamente (sem precisar Ctrl+Space)

### Teste 6: Subpropriedades
- Dentro de `Anchor: ()`
- Digite `Wid`
- **Resultado esperado**: Deve sugerir `Width:`, `Height:`, etc.

## Elementos Disponíveis para Autocomplete

- Group
- Label
- Button
- TextButton
- ItemGrid
- ItemSlot
- ItemSlotButton
- TextField
- MultilineTextField
- CompactTextField
- NumberField
- FloatSlider
- Slider
- CheckBox
- DropdownBox
- FileDropdownBox
- ColorPickerDropdownBox
- Sprite
- BackButton
- SceneBlur

## Propriedades Mais Comuns

- Anchor (Width, Height, Top, Bottom, Left, Right)
- LayoutMode (Top, Left, Center, Middle, etc.)
- Background
- Padding (Full, Horizontal, Vertical)
- Style
- Text
- Visible
- FlexWeight
- Disabled

## Funções de Estilo

- PatchStyle(TexturePath, Border, HorizontalBorder, VerticalBorder)
- LabelStyle(FontSize, TextColor, Alignment, RenderBold, etc.)
- ButtonStyle(Default, Hovered, Pressed, Disabled, Sounds)
- TextButtonStyle(Default, Hovered, Pressed, Disabled, Sounds)
- InputFieldStyle(TextColor, FontSize, Alignment)
- ScrollbarStyle(Spacing, Size, Background, Handle)
- SliderStyle(Background, Handle, HandleWidth, HandleHeight)

## Notas

- O autocomplete é **context-aware**: ele só sugere propriedades e valores relevantes
- Usa **snippets** para facilitar a inserção de código complexo
- Suporta **tab stops** para navegação rápida entre parâmetros
- Funciona com **triggers automáticos** em `:`, `{`, `(`, `,`, e espaço

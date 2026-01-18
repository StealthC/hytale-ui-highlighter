import * as vscode from 'vscode';

// Type definitions for UI data
interface PropertyData {
  description: string;
  subproperties?: string[];
  values?: string[];
}

interface FunctionData {
  name: string;
  params: string[];
}

interface AlignmentValues {
  horizontal: string[];
  vertical: string[];
}

interface UIDataStructure {
  elements: string[];
  properties: Record<string, PropertyData>;
  functions: FunctionData[];
  labelStyleProperties: string[];
  alignmentValues: AlignmentValues;
}

// Data extracted from analyzing all .ui files in the Hytale server
const UI_DATA: UIDataStructure = {
  elements: [
    'Group', 'Label', 'Button', 'TextButton', 'ItemGrid', 'ItemSlot',
    'ItemSlotButton', 'TextField', 'MultilineTextField', 'CompactTextField',
    'NumberField', 'FloatSlider', 'Slider', 'CheckBox', 'DropdownBox',
    'FileDropdownBox', 'ColorPickerDropdownBox', 'Sprite', 'BackButton', 'SceneBlur'
  ],
  
  properties: {
    'Anchor': {
      description: 'Positioning and sizing constraints',
      subproperties: ['Width', 'Height', 'Top', 'Bottom', 'Left', 'Right', 'Horizontal', 'Vertical', 'Full']
    },
    'LayoutMode': {
      description: 'How children are arranged',
      values: ['Top', 'Left', 'Center', 'Middle', 'Right', 'Bottom', 'TopScrolling', 
               'LeftCenterWrap', 'CenterMiddle', 'MiddleCenter', 'Full', 'LeftScrolling']
    },
    'Background': {
      description: 'Background styling (color, texture, or patch style)'
    },
    'Padding': {
      description: 'Inner spacing',
      subproperties: ['Full', 'Horizontal', 'Vertical', 'Top', 'Bottom', 'Left', 'Right']
    },
    'Style': {
      description: 'Element-specific styling'
    },
    'Text': {
      description: 'Display text or localization key (use % for i18n keys)'
    },
    'Visible': {
      description: 'Visibility toggle',
      values: ['true', 'false']
    },
    'FlexWeight': {
      description: 'Proportional sizing weight (0-1)'
    },
    'Disabled': {
      description: 'Disabled state for interactive elements',
      values: ['true', 'false']
    },
    'ScrollbarStyle': {
      description: 'Style for scrollable containers'
    },
    'HitTestVisible': {
      description: 'Whether element receives mouse events',
      values: ['true', 'false']
    },
    'PlaceholderText': {
      description: 'Placeholder text for input fields'
    },
    'PlaceholderStyle': {
      description: 'Style for placeholder text'
    },
    'MaxLength': {
      description: 'Maximum character length for text inputs'
    },
    'Value': {
      description: 'Current value for inputs'
    },
    'Min': {
      description: 'Minimum value for sliders/number fields'
    },
    'Max': {
      description: 'Maximum value for sliders/number fields'
    },
    'Step': {
      description: 'Increment step for numeric inputs'
    },
    'Format': {
      description: 'Formatting options for number fields',
      subproperties: ['MaxDecimalPlaces', 'Step', 'MinValue', 'MaxValue']
    },
    'SlotsPerRow': {
      description: 'Slots per row in item grids'
    },
    'ShowQualityBackground': {
      description: 'Show item quality overlay',
      values: ['true', 'false']
    },
    'ShowQuantity': {
      description: 'Show item quantity',
      values: ['true', 'false']
    },
    'TexturePath': {
      description: 'Path to texture image'
    },
    'Frame': {
      description: 'Sprite frame configuration',
      subproperties: ['Width', 'Height', 'PerRow', 'Count']
    },
    'FramesPerSecond': {
      description: 'Animation speed for sprites'
    },
    'AutoGrow': {
      description: 'Auto-grow for multiline text fields',
      values: ['true', 'false']
    },
    'CollapsedWidth': {
      description: 'Width when collapsed (CompactTextField)'
    },
    'ExpandedWidth': {
      description: 'Width when expanded (CompactTextField)'
    },
    'Decoration': {
      description: 'Input field decorations (icons, clear buttons)'
    },
    'Sounds': {
      description: 'Sound effects for interactions',
      subproperties: ['Activate', 'MouseHover', 'Context', 'Close', 'SoundPath', 'Volume', 'MinPitch', 'MaxPitch']
    },
    'MaskTexturePath': {
      description: 'Path to mask texture for effects'
    },
    'Border': {
      description: 'Border size for patch styles'
    },
    'HorizontalBorder': {
      description: 'Horizontal border size'
    },
    'VerticalBorder': {
      description: 'Vertical border size'
    },
    'Color': {
      description: 'Color value in hex format (#RRGGBB or #RRGGBB(alpha))'
    },
    'Opacity': {
      description: 'Opacity value (0-1)'
    }
  },

  functions: [
    { name: 'PatchStyle', params: ['TexturePath', 'Border', 'HorizontalBorder', 'VerticalBorder'] },
    { name: 'LabelStyle', params: ['FontSize', 'TextColor', 'HorizontalAlignment', 'VerticalAlignment', 'RenderBold', 'RenderUppercase', 'Wrap', 'LetterSpacing', 'FontName', 'Alignment'] },
    { name: 'ButtonStyle', params: ['Default', 'Hovered', 'Pressed', 'Disabled', 'Sounds'] },
    { name: 'TextButtonStyle', params: ['Default', 'Hovered', 'Pressed', 'Disabled', 'Sounds'] },
    { name: 'InputFieldStyle', params: ['TextColor', 'FontSize', 'Alignment'] },
    { name: 'CheckBoxStyle', params: ['Unchecked', 'Checked'] },
    { name: 'DropdownBoxStyle', params: ['DefaultBackground', 'HoveredBackground', 'PressedBackground'] },
    { name: 'FileDropdownBoxStyle', params: ['DefaultBackground', 'HoveredBackground', 'PressedBackground'] },
    { name: 'ColorPickerStyle', params: ['OpacitySelectorBackground', 'ButtonBackground', 'ButtonFill'] },
    { name: 'ColorPickerDropdownBoxStyle', params: ['ColorPickerStyle', 'Background', 'ArrowBackground'] },
    { name: 'ScrollbarStyle', params: ['Spacing', 'Size', 'Background', 'Handle', 'HoveredHandle', 'DraggedHandle', 'OnlyVisibleWhenHovered'] },
    { name: 'SliderStyle', params: ['Background', 'Handle', 'HandleWidth', 'HandleHeight', 'Sounds'] },
    { name: 'TabNavigationStyle', params: ['TabStyle', 'SelectedTabStyle', 'SeparatorAnchor', 'SeparatorBackground'] },
    { name: 'TabStateStyle', params: ['Background', 'Overlay', 'IconAnchor', 'Anchor', 'IconOpacity'] },
    { name: 'PopupMenuLayerStyle', params: ['Background', 'Padding', 'MaxWidth', 'TitleStyle'] },
    { name: 'TextTooltipStyle', params: ['Background', 'MaxWidth', 'LabelStyle', 'Padding'] },
    { name: 'DropdownBoxSounds', params: ['Activate', 'MouseHover', 'Context', 'Close'] },
  ],

  labelStyleProperties: [
    'FontSize', 'TextColor', 'HorizontalAlignment', 'VerticalAlignment',
    'RenderBold', 'RenderUppercase', 'Wrap', 'LetterSpacing', 'FontName', 'Alignment'
  ],

  alignmentValues: {
    horizontal: ['Start', 'Center', 'End', 'Left', 'Right'],
    vertical: ['Top', 'Center', 'Middle', 'Bottom']
  }
};

export class HytaleUICompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[]> {
    const linePrefix = document.lineAt(position).text.substring(0, position.character);
    const activeProperty = this.getActivePropertyContext(document, position);
    const items: vscode.CompletionItem[] = [];

    // Check what kind of completion to provide based on context
    
    // 1. Element types (at start of line or after opening brace)
    if (this.shouldProvideElementCompletion(linePrefix)) {
      items.push(...this.getElementCompletions());
    }

    // 2. Properties (after element or inside object)
    if (this.shouldProvidePropertyCompletion(linePrefix)) {
      items.push(...this.getPropertyCompletions(activeProperty));
    }

    // 3. Style functions
    if (this.shouldProvideFunctionCompletion(linePrefix)) {
      items.push(...this.getFunctionCompletions());
    }

    // 4. Property values (after colon)
    if (this.shouldProvideValueCompletion(linePrefix)) {
      items.push(...this.getValueCompletions(linePrefix));
    }

    return items;
  }

  private shouldProvideElementCompletion(linePrefix: string): boolean {
    // Suggest elements at start of line or after { or opening a child
    const trimmed = linePrefix.trim();
    return trimmed.length === 0 || 
           trimmed.endsWith('{') || 
           /^\s*$/.test(linePrefix);
  }

  private shouldProvidePropertyCompletion(linePrefix: string): boolean {
    // Suggest properties inside element definitions
      return /\{\s*$/.test(linePrefix) || 
        /,\s*$/.test(linePrefix) ||
        /^\s+[A-Za-z]*$/.test(linePrefix) ||
        /\(\s*[A-Za-z]*$/.test(linePrefix); // inside parentheses
  }

  private shouldProvideFunctionCompletion(linePrefix: string): boolean {
    // Suggest functions after = or : or (
    return /[:=(]\s*[A-Za-z]*$/.test(linePrefix);
  }

  private shouldProvideValueCompletion(linePrefix: string): boolean {
    // Suggest values after property:
    return /:\s*[A-Za-z]*$/.test(linePrefix);
  }

  /**
   * Tries to detect if the cursor is currently inside the parentheses of a property
   * that accepts subproperties (e.g., Anchor: (...)). If so, returns that property name.
   */
  private getActivePropertyContext(document: vscode.TextDocument, position: vscode.Position): string | undefined {
    const startLine = Math.max(0, position.line - 30); // small window backwards to keep it fast
    const range = new vscode.Range(new vscode.Position(startLine, 0), position);
    const text = document.getText(range);

    // Find the last occurrence of "Prop: (" before the cursor
    const matches = Array.from(text.matchAll(/([A-Za-z]+)\s*:\s*\(/g));
    if (matches.length === 0) return undefined;

    const lastMatch = matches[matches.length - 1];
    const propName = lastMatch[1];
    const afterMatch = text.slice(lastMatch.index! + lastMatch[0].length);

    // Check if we are still inside the parentheses opened by this property
    const openParens = (afterMatch.match(/\(/g) || []).length;
    const closeParens = (afterMatch.match(/\)/g) || []).length;

    if (openParens > closeParens) {
      return propName;
    }

    return undefined;
  }

  private getElementCompletions(): vscode.CompletionItem[] {
    return UI_DATA.elements.map(element => {
      const item = new vscode.CompletionItem(element, vscode.CompletionItemKind.Class);
      item.insertText = new vscode.SnippetString(`${element} {\n\t$0\n}`);
      item.documentation = new vscode.MarkdownString(`Create a **${element}** element`);
      item.sortText = '1' + element; // Priority sorting
      return item;
    });
  }

  private getPropertyCompletions(activeProperty?: string): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];

    // If we are inside a property that supports subproperties (e.g., Anchor: (...)),
    // only suggest the subproperties to reduce noise.
    if (activeProperty) {
      const propData = UI_DATA.properties[activeProperty];
      if (propData?.subproperties) {
        propData.subproperties.forEach((subprop: string) => {
          const subItem = new vscode.CompletionItem(`${subprop}`, vscode.CompletionItemKind.Field);
          subItem.insertText = new vscode.SnippetString(`${subprop}: $0`);
          subItem.documentation = new vscode.MarkdownString(`${activeProperty}.${subprop}`);
          subItem.sortText = '1' + subprop; // prioritize subproperty suggestions
          items.push(subItem);
        });
        return items;
      }
    }

    // Default: suggest top-level properties
    for (const [propName, propData] of Object.entries(UI_DATA.properties)) {
      const item = new vscode.CompletionItem(propName, vscode.CompletionItemKind.Property);
      
      // Smart snippets based on property type
      if (propData.subproperties) {
        item.insertText = new vscode.SnippetString(`${propName}: ($0)`);
      } else if (propData.values) {
        item.insertText = new vscode.SnippetString(`${propName}: \${1|${propData.values.join(',')}|}`);
      } else {
        item.insertText = new vscode.SnippetString(`${propName}: $0`);
      }
      
      item.documentation = new vscode.MarkdownString(propData.description);
      item.sortText = '2' + propName;
      items.push(item);
    }

    return items;
  }

  private getFunctionCompletions(): vscode.CompletionItem[] {
    return UI_DATA.functions.map(func => {
      const item = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Function);
      
      // Create snippet with parameters
      const params = func.params.map((param, i) => `${param}: \${${i + 1}}`).join(', ');
      item.insertText = new vscode.SnippetString(`${func.name}(${params})`);
      
      item.documentation = new vscode.MarkdownString(
        `**${func.name}**\n\nParameters:\n${func.params.map(p => `- ${p}`).join('\n')}`
      );
      item.sortText = '1' + func.name;
      return item;
    });
  }

  private getValueCompletions(linePrefix: string): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];

    // Extract property name before colon
    const match = linePrefix.match(/([A-Za-z]+)\s*:\s*[A-Za-z]*$/);
    if (!match) return items;

    const propName = match[1];
    const propData = UI_DATA.properties[propName as keyof typeof UI_DATA.properties];

    if (propData?.values) {
      // Provide specific values for this property
      propData.values.forEach((value: string) => {
        const item = new vscode.CompletionItem(value, vscode.CompletionItemKind.Value);
        item.insertText = value;
        item.sortText = '1' + value;
        items.push(item);
      });
    }

    // Special handling for alignment properties
    if (propName.includes('Alignment') || propName === 'Alignment') {
      [...UI_DATA.alignmentValues.horizontal, ...UI_DATA.alignmentValues.vertical].forEach(align => {
        const item = new vscode.CompletionItem(align, vscode.CompletionItemKind.EnumMember);
        item.insertText = align;
        item.sortText = '1' + align;
        items.push(item);
      });
    }

    return items;
  }
}

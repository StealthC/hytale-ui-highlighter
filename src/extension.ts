import * as vscode from 'vscode';
import { HytaleUIFormatter } from './formatter';
import { HytaleUICompletionProvider } from './completionProvider';

export function activate(context: vscode.ExtensionContext) {
  const formatter = new HytaleUIFormatter();
  const completionProvider = new HytaleUICompletionProvider();
  
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      'hytale-ui',
      formatter
    )
  );

  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      'hytale-ui',
      completionProvider,
      ':', // Trigger on colon for property values
      '{', // Trigger on opening brace for properties
      '(', // Trigger on opening paren for function params
      ',', // Trigger on comma for next parameter
      ' '  // Trigger on space for general completions
    )
  );

  console.log('Hytale UI Syntax Highlighter with Autocomplete activated');
}

export function deactivate() {}

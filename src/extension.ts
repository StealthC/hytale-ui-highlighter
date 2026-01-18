import * as vscode from 'vscode';
import { HytaleUIFormatter } from './formatter';

export function activate(context: vscode.ExtensionContext) {
  const formatter = new HytaleUIFormatter();
  
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      'hytale-ui',
      formatter
    )
  );

  console.log('Hytale UI Syntax Highlighter activated');
}

export function deactivate() {}

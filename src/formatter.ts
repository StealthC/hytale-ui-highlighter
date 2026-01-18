import * as vscode from 'vscode';

export class HytaleUIFormatter implements vscode.DocumentFormattingEditProvider {
  provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
    const edits: vscode.TextEdit[] = [];
    let indentLevel = 0;
    const indentSize = 2;

    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      const text = line.text.trim();

      // Skip empty lines
      if (text.length === 0) {
        continue;
      }

      // Count closing brackets at the start to decrease indent
      const closingMatch = text.match(/^[\}\)\]]/);
      if (closingMatch) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      // Calculate proper indentation
      const properIndent = ' '.repeat(indentLevel * indentSize);
      const currentIndent = line.text.match(/^\s*/)?.[0] || '';

      // Only update if indentation is different
      if (currentIndent !== properIndent && text.length > 0) {
        const range = new vscode.Range(
          new vscode.Position(i, 0),
          new vscode.Position(i, currentIndent.length)
        );
        edits.push(vscode.TextEdit.replace(range, properIndent));
      }

      // Count opening brackets at the end to increase indent
      const openingMatch = text.match(/[\{\(\[]$/);
      if (openingMatch) {
        indentLevel++;
      }
    }

    return edits;
  }
}

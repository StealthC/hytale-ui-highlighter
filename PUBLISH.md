# Publishing Guide

This guide explains how to publish the Hytale UI Syntax Highlighter extension to the VS Code Marketplace.

## Prerequisites

1. **VS Code Marketplace Account**
   - Go to https://marketplace.visualstudio.com/
   - Sign in with your Microsoft account
   - Create or select your publisher (use `StealthC`)

2. **Personal Access Token (PAT)**
   - Visit https://dev.azure.com/
   - Go to User Settings → Personal access tokens
   - Create a new token with scopes:
     - ✅ Marketplace (Manage)
     - ✅ All accessible organizations
   - Copy the token (you'll only see it once!)

## Installation

Install `vsce` globally:

```bash
npm install -g @vscode/vsce
```

## Login

Login to your publisher account:

```bash
vsce login StealthC
```

Paste your Personal Access Token when prompted.

## Publishing

### Option 1: Auto-increment patch version

```bash
pnpm publish
```

This will:
1. Compile TypeScript (`npm run compile`)
2. Increment patch version (1.0.0 → 1.0.1)
3. Update CHANGELOG.md
4. Publish to Marketplace

### Option 2: Specific version

```bash
vsce publish 1.1.0
```

### Option 3: Package only (no publish)

```bash
pnpm package
```

This creates a `.vsix` file for local installation or distribution.

## Verification

After publishing:
1. Visit https://marketplace.visualstudio.com/items?itemName=StealthC.hytale-ui-highlighter
2. Verify the new version appears
3. Install it in VS Code: Extensions → Search "Hytale UI" → Install

## Before Publishing

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md` with new features/fixes
- [ ] Test the extension locally (`F5`)
- [ ] Verify `.vscodeignore` excludes unnecessary files
- [ ] Ensure all `.ts` files are compiled to `.js`
- [ ] Run `npm run compile` successfully

## Troubleshooting

**"Personal Access Token has expired"**
- Generate a new PAT in Azure DevOps
- Run `vsce logout` then `vsce login StealthC`

**"Package is too large"**
- Check `.vscodeignore` to exclude:
  - `src/` (only publish compiled `out/`)
  - `node_modules/` (except runtime dependencies)
  - Test files and documentation

**"Version already exists"**
- Update the version in `package.json`
- Use semantic versioning: MAJOR.MINOR.PATCH

## Resources

- [vsce Documentation](https://github.com/microsoft/vscode-vsce)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Marketplace Policies](https://marketplace.visualstudio.com/manage/publishers/stealthc/extension/hytale-ui-highlighter/hub)

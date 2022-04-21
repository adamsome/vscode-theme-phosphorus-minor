import { WorkbenchColors, WorkbenchWithFallbacks } from './models'
import { opacity, toArray } from './util'

const DEFAULT_FALLBACKS: WorkbenchWithFallbacks = {
  // Base Colors
  descriptionForeground: { key: 'foreground', opacity: 0.7 },
  errorForeground: 'editorError.foreground',
  'icon.foreground': { key: 'foreground', opacity: 0.9 },
  'sash.hoverBorder': [
    'badge.background',
    'activityBar.activeBorder',
    'sash.hoverBorder',
    'tab.activeBorderTop',
    'panelTitle.activeBorder',
    'settings.modifiedItemIndicator',
    'progressBar.background',
    'textLink.foreground',
  ],
  // Buttons
  'button.secondaryForeground': 'button.foreground',
  'button.secondaryBackground': { key: 'foreground', opacity: 40 },
  // Dropdowns
  'dropdown.background': ['sideBar.background', 'input.background'],
  'dropdown.border': 'input.border',
  'dropdown.foreground': 'input.foreground',
  // Inputs
  'input.background': ['sideBar.background', 'dropdown.background'],
  'input.foreground': 'foreground',
  'input.placeholderForeground': {
    key: 'input.placeholderForeground',
    opacity: 37.5,
  },
  'inputValidation.errorForeground': 'badge.foreground',
  'inputValidation.errorBorder': 'editorError.foreground',
  'inputValidation.errorBackground': {
    key: 'editorError.foreground',
    opacity: 50,
  },
  'inputValidation.infoForeground': 'badge.foreground',
  'inputValidation.infoBorder': 'editorInfo.foreground',
  'inputValidation.infoBackground': {
    key: 'editorInfo.foreground',
    opacity: 50,
  },
  'inputValidation.warningForeground': 'badge.foreground',
  'inputValidation.warningBorder': 'editorWarning.foreground',
  'inputValidation.warningBackground': {
    key: 'editorWarning.foreground',
    opacity: 50,
  },
  // Scrollbars
  'scrollbar.shadow': 'editor.background',
  // Badges
  'badge.background': [
    'badge.background',
    'activityBar.activeBorder',
    'sash.hoverBorder',
    'tab.activeBorderTop',
    'panelTitle.activeBorder',
    'settings.modifiedItemIndicator',
    'progressBar.background',
    'textLink.foreground',
  ],
  // Progress Bars
  'progressBar.background': [
    'badge.background',
    'activityBar.activeBorder',
    'sash.hoverBorder',
    'tab.activeBorderTop',
    'panelTitle.activeBorder',
    'settings.modifiedItemIndicator',
    'progressBar.background',
    'textLink.foreground',
  ],
  // Lists
  'list.inactiveSelectionBackground': {
    key: 'list.activeSelectionBackground',
    opacity: 66,
  },
  'list.focusForeground': 'list.hoverForeground',
  'list.errorForeground': 'editorError.foreground',
  'list.warningForeground': 'editorWarning.foreground',
  'tree.indentGuidesStroke': [
    'editorIndentGuide.background',
    'editorRuler.foreground',
    'tree.indentGuidesStroke',
  ],
  // Side Bar
  'sideBar.background': 'editor.background',
  'sideBar.foreground': 'foreground',
  'sideBar.border': ['sideBar.border', 'activityBar.border'],
  'sideBarTitle.foreground': 'foreground',
  'sideBarSectionHeader.background': 'sideBar.background',
  'sideBarSectionHeader.foreground': 'sideBarTitle.foreground',
  'sideBarSectionHeader.border': [
    'editorGroup.border',
    'sideBarSectionHeader.border',
    'panel.border',
  ],
  // Activity Bar
  'activityBar.background': ['titleBar.activeBackground', 'editor.background'],
  'activityBar.dropBackground': 'list.dropBackground',
  'activityBar.foreground': [
    'titleBar.activeForeground',
    'sideBarTitle.foreground',
    'foreground',
  ],
  'activityBar.border': ['sideBar.border', 'activityBar.border'],
  'activityBarBadge.background': 'badge.background',
  'activityBarBadge.foreground': 'badge.foreground',
  // Editor Groups
  'editorGroup.emptyBackground': 'editor.background',
  'editorGroupHeader.noTabsBackground': 'editor.background',
  'editorGroupHeader.tabsBackground': 'sideBar.background',
  'editorGroup.border': [
    'editorGroup.border',
    'sideBarSectionHeader.border',
    'panel.border',
  ],
  'editorGroup.dropBackground': 'list.dropBackground',
  // Tabs
  'tab.activeForeground': 'list.activeSelectionForeground',
  'tab.activeBorderTop': [
    'badge.background',
    'activityBar.activeBorder',
    'sash.hoverBorder',
    'tab.activeBorderTop',
    'panelTitle.activeBorder',
    'settings.modifiedItemIndicator',
    'progressBar.background',
    'textLink.foreground',
  ],
  'tab.inactiveForeground': 'list.inactiveSelectionForeground',
  'tab.inactiveBackground': 'activityBar.background',
  'tab.unfocusedActiveForeground': 'list.inactiveSelectionForeground',
  'tab.unfocusedInactiveForeground': {
    key: 'list.inactiveSelectionForeground',
    opacity: 50,
  },
  'tab.border': 'editorGroupHeader.tabsBackground',
  // Editors
  'editor.foreground': 'foreground',
  'editorLineNumber.foreground': { key: 'foreground', opacity: 50 },
  'editorLineNumber.activeForeground': { key: 'foreground', opacity: 75 },
  'editor.selectionBackground': 'selection.background',
  'editor.wordHighlightBackground': 'editor.wordHighlightStrongBackground',
  'editor.wordHighlightStrongBackground': 'editor.wordHighlightBackground',
  'editor.hoverHighlightBackground': {
    key: 'list.activeSelectionBackground',
    opacity: 75,
  },
  'editor.findMatchHighlightBackground': {
    key: 'editor.findMatchBackground',
    opacity: 75,
  },
  'editor.findRangeHighlightBackground': {
    key: 'editor.findMatchBackground',
    opacity: 20,
  },
  'editor.lineHighlightBorder': { key: 'foreground', opacity: 15 },
  'editorWhitespace.foreground': { key: 'editor.foreground', opacity: 15 },
  'editorIndentGuide.background': [
    'editorIndentGuide.background',
    'editorRuler.foreground',
    'tree.indentGuidesStroke',
  ],
  'editorRuler.foreground': [
    'editorIndentGuide.background',
    'editorRuler.foreground',
    'tree.indentGuidesStroke',
  ],
  'editorCodeLens.foreground': { key: 'editor.foreground', opacity: 56.25 },
  'editorHoverWidget.background': {
    key: 'editorWidget.background',
    opacity: 95,
  },
  'editorHoverWidget.border': 'editorWidget.border',
  'editorOverviewRuler.findMatchForeground': 'editor.findMatchBackground',
  'editorOverviewRuler.rangeHighlightForeground':
    'editor.findRangeHighlightBackground',
  'editorOverviewRuler.wordHighlightForeground':
    'editorOverviewRuler.wordHighlightStrongForeground',
  'editorOverviewRuler.wordHighlightStrongForeground':
    'editorOverviewRuler.wordHighlightForeground',
  'editorOverviewRuler.modifiedForeground': [
    'editorGutter.modifiedBackground',
    'gitDecoration.modifiedResourceForeground',
    'editorInfo.foreground',
  ],
  'editorOverviewRuler.addedForeground': [
    'editorGutter.addedBackground',
    'gitDecoration.untrackedResourceForeground',
  ],
  'editorOverviewRuler.deletedForeground': [
    'editorGutter.deletedBackground',
    'gitDecoration.deletedResourceForeground',
  ],
  'editorOverviewRuler.errorForeground': 'editorError.foreground',
  'editorOverviewRuler.warningForeground': 'editorWarning.foreground',
  'editorOverviewRuler.infoForeground': 'editorInfo.foreground',
  'editorOverviewRuler.commonContentForeground': 'foreground',
  'editorGutter.background': 'editor.background',
  'editorGutter.modifiedBackground': [
    'editorGutter.modifiedBackground',
    'gitDecoration.modifiedResourceForeground',
    'editorInfo.foreground',
  ],
  'editorGutter.addedBackground': [
    'editorOverviewRuler.addedForeground',
    'gitDecoration.untrackedResourceForeground',
  ],
  'editorGutter.deletedBackground': [
    'editorOverviewRuler.deletedForeground',
    'gitDecoration.deletedResourceForeground',
  ],
  'editorLink.activeForeground': [
    'list.hoverForeground',
    'list.inactiveSelectionForeground',
  ],
  // Editor Lightbulb
  'editorLightBulb.foreground': [
    'badge.background',
    'activityBar.activeBorder',
    'sash.hoverBorder',
    'tab.activeBorderTop',
    'panelTitle.activeBorder',
    'settings.modifiedItemIndicator',
    'progressBar.background',
    'textLink.foreground',
  ],
  'editorLightBulbAutoFix.foreground': 'editorInfo.foreground',
  // Editor Bracket
  'editorBracketMatch.background': {
    key: 'editorCursor.foreground',
    opacity: 20,
  },
  'editorBracketHighlight.unexpectedBracket.foreground':
    'editorError.foreground',
  // Minimap
  'minimap.background': 'editor.background',
  'minimap.selectionHighlight': 'selection.background',
  // Widgets
  'editorWidget.background': 'activityBar.background',
  'editorSuggestWidget.background': 'editorWidget.background',
  'editorSuggestWidget.foreground': 'editorWidget.foreground',
  'editorSuggestWidget.highlightForeground': 'list.highlightForeground',
  'editorSuggestWidget.border': 'editorWidget.border',
  // Peek Views
  'peekView.border': 'editorWidget.border',
  'peekViewEditor.background': {
    key: 'editorWidget.background',
    opacity: 80,
  },
  'peekViewEditorGutter.background': {
    key: 'editorWidget.background',
    opacity: 80,
  },
  'peekViewEditor.matchHighlightBackground': {
    key: 'editor.findMatchBackground',
    opacity: 30,
  },
  'peekViewResult.background': 'editorWidget.background',
  'peekViewResult.fileForeground': 'foreground',
  'peekViewResult.lineForeground': 'editorWidget.foreground',
  'peekViewResult.matchHighlightBackground': {
    key: 'editor.findMatchBackground',
    opacity: 40,
  },
  'peekViewResult.selectionBackground': 'selection.background',
  'peekViewResult.selectionForeground': 'list.activeSelectionForeground',
  'peekViewTitle.background': 'editorWidget.background',
  'peekViewTitleDescription.foreground': 'foreground',
  'peekViewTitleLabel.foreground': 'list.activeSelectionForeground',
  // Merges
  'merge.currentHeaderBackground': {
    key: 'editorOverviewRuler.currentContentForeground',
    // opacity: 25,
  },
  'merge.currentContentBackground': {
    key: 'editorOverviewRuler.currentContentForeground',
    opacity: 50,
  },
  'merge.incomingHeaderBackground': {
    key: 'editorOverviewRuler.incomingContentForeground',
    // opacity: 25,
  },
  'merge.incomingContentBackground': {
    key: 'editorOverviewRuler.incomingContentForeground',
    opacity: 50,
  },
  // Panels
  'panel.border': [
    'editorGroup.border',
    'sideBarSectionHeader.border',
    'panel.border',
  ],
  'panelTitle.activeForeground': 'sideBarTitle.foreground',
  'panelTitle.activeBorder': [
    'badge.background',
    'activityBar.activeBorder',
    'sash.hoverBorder',
    'tab.activeBorderTop',
    'panelTitle.activeBorder',
    'settings.modifiedItemIndicator',
    'progressBar.background',
    'textLink.foreground',
  ],
  // Status Bar
  'statusBar.background': [
    'titleBar.activeBackground',
    'activityBar.background',
    'editor.background',
  ],
  'statusBar.foreground': ['titleBar.activeForeground', 'editor.foreground'],
  'statusBar.border': 'titleBar.border',
  'statusBar.debuggingForeground': [
    'statusBar.foreground',
    'editor.foreground',
  ],
  'statusBar.noFolderBackground': 'statusBar.background',
  'statusBar.noFolderBorder': 'statusBar.border',
  'statusBarItem.prominentBackground': 'list.inactiveSelectionBackground',
  'statusBarItem.prominentHoverBackground': 'list.activeSelectionBackground',
  // Terminal
  'terminal.foreground': 'editor.foreground',
  'terminal.background': 'editor.background',
  // Title Bar (macOS)
  'titleBar.activeBackground': 'statusBar.background',
  'titleBar.activeForeground': 'statusBar.foreground',
  'titleBar.inactiveBackground': 'titleBar.activeBackground',
  'titleBar.border': 'statusBar.border',
  // Git Decorations
  'gitDecoration.modifiedResourceForeground': [
    'editorGutter.modifiedBackground',
    'gitDecoration.modifiedResourceForeground',
    'editorInfo.foreground',
  ],
  'gitDecoration.deletedResourceForeground': [
    'editorOverviewRuler.deletedForeground',
    'gitDecoration.deletedResourceForeground',
  ],
  'gitDecoration.untrackedResourceForeground': [
    'editorGutter.addedBackground',
    'editorOverviewRuler.addedForeground',
  ],
  'gitDecoration.ignoredResourceForeground': {
    key: 'foreground',
    opacity: 60,
  },
  // Notifications
  'notificationCenter.border': ['titleBar.border', 'statusBar.border'],
  'notificationCenterHeader.foreground': 'editorWidget.foreground',
  'notificationCenterHeader.background': 'editorWidget.background',
  'notificationToast.border': 'notificationCenter.border',
  'notifications.background': 'notificationCenterHeader.background',
  'notifications.foreground': 'notificationCenterHeader.foreground',
  'notificationsErrorIcon.foreground': 'editorError.foreground',
  'notificationsWarningIcon.foreground': 'editorWarning.foreground',
  'notificationsInfoIcon.foreground': 'editorInfo.foreground',
  // Extension Buttons
  'extensionButton.prominentForeground': 'button.foreground',
  'extensionButton.prominentBackground': 'button.background',
  // Breadcrumbs
  'breadcrumb.background': 'editor.background',
  'breadcrumb.foreground': 'foreground',
  'breadcrumb.focusForeground': 'editorLink.activeForeground',
  'breadcrumbPicker.background': 'editorWidget.background',
  // Settings
  'settings.headerForeground': 'sideBarTitle.foreground',
  'settings.modifiedItemIndicator': [
    'badge.background',
    'activityBar.activeBorder',
    'sash.hoverBorder',
    'tab.activeBorderTop',
    'panelTitle.activeBorder',
    'settings.modifiedItemIndicator',
    'progressBar.background',
    'textLink.foreground',
  ],
  // Misc
  'textLink.activeForeground': 'textLink.foreground',
  'debugToolBar.background': 'editorWidget.background',
  'pickerGroup.border': 'editorWidget.border',
}

export default function applyWorkbenchFallbacks(
  workbench: Partial<WorkbenchColors>
): Partial<WorkbenchColors> {
  return Object.keys(DEFAULT_FALLBACKS).reduce((outerAcc, k) => {
    const key = k as keyof WorkbenchColors
    if (outerAcc[key]) {
      // Workbench key already defined; no fallback needed
      return outerAcc
    }
    const fallbackEntry = DEFAULT_FALLBACKS[key] ?? []
    const fallbacks = toArray(fallbackEntry)
    return fallbacks.reduce((acc, f) => {
      const fallback = typeof f === 'string' ? { key: f } : f
      const value = acc[fallback.key]
      if (fallback.key !== key && !acc[key] && value) {
        acc[key] =
          fallback.opacity != null ? opacity(fallback.opacity, value) : value
      }
      return acc
    }, outerAcc)
  }, workbench)
}

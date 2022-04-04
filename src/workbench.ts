import { Palette } from './palette'
import { opacity } from './util'

export default (palette: Palette): Record<string, string> => {
  const c = palette // Alias
  // Background
  const bg1 = c.black
  const bg2 = c.stone[975]
  const bg3 = c.stone[950]
  const bg4 = c.stone[900]
  const bg5 = c.stone[700]
  const bgLit1 = c.phosphorus[900]
  const bgLit2 = c.phosphorus[800]
  const bgLit3 = c.phosphorus[700]
  const bgError = c.red[950]
  const transparent = opacity(0, bg3)
  // Foreground
  const fg1 = c.stone[300]
  const fg2 = c.stone[400]
  const fg3 = c.stone[500]
  const fg4 = c.stone[600]
  const fgLit = c.phosphorus[500]
  // Border
  const border1 = c.stone[900]
  const border2 = c.stone[800]
  // General UI
  const primary = c.phosphorus[500]
  const highlight1 = c.emerald[600]
  const highlight2 = c.emerald[700]
  const selection = c.emerald[600]
  const findMatch = c.seaGreen[600]
  const highlightWord = c.teal[600]
  const cursor = c.phosphorus[500]
  const link1 = c.phosphorus[500]
  const link2 = c.phosphorus[600]
  // Notifications
  const info1 = c.teal[400]
  const info2 = c.teal[500]
  const error1 = c.red[500]
  const error2 = c.red[600]
  const warn1 = c.emerald[300]
  const warn2 = c.emerald[200]
  // Changes
  const added = c.emerald[500]
  const deleted = error2
  const modified = info2
  const conflicted = c.emerald[300]
  // Merge
  const mergeCurrent = c.teal[600]
  const mergeIncoming = c.emerald[300]
  const mergeCommon = c.stone[500]

  return {
    // Base Colors
    focusBorder: transparent,
    foreground: fg3,
    'widget.shadow': opacity(18.75, bg3),
    'selection.background': bgLit1,
    descriptionForeground: fg3,
    errorForeground: error1,
    'icon.foreground': fg3,
    'sash.hoverBorder': primary,
    // Buttons
    'button.background': bgLit2,
    'button.foreground': fg1,
    'button.hoverBackground': bgLit3,
    'button.hoverForeground': fg1,
    'button.secondaryForeground': fg1,
    'button.secondaryBackground': bgLit2,
    // Dropdowns
    'dropdown.background': bg1,
    'dropdown.border': border2,
    'dropdown.foreground': fg2,
    // Inputs
    'input.background': bg3,
    'input.border': border2,
    'input.foreground': fg2,
    'input.placeholderForeground': opacity(37.5, fg2),
    'inputValidation.errorBorder': error1,
    'inputValidation.errorBackground': opacity(50, error2),
    'inputValidation.infoBorder': info1,
    'inputValidation.infoBackground': opacity(50, info2),
    'inputValidation.warningBorder': warn1,
    'inputValidation.warningBackground': opacity(50, warn2),
    // Scrollbars
    'scrollbar.shadow': bg1,
    'scrollbarSlider.activeBackground': highlight1,
    'scrollbarSlider.hoverBackground': highlight2,
    'scrollbarSlider.background': opacity(40, fg4),
    // Badges
    'badge.background': primary,
    'badge.foreground': bg1,
    // Progress Bars
    'progressBar.background': highlight2,
    // Lists
    'list.activeSelectionBackground': c.phosphorus[900],
    'list.activeSelectionForeground': fg1,
    'list.inactiveSelectionBackground': opacity(66, c.phosphorus[900]),
    'list.inactiveSelectionForeground': fg2,
    'list.hoverBackground': opacity(33, bgLit1),
    'list.hoverForeground': fg2,
    'list.focusBackground': opacity(33, bgLit1),
    'list.focusForeground': fg2,
    'list.dropBackground': opacity(50, bgLit2),
    'list.highlightForeground': fgLit,
    'list.errorForeground': error1,
    'list.warningForeground': warn1,
    'tree.indentGuidesStroke': border1,
    // Side Bar
    'sideBar.background': bg2,
    'sideBar.foreground': fg3,
    'sideBar.border': border1,
    'sideBarTitle.foreground': fg2,
    'sideBarSectionHeader.background': bg2,
    'sideBarSectionHeader.foreground': fg2,
    'sideBarSectionHeader.border': border1,
    // Activity Bar
    'activityBar.background': bg3,
    'activityBar.dropBackground': opacity(50, bgLit2),
    'activityBar.foreground': fg2,
    'activityBar.border': border1,
    'activityBarBadge.background': primary,
    'activityBarBadge.foreground': bg3,
    'activityBar.activeBorder': primary,
    // Editor Groups
    'editorGroup.emptyBackground': bg1,
    'editorGroupHeader.noTabsBackground': bg3,
    'editorGroupHeader.noTabsBorder': border1,
    'editorGroupHeader.tabsBackground': bg3,
    'editorGroupHeader.tabsBorder': border1,
    'editorGroupHeader.border': border1,
    'editorGroup.border': border1,
    'editorGroup.dropBackground': opacity(50, bgLit2),
    'editorGroup.noTabsBackground': bg3,
    'editorGroup.tabsBackground': bg3,
    'editorGroup.tabsBorder': border2,
    // Tabs
    'tab.border': border1,
    'tab.activeForeground': fg1,
    'tab.activeBorderTop': primary,
    'tab.inactiveForeground': fg3,
    'tab.inactiveBackground': bg3,
    'tab.unfocusedActiveForeground': fg3,
    'tab.unfocusedInactiveForeground': fg3,
    // Editors
    'editor.background': bg1,
    'editor.foreground': fg2,
    'editorLineNumber.foreground': bg5,
    'editorLineNumber.activeForeground': cursor,
    'editorCursor.foreground': cursor,
    'editorCursor.background': bg1,
    'editor.selectionBackground': bgLit1,
    'editor.selectionHighlightBackground': opacity(15, fg2),
    'editor.wordHighlightBackground': opacity(20, highlightWord),
    'editor.wordHighlightStrongBackground': opacity(50, highlightWord),
    'editor.hoverHighlightBackground': opacity(31.25, selection),
    'editor.findMatchBackground': opacity(50, findMatch),
    'editor.findMatchHighlightBackground': opacity(30, findMatch),
    'editor.findRangeHighlightBackground': opacity(15, findMatch),
    'editor.lineHighlightBackground': bg3,
    'editor.lineHighlightBorder': transparent,
    'editorWhitespace.foreground': opacity(15, fg3),
    'editorIndentGuide.background': border1,
    'editorRuler.foreground': border1,
    'editorCodeLens.foreground': opacity(56.25, fg3),
    'editorHoverWidget.background': opacity(95, bg4),
    'editorHoverWidget.border': border2,
    'editorOverviewRuler.border': transparent,
    'editorOverviewRuler.findMatchForeground': opacity(30, findMatch),
    'editorOverviewRuler.rangeHighlightForeground': opacity(15, findMatch),
    'editorOverviewRuler.selectionHighlightForeground': fg3,
    'editorOverviewRuler.wordHighlightForeground': opacity(40, highlightWord),
    'editorOverviewRuler.wordHighlightStrongForeground': opacity(
      60,
      highlightWord
    ),
    'editorOverviewRuler.modifiedForeground': modified,
    'editorOverviewRuler.addedForeground': added,
    'editorOverviewRuler.deletedForeground': conflicted,
    'editorOverviewRuler.errorForeground': error1,
    'editorOverviewRuler.warningForeground': warn2,
    'editorOverviewRuler.infoForeground': info1,
    'editorGutter.background': bg1,
    'editorGutter.modifiedBackground': modified,
    'editorGutter.addedBackground': added,
    'editorGutter.deletedBackground': conflicted,
    'editorError.foreground': error2,
    'editorWarning.foreground': warn2,
    'editorInfo.foreground': info2,
    'editorLink.activeForeground': fg2,
    // Editor Lightbulb
    'editorLightBulb.foreground': primary,
    'editorLightBulbAutoFix.foreground': info2,
    // Editor Bracket
    'editorBracketMatch.border': transparent,
    'editorBracketMatch.background': opacity(20, cursor),
    'editorBracketHighlight.foreground1': c.emerald[700],
    'editorBracketHighlight.foreground2': c.emerald[600],
    'editorBracketHighlight.foreground3': c.mint[500],
    'editorBracketHighlight.foreground4': c.teal[500],
    'editorBracketHighlight.foreground5': c.seaGreen[500],
    'editorBracketHighlight.unexpectedBracket.foreground': warn1,
    // Diff Editors
    'diffEditor.insertedTextBackground': bgLit1,
    'diffEditor.insertedTextBorder': transparent,
    'diffEditor.removedTextBackground': bgError,
    'diffEditor.removedTextBorder': transparent,
    // Minimap
    'minimap.background': bg1,
    // Widgets
    'editorWidget.background': bg4,
    'editorWidget.border': border2,
    'editorSuggestWidget.background': bg1,
    'editorSuggestWidget.foreground': fg2,
    'editorSuggestWidget.highlightForeground': fgLit,
    'editorSuggestWidget.selectedBackground': opacity(37.5, bg5),
    'editorSuggestWidget.border': border2,
    // Peek Views
    'peekView.border': border2,
    'peekViewEditor.background': opacity(75, bg4),
    'peekViewEditorGutter.background': opacity(75, bg4),
    'peekViewEditor.matchHighlightBackground': opacity(18.75, findMatch),
    'peekViewResult.background': bg4,
    'peekViewResult.fileForeground': fg3,
    'peekViewResult.lineForeground': fg2,
    'peekViewResult.matchHighlightBackground': opacity(25, findMatch),
    'peekViewResult.selectionBackground': bgLit1,
    'peekViewResult.selectionForeground': fg1,
    'peekViewTitle.background': bg4,
    'peekViewTitleDescription.foreground': fg3,
    'peekViewTitleLabel.foreground': fg1,
    // Merges
    'merge.currentHeaderBackground': opacity(25, mergeCurrent),
    'merge.currentContentBackground': opacity(12.5, mergeCurrent),
    'merge.incomingHeaderBackground': opacity(25, mergeIncoming),
    'merge.incomingContentBackground': opacity(12.5, mergeIncoming),
    'editorOverviewRuler.currentContentForeground': mergeCurrent,
    'editorOverviewRuler.incomingContentForeground': mergeIncoming,
    'editorOverviewRuler.commonContentForeground': mergeCommon,
    // Panels
    'panel.border': border1,
    'panelTitle.activeForeground': fg2,
    'panelTitle.activeBorder': primary,
    // Status Bar
    'statusBar.background': bg4,
    'statusBar.foreground': fg2,
    'statusBar.border': border2,
    'statusBar.debuggingBackground': primary,
    'statusBar.debuggingForeground': bg1,
    'statusBar.debuggingBorder': border1,
    'statusBar.noFolderBackground': bg4,
    'statusBar.noFolderBorder': transparent,
    'statusBar.prominentBackground': highlight2,
    'statusBar.prominentHoverBackground': opacity(43.75, highlight2),
    // Terminal
    'terminal.ansiBlack': bg1,
    'terminal.ansiBrightBlack': bg3,
    'terminal.ansiRed': c.red[600],
    'terminal.ansiBrightRed': c.red[400],
    'terminal.ansiGreen': c.seaGreen[600],
    'terminal.ansiBrightGreen': c.seaGreen[400],
    'terminal.ansiYellow': '#a09b4e',
    'terminal.ansiBrightYellow': '#d9d385',
    'terminal.ansiBlue': '#55757f',
    'terminal.ansiBrightBlue': '#93a7af',
    'terminal.ansiMagenta': c.red[600],
    'terminal.ansiBrightMagenta': c.red[400],
    'terminal.ansiCyan': '#60a2a3',
    'terminal.ansiBrightCyan': '#9ad7d8',
    'terminal.ansiWhite': c.stone[800],
    'terminal.ansiBrightWhite': c.stone[900],
    'terminal.foreground': fg2,
    'terminal.background': bg1,
    // Title Bar (macOS)
    'titleBar.activeBackground': bg4,
    'titleBar.activeForeground': fg2,
    'titleBar.inactiveBackground': bg4,
    'titleBar.border': border2,
    // Git Decorations
    'gitDecoration.modifiedResourceForeground': modified,
    'gitDecoration.deletedResourceForeground': deleted,
    'gitDecoration.untrackedResourceForeground': added,
    'gitDecoration.ignoredResourceForeground': fg4,
    'gitDecoration.conflictingResourceForeground': conflicted,
    // Notifications
    'notificationCenter.border': border2,
    'notificationCenterHeader.foreground': fg2,
    'notificationCenterHeader.background': bg4,
    'notificationToast.border': border2,
    'notification.background': opacity(95, bg4),
    'notification.foreground': fg3,
    'notification.border': border2,
    'notificationLink.foreground': link1,
    'notificationsErrorIcon.foreground': error1,
    'notificationsWarningIcon.foreground': warn1,
    'notificationsInfoIcon.foreground': info1,
    // Extension Buttons
    'extensionButton.prominentForeground': fg1,
    'extensionButton.prominentBackground': bgLit2,
    'extensionButton.prominentHoverBackground': bgLit3,
    'extensionIcon.starForeground': warn1,
    'extensionIcon.verifiedForeground': highlight1,
    // Breadcrumbs
    'breadcrumb.background': bg1,
    'breadcrumb.foreground': fg3,
    'breadcrumb.focusForeground': fg2,
    'breadcrumb.activeSelectionForegraph': opacity(50, bg5),
    'breadcrumbPicker.background': bg4,
    // Settings
    'settings.headerForeground': fg2,
    'settings.modifiedItemForeground': primary,
    'settings.inactiveSelectedItemBorder': bg5,
    // Menu
    'menu.background': bg3,
    'menu.foreground': fg2,
    'menu.selectionBackground': primary,
    'menu.selectionForeground': bg1,
    'menu.selectionBorder': primary,
    'menubar.selectionBackground': primary,
    'menubar.selectionForeground': bg1,
    'menubar.selectionBorder': primary,
    // Misc
    'textLink.foreground': link1,
    'textLink.activeForeground': link2,
    'debugToolBar.background': bg1,
    'pickerGroup.border': border2,
    'pickerGroup.foreground': primary,
  }
}


const openHistoryFix = () => {
    chrome.tabs.create({url: "edge://history/all"});
}

chrome.action.onClicked.addListener((tab) => {
    openHistoryFix()
  });

  chrome.commands.onCommand.addListener((command) => {
    openHistoryFix()
  });

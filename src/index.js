
const openHistoryFix = () => {
    chrome.tabs.create({ url: "edge://history/all" });
}

chrome.action.onClicked.addListener((tab) => {
    openHistoryFix()
});

chrome.commands.onCommand.addListener((command) => {
    openHistoryFix()
});

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        checkCommandShortcuts();
    }
});

function checkCommandShortcuts() {
    chrome.commands.getAll((commands) => {
        let missingShortcuts = [];

        for (let {name, shortcut} of commands) {
            if (shortcut === '') {
                missingShortcuts.push(name);
            }
        }

        if (missingShortcuts.length > 0) {
            console.log("mi", missingShortcuts)
        }
    });
}

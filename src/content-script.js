document.addEventListener('DOMContentLoaded', function() {
      chrome.runtime.sendMessage("analyze_page");
    });

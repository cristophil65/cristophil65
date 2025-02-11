chrome.runtime.sendMessage("analyze_page", (response) => {
      console.log(response);
    });

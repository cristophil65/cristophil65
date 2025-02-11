document.addEventListener('DOMContentLoaded', function() {
      chrome.storage.local.get(['settings'], function(result) {
        displayResults(result.settings || {});
      });
      
      document.getElementById('toggle').addEventListener('click', function() {
        chrome.storage.local.get(['settings'], function(result) {
          const settings = result.settings;
          settings.toggle = !settings.toggle;
          chrome.storage.local.set(settings, function() {
            displayResults(settings);
          });
        });
      });
    });

    function displayResults(settings) {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      
      if (settings && settings.analyzeEnabled) {
        // Display SEO recommendations here
        resultsDiv.innerHTML += `
          <h3>Page Analysis</h3>
          <ul>
            <li>${settings.headings} headings found</li>
            <li>${settings.metaTitle} meta title present</li>
            <li>${settings.metaDescription} meta description present</li>
            <li>${settings.imageAltText} image alt text present</li>
          </ul>
        `;
      }
    }

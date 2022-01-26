export default function elementReady(selector, fallbackSelector) {
  return new Promise((resolve) => {
    const el = document.querySelector(selector);
    if (el) { resolve({ el: el, type: 'Normal' }); }
    if (fallbackSelector) {
      const fallback = document.querySelector(fallbackSelector);
      if (fallback) { resolve({ el: fallback, type: 'Fallback' }); }
    }
    new MutationObserver((mutationRecords, observer) => {
      // Query for elements matching the specified selector
      Array.from(document.querySelectorAll(selector)).forEach((element) => {
        resolve({ el: element, type: 'Normal' });
        //Once we have resolved we don't need the observer anymore.
        observer.disconnect();
      });
    })
      .observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    if (fallbackSelector) {
      new MutationObserver((mutationRecords, observer) => {
        // Query for elements matching the specified selector
        Array.from(document.querySelectorAll(fallbackSelector)).forEach((element) => {
          resolve({ el: element, type: 'Fallback' });
          //Once we have resolved we don't need the observer anymore.
          observer.disconnect();
        });
      })
        .observe(document.documentElement, {
          childList: true,
          subtree: true
        });
    }

  });
}
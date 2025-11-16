import 'client-only';

// This function can only be executed on the client because
// it is part of a file marked with "client-only".
export function displayBrowserFeatures() {
  const browser = navigator.userAgent;
  const url = window.location.href;
  return `This is a client-side function.\nBrowser: ${browser}\nURL: ${url}`;
}

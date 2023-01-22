// Listen for push events
self.addEventListener('push', function(event) {
  // Parse the push data
  var pushData = event.data.json();
  // Show a notification
  event.waitUntil(
    self.registration.showNotification(pushData.title, {
      body: pushData.body,
      icon: pushData.icon
    })
  );
});

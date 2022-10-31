const Notification = ({ idx, text, status }) => {
  return `
    <div
      class="notification notification-${status}"
      role="status"
      aria-live="polite"
      onAnimationEnd="removeNotification(${idx})"
    >
      <span>${text}</span>

      <div class="notification-buttons">
        <button
          type="button"
          class="notification-button"
          onClick="removeNotification(${idx})"
          aria-label="Close notification"
          title="Close"
        >
          &#x2715;
        </button>
      </div>
    </div>
  `;
};

const notifications = [];
const notificationsElement = document.querySelector("#notifications");

const newNotification = (notification) => {
  return {
    idx: notifications.length,
    text: notification.text,
    status: notification.status ?? "info",
    playing: false,
  };
};

const addNotification = (notification) => {
  notifications.push(newNotification(notification));
  updateNotifications();
};

const removeNotification = (i) => {
  notifications.splice(i, 1);
  updateNotifications();
};

const updateNotifications = () => {
  if (notifications.length === 0) {
    notificationsElement.innerHTML = "";
  }

  notifications.forEach((notification) => {
    if (!notification.playing) {
      const notificationElement = Notification({
        idx: notification.idx,
        text: notification.text,
        status: notification.status,
      });

      notificationsElement.innerHTML += notificationElement;
      notification.playing = true;
    }
  });
};

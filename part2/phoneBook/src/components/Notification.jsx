const Notification = ({ message, status }) => {
  if (message === null) {
    return null;
  }

  const notificationClass = status === "error" ? "error" : "successfull";

  return <div className={notificationClass}>{message}</div>;
};

export default Notification;

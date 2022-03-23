import React, {useEffect} from 'react'


const Notification = ({notification, setNotification}) => {

  // Turn off notifcation after set amount of time
  useEffect(() => {
    if (notification.display && notification.timer) {
      setTimeout(() => {
        setNotification({
          message: '',
          display: false,
          timer: false,
          isError: false
        })
      }, 3000)
    }
  }, [notification])
  
  return (
  <p className={`notification ${notification.isError && 'notification-error'}`}>
    {notification.message}
  </p>)
}

export default Notification
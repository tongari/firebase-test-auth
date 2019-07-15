let fetched: boolean = false
  
export function subscribeToFriendStatus(handleStatusChange: (status:{isOnline: boolean}) => void) {
  if(!fetched) {
    setTimeout(() => {
      handleStatusChange({isOnline: true})
    },200)
  }
}

export function unsubscribeFromFriendStatus() {
  fetched = true
}
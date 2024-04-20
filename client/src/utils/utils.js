export function convertTimestampToNormalTime(timestamp) {
    const date = new Date(timestamp);
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    let period = 'AM';
    let formattedHours = hours;
  
    if (hours > 12) {
      formattedHours = hours - 12;
      period = 'PM';
    } else if (hours === 0) {
      formattedHours = 12;
    }
  
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    return `${formattedHours}:${formattedMinutes} ${period}`;
}
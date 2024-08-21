
export function formatDateTime(date) {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  
    const formattedDateTime = date.toLocaleString('en-GB', options);
  
    // Replace the comma with a space and remove the seconds
    return formattedDateTime.replace(',', '');
  }
  
import moment from 'moment';

export const formatRelativeTime = (date: string, isMessage = false) => {
  const now = moment();
  const inputDate = moment(date);
  const diffInMinutes = now.diff(inputDate, 'minutes');

  if (diffInMinutes < 1) {
    return 'just now';
  }
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min${diffInMinutes > 1 ? 's' : ''} ago`;
  }
  if (diffInMinutes < 1440) {
    const diffInHours = now.diff(inputDate, 'hours');
    return `${diffInHours} hr${diffInHours > 1 ? 's' : ''} ago`;
  }
  if (isMessage) {
    return inputDate.format('DD/MM/YYYY');
  }
  const diffInDays = now.diff(inputDate, 'days');
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
};

export const formatNumber = (num: number) => {
  if (!num) return 0;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrency = (num: number) => {
  return `₦${formatNumber(num)}`;
};

export const formatPercentage = (num: number) => {
  return `${num}%`;
};

export const shortenText = (text: string, maxLength: number) => {
  if (text?.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
};

export const formatDate = (date: string) => {
  return moment(date).format('MMM DD, YYYY');
};

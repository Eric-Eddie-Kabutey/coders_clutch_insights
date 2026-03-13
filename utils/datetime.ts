import { format, parseISO } from 'date-fns';

/**
 * Format a date string from API to a readable date format
 * @param dateString - ISO date string from API
 * @returns Formatted date string (e.g., "Jan 1, 2024")
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'MMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

/**
 * Format a date string from API to a readable datetime format
 * @param dateString - ISO date string from API
 * @returns Formatted datetime string (e.g., "Jan 1, 2024, 3:30 PM")
 */
export const formatDateTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'MMM d, yyyy, h:mm a');
  } catch (error) {
    console.error('Error formatting datetime:', error);
    return dateString;
  }
};

/**
 * Format a date string from API to a short date format
 * @param dateString - ISO date string from API
 * @returns Formatted short date string (e.g., "1/1/24")
 */
export const formatShortDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'M/d/yy');
  } catch (error) {
    console.error('Error formatting short date:', error);
    return dateString;
  }
};

/**
 * Format a date string from API to a time format
 * @param dateString - ISO date string from API
 * @returns Formatted time string (e.g., "3:30 PM")
 */
export const formatTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'h:mm a');
  } catch (error) {
    console.error('Error formatting time:', error);
    return dateString;
  }
};

/**
 * Format a date string from API to a relative time format
 * @param dateString - ISO date string from API
 * @returns Formatted relative time string (e.g., "2 days ago")
 */
export const formatRelativeTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return dateString;
  }
}; 
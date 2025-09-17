import { Badge } from '@chakra-ui/react';

export interface StatusBadgeProps {
  status: string;
}

// StatusBadge component to handle all status types globally
export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          bg: '#0080001C',
          color: '#008000',
          borderColor: '#008000',
          text: 'Completed'
        };
      case 'in_progress':
        return {
          bg: '#FFBB011C',
          color: '#FFBB00',
          borderColor: '#FFBB00',
          text: 'In Progress'
        };
      case 'failed':
        return {
          bg: '#FF00001C',
          color: '#FF0000',
          borderColor: '#FF0000',
          text: 'Failed'
        };
      default:
        return {
          bg: '#E5E7EB',
          color: '#6B7280',
          borderColor: '#6B7280',
          text: status
        };
    }
  };

  const styles = getStatusStyles(status);

  return (
    <Badge
      bg={styles.bg}
      color={styles.color}
      borderColor={styles.borderColor}
      borderWidth={1}
      fontSize="sm"
      textTransform="capitalize"
      fontWeight="500"
      borderRadius="full"
      px={3}
      py={1}
    >
      {styles.text}
    </Badge>
  );
};

export default StatusBadge;

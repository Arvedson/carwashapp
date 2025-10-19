import { StatusType } from "@/components/atoms/StatusBadge";

export interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  status: StatusType;
  price: string | number;
  location?: string;
  notes?: string;
}

export type BookingCardSize = "small" | "medium" | "large";

export type BookingCardVariant = "default" | "compact" | "detailed";

export interface BookingCardProps {
  /**
   * Booking data object
   */
  booking: Booking;

  /**
   * Size of the card
   */
  size?: BookingCardSize;

  /**
   * Visual variant
   */
  variant?: BookingCardVariant;

  /**
   * Function called when view details is pressed
   */
  onViewDetails?: (booking: Booking) => void;

  /**
   * Function called when cancel is pressed
   */
  onCancel?: (booking: Booking) => void;

  /**
   * Function called when reschedule is pressed
   */
  onReschedule?: (booking: Booking) => void;

  /**
   * Show action buttons
   */
  showActions?: boolean;

  /**
   * Additional styles for the card
   */
  style?: any;

  /**
   * Additional styles for the content
   */
  contentStyle?: any;
}

export interface BookingCardStyles {
  card: any;
  header: any;
  serviceName: any;
  statusContainer: any;
  details: any;
  detailRow: any;
  detailLabel: any;
  detailValue: any;
  actions: any;
  actionButton: any;
}

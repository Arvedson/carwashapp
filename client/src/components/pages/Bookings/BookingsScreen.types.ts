import { Booking } from "@/types";

export interface BookingsScreenProps {
  // Props del componente si las hay
}

export interface BookingsScreenState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

export interface BookingsScreenHandlers {
  handleBookingAction: (bookingId: string, action: "view" | "cancel") => void;
  handleRefresh: () => void;
  handleRetry: () => void;
}

export interface BookingStatusConfig {
  color: string;
  text: string;
}

export interface BookingsScreenStyles {
  emptyCard: any;
  emptyTitle: any;
  emptyDescription: any;
  emptyButton: any;
  bookingCard: any;
  bookingHeader: any;
  serviceName: any;
  statusBadge: any;
  statusText: any;
  divider: any;
  bookingDetails: any;
  detailRow: any;
  detailLabel: any;
  detailValue: any;
  bookingActions: any;
  actionButton: any;
}

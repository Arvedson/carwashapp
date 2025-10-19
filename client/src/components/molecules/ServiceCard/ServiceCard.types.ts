export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  available?: boolean;
  category?: string;
}

export type ServiceCardSize = "small" | "medium" | "large";

export type ServiceCardVariant = "default" | "compact" | "detailed";

export interface ServiceCardProps {
  /**
   * Service data object
   */
  service: Service;

  /**
   * Size of the card
   */
  size?: ServiceCardSize;

  /**
   * Visual variant
   */
  variant?: ServiceCardVariant;

  /**
   * Whether the service is selected
   */
  isSelected?: boolean;

  /**
   * Function called when select is pressed
   */
  onSelect?: (service: Service) => void;

  /**
   * Function called when book is pressed
   */
  onBook?: (service: Service) => void;

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

export interface ServiceCardStyles {
  card: any;
  selectedCard: any;
  header: any;
  titleContainer: any;
  serviceName: any;
  popularBadge: any;
  priceContainer: any;
  price: any;
  duration: any;
  description: any;
  featuresContainer: any;
  featuresTitle: any;
  actions: any;
  selectButton: any;
  bookButton: any;
}

import { Service } from "@/types";

export interface ServicesScreenProps {
  // Props del componente si las hay
}

export interface ServicesScreenState {
  selectedService: string | null;
  services: Service[];
  loading: boolean;
  error: string | null;
}

export interface ServicesScreenHandlers {
  handleServiceSelect: (serviceId: string) => void;
  handleBookService: (serviceId: string) => void;
  handleRefresh: () => void;
  handleRetry: () => void;
}

export interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: (serviceId: string) => void;
  onBook: (serviceId: string) => void;
}

export interface ServicesScreenStyles {
  serviceCard: any;
  selectedServiceCard: any;
  serviceHeader: any;
  serviceTitleContainer: any;
  serviceName: any;
  popularBadge: any;
  priceContainer: any;
  price: any;
  duration: any;
  description: any;
  divider: any;
  featuresContainer: any;
  featuresTitle: any;
  featureItem: any;
  featureText: any;
  serviceActions: any;
  selectButton: any;
  bookButton: any;
  selectedServiceInfo: any;
  infoCard: any;
  infoTitle: any;
  infoText: any;
}

import { Promotion, TrustFeature } from "@/types";

export interface PromotionsSectionProps {
  promotions: Promotion[];
  trustFeatures: TrustFeature[];
  onPromoPress: (promotion: Promotion) => void;
  style?: any;
}

export interface PromotionsSectionStyles {
  container: any;
  title: any;
  content: any;
}

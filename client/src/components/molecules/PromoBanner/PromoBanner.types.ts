import { Promotion } from "@/types";

export interface PromoBannerProps {
  promotions: Promotion[];
  onPromoPress: (promotion: Promotion) => void;
  style?: any;
}

export interface PromoBannerStyles {
  container: any;
  banner: any;
  bannerContent: any;
  bannerTitle: any;
  bannerSubtitle: any;
  bannerIcon: any;
  emptyState: any;
  emptyText: any;
}

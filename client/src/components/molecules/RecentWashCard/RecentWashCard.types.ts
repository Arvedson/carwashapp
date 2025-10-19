import { RecentWash } from "@/types";

export interface RecentWashCardProps {
  recentWash: RecentWash | null;
  onRepeat: () => void;
  style?: any;
}

export interface RecentWashCardStyles {
  container: any;
  title: any;
  washInfo: any;
  washDetails: any;
  washDate: any;
  washPrice: any;
  repeatButton: any;
  emptyState: any;
  emptyText: any;
}

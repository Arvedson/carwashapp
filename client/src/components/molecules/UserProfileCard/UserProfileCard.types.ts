export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  memberSince?: string;
  stats?: {
    totalBookings?: number;
    totalSpent?: number;
    favoriteService?: string;
  };
}

export type UserProfileCardSize = "small" | "medium" | "large";

export type UserProfileCardVariant = "default" | "compact" | "detailed";

export interface UserProfileCardProps {
  /**
   * User data object
   */
  user: User;

  /**
   * Size of the card
   */
  size?: UserProfileCardSize;

  /**
   * Visual variant
   */
  variant?: UserProfileCardVariant;

  /**
   * Function called when edit is pressed
   */
  onEdit?: (user: User) => void;

  /**
   * Function called when avatar is pressed
   */
  onAvatarPress?: (user: User) => void;

  /**
   * Show edit button
   */
  showEditButton?: boolean;

  /**
   * Show stats
   */
  showStats?: boolean;

  /**
   * Additional styles for the card
   */
  style?: any;

  /**
   * Additional styles for the content
   */
  contentStyle?: any;
}

export interface UserProfileCardStyles {
  card: any;
  content: any;
  userInfo: any;
  avatar: any;
  userDetails: any;
  userName: any;
  userEmail: any;
  memberSince: any;
  stats: any;
  statItem: any;
  statNumber: any;
  statLabel: any;
  editButton: any;
}

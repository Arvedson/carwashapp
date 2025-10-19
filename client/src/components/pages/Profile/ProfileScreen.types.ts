import { UserProfile, UserStats } from "@/types";

export interface ProfileScreenProps {
  // Props del componente si las hay
}

export interface ProfileScreenState {
  user: UserProfile | null;
  stats: UserStats;
  notificationsEnabled: boolean;
  loading: boolean;
  error: string | null;
}

export interface ProfileScreenHandlers {
  handleLogout: () => void;
  handleEditProfile: () => void;
  handleNotifications: () => void;
  handlePaymentMethods: () => void;
  handleHelp: () => void;
  handleNotificationToggle: (enabled: boolean) => void;
}

export interface ProfileStatsItem {
  value: string | number;
  label: string;
}

export interface ProfileMenuOption {
  id: string;
  label: string;
  icon: string;
  onPress: () => void;
}

export interface ProfileScreenStyles {
  userCard: any;
  userInfo: any;
  avatar: any;
  userDetails: any;
  userName: any;
  userEmail: any;
  memberSince: any;
  editButton: any;
  settingsCard: any;
  sectionTitle: any;
  settingItem: any;
  settingInfo: any;
  settingLabel: any;
  settingDescription: any;
  divider: any;
  menuCard: any;
  menuButton: any;
  statsCard: any;
  statsGrid: any;
  statItem: any;
  statNumber: any;
  statLabel: any;
  logoutButton: any;
}

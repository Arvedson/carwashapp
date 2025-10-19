export interface LoginScreenProps {
  // Props del componente si las hay
}

export interface LoginScreenState {
  loading: boolean;
  error: string | null;
}

export interface LoginScreenHandlers {
  handleLogin: (credentials: LoginCredentials) => void;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginScreenStyles {
  title: {
    fontSize: number;
    fontWeight: string;
    marginBottom: number;
    color: string;
  };
  subtitle: {
    fontSize: number;
    marginBottom: number;
    color: string;
  };
}

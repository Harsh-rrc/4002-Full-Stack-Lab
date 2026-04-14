import { createContext, useContext, type ReactNode } from "react";
import { ClerkProvider, UserButton, useAuth } from "@clerk/react";
import { clerkPublishableKey, isClerkConfigured } from "./authConfig";

const AuthModeContext = createContext({ clerkEnabled: false });

interface ProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const content = (
    <AuthModeContext.Provider value={{ clerkEnabled: isClerkConfigured }}>
      {children}
    </AuthModeContext.Provider>
  );

  if (!isClerkConfigured) {
    return content;
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey} afterSignOutUrl="/">
      {content}
    </ClerkProvider>
  );
};

export const useAuthMode = () => useContext(AuthModeContext);

const ClerkSignedIn = ({ children }: ProviderProps) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <>{children}</> : null;
};

const ClerkSignedOut = ({ children }: ProviderProps) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? null : <>{children}</>;
};

export const AuthSignedIn = ({ children }: ProviderProps) => {
  const { clerkEnabled } = useAuthMode();
  return clerkEnabled ? <ClerkSignedIn>{children}</ClerkSignedIn> : null;
};

export const AuthSignedOut = ({ children }: ProviderProps) => {
  const { clerkEnabled } = useAuthMode();
  return clerkEnabled ? <ClerkSignedOut>{children}</ClerkSignedOut> : <>{children}</>;
};

export const AuthUserMenu = () => {
  const { clerkEnabled } = useAuthMode();
  if (!clerkEnabled) return null;
  return <UserButton />;
};

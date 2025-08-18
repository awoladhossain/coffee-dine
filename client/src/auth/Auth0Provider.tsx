import type { AppState } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";
type Props = {
  children: React.ReactNode;
};
const Auth0ProviderNavigation = ({ children }: Props) => {
  const domainKey = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientIdKey = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUriKey = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (!domainKey || !clientIdKey || !redirectUriKey) {
    throw new Error(
      "Unable to find Auth0 environment variables. Please check your .env file."
    );
  }
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    // Handle the redirect callback
    console.log("User", user)
  };
  return (
    <Auth0Provider
      domain={domainKey}
      clientId={clientIdKey}
      authorizationParams={{
        redirect_uri: redirectUriKey
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderNavigation;

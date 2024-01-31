import Cookie from 'js-cookie';

import { STORAGE_KEYS } from '@/utils/enums';

class AuthHelper {
  authToken: string | null = null;
  userPermissions: string[] | null = null;

  setAuthCredentials(token: string, permissions: any, user: any) {
    this.authToken = token;
    this.userPermissions = permissions;
    Cookie.set(
      STORAGE_KEYS.AUTH_CRED,
      JSON.stringify({ token, permissions, user }),
    );
  }

  getAuthCredentials(): {
    token: string | null;
    permissions: string[] | null;
    user: any;
  } {
    const authCred = Cookie.get(STORAGE_KEYS.AUTH_CRED);

    if (authCred) {
      return JSON.parse(authCred);
    }
    return { token: null, permissions: null, user: null };
  }
  hasAccess(
    _allowedRoles: string[],
    _userPermissions: string[] | undefined | null,
  ) {
    if (_userPermissions) {
      return Boolean(
        _allowedRoles?.find((aRole) => _userPermissions.includes(aRole)),
      );
    }
    return false;
  }

  logout() {
    this.authToken = null;
    this.userPermissions = null;
  }
}

export default new AuthHelper();

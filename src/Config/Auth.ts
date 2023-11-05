import { jwtDecode } from "jwt-decode";

interface TokenBase {
  iat: number;
  options: {
    expiresIn: string;
  };
  user: {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    isAdmin: boolean;
  };
}

export const isTokenValid = () => {
  const token = localStorage.getItem("token");

  if (!!token) {
    const decodedToken: TokenBase = jwtDecode(token);
    const currentDate = new Date();

    if (decodedToken.iat) {
      const tokenDate = new Date(decodedToken.iat * 1000);
      tokenDate.setHours(tokenDate.getHours() + 2);
      return tokenDate > currentDate;
    }
  }
  return false;
};

export const connectedUser = () => {
  const token = localStorage.getItem("token");

  if (!!token) {
    if (isTokenValid()) {
      const decodedToken: TokenBase = jwtDecode(token);
      return decodedToken.user;
    } else {
      window.location.pathname = "/login";
    }
  }
  return;
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.pathname = "/login";
};

import jwt from "jsonwebtoken";
import { authConfig } from "../config";
import { IJWTService, JWTPayload, AuthError } from "../types";

export class JWTService implements IJWTService {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor() {
    this.secret = authConfig.jwtSecret;
    this.expiresIn = authConfig.jwtExpiresIn;

    if (!this.secret || this.secret === "dev_jwt_secret") {
      throw new Error("JWT_SECRET must be set to a secure value in production");
    }
  }

  /**
   * Genera un token JWT
   */
  generateToken(payload: Omit<JWTPayload, "iat" | "exp">): string {
    try {
      const tokenPayload: Omit<JWTPayload, "iat" | "exp"> = {
        userId: payload.userId,
        email: payload.email,
      };

      return jwt.sign(tokenPayload, this.secret, {
        expiresIn: this.expiresIn,
        issuer: "carwashapp-api",
        audience: "carwashapp-client",
      } as jwt.SignOptions);
    } catch (error) {
      throw new AuthError(
        `Error generating token: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "TOKEN_GENERATION_ERROR"
      );
    }
  }

  /**
   * Verifica y decodifica un token JWT
   */
  verifyToken(token: string): JWTPayload | null {
    try {
      const decoded = jwt.verify(token, this.secret, {
        issuer: "carwashapp-api",
        audience: "carwashapp-client",
      }) as JWTPayload;

      return decoded;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new AuthError("Token has expired", 401, "TOKEN_EXPIRED");
      } else if (error instanceof jwt.JsonWebTokenError) {
        throw new AuthError("Invalid token", 401, "INVALID_TOKEN");
      } else if (error instanceof jwt.NotBeforeError) {
        throw new AuthError("Token not active", 401, "TOKEN_NOT_ACTIVE");
      } else {
        throw new AuthError(
          `Token verification failed: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
          401,
          "TOKEN_VERIFICATION_ERROR"
        );
      }
    }
  }

  /**
   * Decodifica un token sin verificar (solo para lectura)
   */
  decodeToken(token: string): JWTPayload | null {
    try {
      const decoded = jwt.decode(token) as JWTPayload;
      return decoded;
    } catch (error) {
      return null;
    }
  }

  /**
   * Verifica si un token está próximo a expirar
   */
  isTokenExpiringSoon(token: string, thresholdMinutes: number = 30): boolean {
    try {
      const decoded = this.decodeToken(token);
      if (!decoded || !decoded.exp) return true;

      const now = Math.floor(Date.now() / 1000);
      const expirationTime = decoded.exp;
      const thresholdSeconds = thresholdMinutes * 60;

      return expirationTime - now <= thresholdSeconds;
    } catch (error) {
      return true;
    }
  }

  /**
   * Obtiene el tiempo restante de un token en segundos
   */
  getTokenTimeRemaining(token: string): number {
    try {
      const decoded = this.decodeToken(token);
      if (!decoded || !decoded.exp) return 0;

      const now = Math.floor(Date.now() / 1000);
      const expirationTime = decoded.exp;

      return Math.max(0, expirationTime - now);
    } catch (error) {
      return 0;
    }
  }

  /**
   * Genera un refresh token (más largo)
   */
  generateRefreshToken(payload: Omit<JWTPayload, "iat" | "exp">): string {
    try {
      const tokenPayload: Omit<JWTPayload, "iat" | "exp"> = {
        userId: payload.userId,
        email: payload.email,
      };

      return jwt.sign(tokenPayload, this.secret, {
        expiresIn: "30d", // Refresh tokens duran más
        issuer: "carwashapp-api",
        audience: "carwashapp-client",
      });
    } catch (error) {
      throw new AuthError(
        `Error generating refresh token: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
        "REFRESH_TOKEN_GENERATION_ERROR"
      );
    }
  }

  /**
   * Genera un par de tokens (access + refresh)
   */
  generateTokenPair(payload: Omit<JWTPayload, "iat" | "exp">): {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  } {
    const accessToken = this.generateToken(payload);
    const refreshToken = this.generateRefreshToken(payload);
    const expiresIn = this.getTokenTimeRemaining(accessToken);

    return {
      accessToken,
      refreshToken,
      expiresIn,
    };
  }

  /**
   * Valida el formato de un token
   */
  isValidTokenFormat(token: string): boolean {
    if (!token || typeof token !== "string") return false;

    // JWT tiene 3 partes separadas por puntos
    const parts = token.split(".");
    return parts.length === 3;
  }

  /**
   * Extrae el token del header Authorization
   */
  extractTokenFromHeader(authHeader: string | undefined): string | null {
    if (!authHeader) return null;

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") return null;

    return parts[1];
  }
}

// Instancia singleton del servicio
export const jwtService = new JWTService();

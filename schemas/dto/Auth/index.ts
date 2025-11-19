import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerAuthResponseSchemas } from './AuthResponse.dto.ts';
import { registerSchemas as registerAuthRequestSchemas } from './AuthRequest.dto.ts';

// === Auth DTOs (Response) ===
export {
	AuthTokensSchema,
	UserLoginResponseSchema,
	AuthUserResponseSchema,
	RefreshUserResponseSchema,
	SuccessMessageSchema,
	EmailAvailabilitySchema,
	TelephoneAvailabilitySchema,
	MunicipalitySchema,
	RegisterBusinessResponseSchema,
	type AuthTokens,
	type UserLoginResponse,
	type AuthUserResponse,
	type RefreshUserResponse,
	type SuccessMessage,
	type EmailAvailability,
	type TelephoneAvailability,
	type Municipality,
	type RegisterBusinessResponse,
} from './AuthResponse.dto.js';

// === Auth Validators (Request Body, Query, Params) ===
export {
	LoginSchema,
	RegisterUserSchema,
	CreateUserSchema,
	RefreshTokenSchema,
	RequestPasswordResetSchema,
	PasswordResetSchema,
	RegisterTransportServiceSchema,
	RegisterMerchantServiceSchema,
	RegisterBusinessSchema,
	RegisterReservationBusinessSchema,
	CreateScheduledUserSchema,
	UpdateScheduledUserSchema,
	AuthenticateRegistrationSessionSchema,
	AppleLoginSchema,
	GoogleLoginSchema,
	type LoginRequest,
	type RegisterUserRequest,
	type CreateUser,
	type RefreshTokenRequest,
	type RequestPasswordResetRequest,
	type PasswordResetRequest,
	type RegisterTransportServiceRequest,
	type RegisterMerchantServiceRequest,
	type RegisterBusinessRequest,
	type RegisterReservationBusinessRequest,
	type CreateScheduledUserRequest,
	type UpdateScheduledUserRequest,
	type AuthenticateRegistrationSessionRequest,
	type AppleLoginRequest,
	type GoogleLoginRequest,
} from './AuthRequest.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerAuthResponseSchemas(registry);
	registerAuthRequestSchemas(registry);
}

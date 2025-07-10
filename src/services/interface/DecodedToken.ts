export interface DecodedTokenInterface {
  id: string | number;
  nome: string;
  email?: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
}
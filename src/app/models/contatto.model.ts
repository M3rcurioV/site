export interface Contatto {
  nome: string;
  email: string;
  messaggio: string;
  captchaToken?: string | null;
}

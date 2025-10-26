export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
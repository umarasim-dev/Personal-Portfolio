export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

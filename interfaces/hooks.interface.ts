import { DetailedHTMLProps, FormEvent, HTMLAttributes } from 'react'

export interface IUseRequest {
  error: Error | string;
  request: <T>(url: string, method: string, body: null | BodyInit, headers: HeadersInit) => Promise<T>;
  clearError: () => void;
}

export interface IUseInput {
  getValues?: (name?: string) => string | Record<string, unknown>;
  clearValues?: (name?: string) => void;
  register?: (name: string, options?: IUseInputOptions & IUseInputOptionsAdditional) => IUseInputOptions;
  handleSubmit?: (cb?: (formData: Record<string, unknown>) => Promise<any> | any) => any;
  formState?: {
    errors?: Record<string, { message: string }>;
    state?: Record<string, string>;
  }
}

export interface IUseInputOptions extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  'data-exclude'?: 1 | 0 | '1' | '0';
  error?: string | null;
}

export interface IUseInputOptionsAdditional {
  disableValidation?: boolean;
  exclude?: boolean;
}

export interface IUseAuth {
  login: (userId: string, jwtToken: string) => void,
  logout: () => void;
  userId: string;
  token: string;
}
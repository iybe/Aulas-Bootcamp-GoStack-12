import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import { ToastContainer } from '../components/ToastContainer';

interface ToastConstextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'sucess' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastConstextData>({} as ToastConstextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const mensagem = {
        id,
        title,
        description,
        type,
      };

      setMessages([...messages, mensagem]);
    },
    [messages],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastConstextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast precisa estar no escopo de Toastprovider');
  }

  return context;
}

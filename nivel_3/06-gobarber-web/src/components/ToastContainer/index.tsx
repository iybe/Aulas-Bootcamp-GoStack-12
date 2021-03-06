import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './style';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ key, item, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

import React, { FormEvent, useState } from 'react';

import {
  Container,
  EditForm,
  Title,
  TodoFooter,
  Label,
  EditIcon,
  RemoveIcon
} from './styles';
import { APITodo } from '../../@types';
import api from '../../services/api';

const Todo: React.FC<APITodo> = ({ _id, title, label }) => {
  const token = localStorage.getItem('token');
  api.defaults.headers['auth-token'] = token?.substring(1, token.length - 1);

  const [updating, setUpdating] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoLabel, setTodoLabel] = useState('');

  const handleEdit = async (event: FormEvent) => {
    event.preventDefault();

    if (todoTitle === '' || todoLabel === '') {
      return alert('Preencha todos os campos!');
    }

    await api.put(`/todos/${_id}`, {
      title: todoTitle,
      label: todoLabel,
    });

    window.location.reload();
  };

  const handleRemove = async (todo_id: string) => {
    await api.delete(`/todos/${todo_id}`);
    window.location.reload();
  };

  return (
    <Container>
      {updating ? (
        <EditForm onSubmit={handleEdit}>
          <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event?.target.value)}
          placeholder="Título da tarefa"
          minLength={7}
        />
        <input
          type="text"
          value={todoLabel}
          onChange={(event) => setTodoLabel(event?.target.value)}
          placeholder="Categoria da tarefa"
          maxLength={15}
        />
        <button type="submit">Editar Tarefa</button>
        </EditForm>
      ) : (
        <>
          <Title>{title}</Title>
          <TodoFooter>
            <Label>{label}</Label>

            <button onClick={() => setUpdating(true)}>
              <EditIcon />
            </button>
            <button onClick={() => handleRemove(_id)}>
              <RemoveIcon />
            </button>
          </TodoFooter>
        </>
      )}
    </Container>
  );
};

export default Todo;

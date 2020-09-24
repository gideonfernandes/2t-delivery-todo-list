import React, { useState, useEffect, FormEvent } from 'react';

import { Container, Form } from './styles';
import api from '../../services/api';
import { APITodo } from '../../@types';
import Todo from '../../components/Todo';

const Todos: React.FC = () => {
  const token = localStorage.getItem('token');
  api.defaults.headers['auth-token'] = token?.substring(1, token.length - 1);

  const [todos, setTodos] = useState<APITodo[]>([]);
  const [loading, setLoading] = useState(true);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoLabel, setTodoLabel] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    setLoading(true);
    const { data } = await api.get('/todos');
    setTodos(data);
    setLoading(false);
  };

  const handleAddTodo = async (event: FormEvent) => {
    event.preventDefault();

    if (todoTitle === '' || todoLabel === '') {
      return alert('Preencha todos os campos!');
    }

    await api.post('/todos', {
      title: todoTitle,
      label: todoLabel,
    });

    setTodoTitle('');
    setTodoLabel('');
    getTodos();
  };

  if (loading) return <h1>Carregando...</h1>;

  return (
    <Container>
      <Form onSubmit={handleAddTodo}>
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
        <button type="submit">Adicionar Tarefa</button>
      </Form>
      {todos.map(todo => (
        <Todo
          key={todo._id}
          _id={todo._id}
          title={todo.title}
          label={todo.label}
          user={todo.user}
        />
      ))}
    </Container>
  );
};

export default Todos;

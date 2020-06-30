import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  // passei para classe para ter state
  // eslint-disable-next-line react/state-in-constructor
  state = {
    repositories: [],
    newRepo: '',
    loading: false, // para desabilitar o botão enquanto o repositório está sendo adicionado
  };

  handleInputChange = (e) => {
    // handleInputChange recebe um evento
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault(); // para não atualizar a página quando adicionar um repositório

    this.setState({ loading: true }); // quando clica no botão, desabilita loading

    const { newRepo, repositories } = this.state; // pega newRepo e repositories de state

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      // pegar informações da api
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      // ...repositories copia tudo que ja tem em repositories e data adiciona a nova informação
      newRepo: '',
      loading: false, // quando termina de adicionar, o botão habilita de novo
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state; // pega newRepo, repositories e loading de state

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {/* quando quiser estilizar um elemento, o elemento precisa virar um componente */}
            {/* criou <SubmitButton> em vez de apenas <button> para estilizar o botão */}
            {loading ? ( // se loading for true coloca FaSpinner, se não FaPlus
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            // map precisa de key com uma informação única, a única informação única é o nome do repositório
            <li key={repository.name}>
              <span>{repository.name}</span>
              {/* para mostrar o nome do repositório */}
              <a href="">Detalhes</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

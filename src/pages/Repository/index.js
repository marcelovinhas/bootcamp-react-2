/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList } from './styles';

// passou de função para classe para usar state e componentDidMount
export default class Repository extends Component {
  static propTypes = {
    // match é um objeto pois tem params dentro, então define como shape
    match: PropTypes.shape({
      // params também é um objeto pois tem repository dentro, então define como shape, precisa só de um isRequired por fora
      params: PropTypes.shape({
        repository: PropTypes.string, // string já que é o valor da URL
      }),
    }).isRequired,
  };

  state = {
    repository: {}, // como é um único repositório inicia como objeto {}
    issues: [], // como são várias issues inicia como array []
    loading: true, // inicia como true para didMount executar assim que o componente montar
  };

  async componentDidMount() {
    // match para acessar o parâmetro, dentro da propriedade match tem a propriedade params
    const { match } = this.props;

    // decodeURIComponente para transformar %2F em /
    const repoName = decodeURIComponent(match.params.repository);

    // duas chamadas a api ao mesmo tempo, uma ao repositório, outra a issue
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          // para retornar apenas as issues em aberto e 5 itens por página
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data, // preenche os dados de repository como repository.data que é onde vem os dados do axios
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    // mostra se está carregando os dados do repositório
    if (loading) {
      // se loading existir
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          {/* retorna a url do avatar do dono do repositório, alt é obrigatório */}
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map((issue) => (
            // map para percorrer as issues e retorna a issue em si, em key o padrão é retornar string
            <li key={String(issue.id)}>
              {/* avatar do criador da issue, alt é obrigatório e retorna o nome do usuário */}
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  {/* href={issue.html_url} pois não é um link interno, não usa link do react-router-dom */}
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                {/* nome do autor da isue */}
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}

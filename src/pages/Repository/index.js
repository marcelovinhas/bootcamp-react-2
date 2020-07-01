import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

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

    return <h1>Repository</h1>;
  }
}

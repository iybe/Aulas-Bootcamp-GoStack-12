import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logo from '../../assets/logo-github-explorer.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore Repositórios GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/40895189?s=460&u=e6c7f87e1179d3c103ae6aee2dd58b1500a0ca8c&v=4"
            alt="Iesley"
          />

          <div>
            <strong>Modelador 3d opnegl</strong>
            <p>Modelador para cadeira de CG 2020.1</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/40895189?s=460&u=e6c7f87e1179d3c103ae6aee2dd58b1500a0ca8c&v=4"
            alt="Iesley"
          />

          <div>
            <strong>Modelador 3d opnegl</strong>
            <p>Modelador para cadeira de CG 2020.1</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/40895189?s=460&u=e6c7f87e1179d3c103ae6aee2dd58b1500a0ca8c&v=4"
            alt="Iesley"
          />

          <div>
            <strong>Modelador 3d opnegl</strong>
            <p>Modelador para cadeira de CG 2020.1</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/40895189?s=460&u=e6c7f87e1179d3c103ae6aee2dd58b1500a0ca8c&v=4"
            alt="Iesley"
          />

          <div>
            <strong>Modelador 3d opnegl</strong>
            <p>Modelador para cadeira de CG 2020.1</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

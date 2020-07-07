import React, { useState, FormEvent } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import generateBadges from '../../utils/generateBadges';

import api from '../../services/api';
import logoImage from '../../assets/logo.svg';

import { Title, Form, Badges, Error } from './styles';

interface Badge {
  name: string;
  badge: string;
  link: string;
}

const Dashboard: React.FC = () => {
  const [repo, setRepo] = useState('');
  const [badges, setBadges] = useState<Badge[]>([]);
  const [inputError, setInputError] = useState('');

  async function handleCreateBadges(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repo) {
      setInputError('Digite o usuário/nome do repositório');
      return;
    }

    try {
      await api.get(`repos/${repo}`);

      const response = generateBadges(repo);

      setBadges(response);
      setRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  function copyBadges() {
    toast.success('Badge copiado para área de transferência');
  }

  return (
    <>
      <img src={logoImage} alt="Logo Github Explorer" />
      <Title>Crie badges para seu README</Title>

      <Form hasError={!!inputError} onSubmit={handleCreateBadges}>
        <input
          type="text"
          value={repo}
          onChange={e => setRepo(e.target.value)}
          placeholder="Digite o usuário/nome do repositório"
        />
        <button type="submit">Gerar badges</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Badges>
        {badges.map(badge => (
          <CopyToClipboard
            key={badge.name}
            text={badge.badge}
            onCopy={copyBadges}
          >
            <button type="button">
              <div>
                <strong>{badge.name}</strong>
                <img src={badge.link} alt={badge.name} />
              </div>
            </button>
          </CopyToClipboard>
        ))}
      </Badges>
    </>
  );
};

export default Dashboard;

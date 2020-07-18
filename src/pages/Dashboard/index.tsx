import React, { useState, FormEvent } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import generateBadges from '../../utils/generateBadges';

import api from '../../services/api';
import logoImage from '../../assets/logo.svg';
import loadingImage from '../../assets/loading.svg';
import rocketImage from '../../assets/rocket.png';
import sparklesImage from '../../assets/sparkles.png';

import { Title, Form, Badges, Error, LoadingIcon, Center } from './styles';

interface Badge {
  name: string;
  badge: string;
  link: string;
}

const Dashboard: React.FC = () => {
  const [repo, setRepo] = useState('');
  const [badges, setBadges] = useState<Badge[]>([]);
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreateBadges(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repo) {
      setInputError('Digite o usuário/nome do repositório');
      return;
    }

    try {
      setLoading(true);
      await api.get(`repos/${repo}`);

      const response = generateBadges(repo);

      setBadges(response);
      setRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    } finally {
      setLoading(false);
    }
  }

  function copyBadges() {
    toast.success('Badge copiado para área de transferência');
  }

  return (
    <>
      <img src={logoImage} alt="Logo Github Explorer" />
      <Title>
        <img
          src={rocketImage}
          alt="Ícone"
          width={37}
          style={{ marginRight: 4 }}
        />
        Crie Badges
        <br />
        para seu README <img src={sparklesImage} alt="Ícone" width={38} />
      </Title>

      <Form hasError={!!inputError} onSubmit={handleCreateBadges}>
        <input
          type="text"
          value={repo}
          onChange={e => setRepo(e.target.value)}
          placeholder="username/repo (ex: eugustavo/github-badges)"
        />
        <button type="submit">Gerar Badges</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Center>
        <LoadingIcon isLoading={loading} src={loadingImage} alt="Loading" />
      </Center>

      {!loading && badges.length > 0 && (
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
      )}
    </>
  );
};

export default Dashboard;

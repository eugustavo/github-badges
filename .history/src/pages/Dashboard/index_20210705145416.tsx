import React, { useState, FormEvent } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import generateBadges from '../../utils/generateBadges';

import api from '../../services/api';
import logoImage from '../../assets/logo.svg';
import loadingImage from '../../assets/loading.svg';

import { Title, Form, Badges, Error, LoadingIcon, Center } from './styles';

interface Badge {
  name: string;
  badge: string;
  link: string;
}

const Dashboard: React.FC = () => {
  const [text, setText] = useState('');
  const [badges, setBadges] = useState<Badge[]>([]);
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreateBadges(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const [username, repository] = text.trim().split('/');

    if (!username) {
      setInputError('Digite o nome de usuário do GitHub');
      return;
    } else if (!repository) {
      setInputError('Digite o nome do repositório do GitHub');
      return;
    }

    try {
      setLoading(true);
      await api.get(`repos/${username}/${repository}`);

      const response = generateBadges(`${username}/${repository}`);

      setBadges(response);
      setText('');
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
      <Title>Crie badges para seu README</Title>

      <Form hasError={!!inputError} onSubmit={handleCreateBadges}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Digite o usuário/nome do repositório"
        />
        <button type="submit" disabled={loading}>
          Gerar badges
        </button>
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

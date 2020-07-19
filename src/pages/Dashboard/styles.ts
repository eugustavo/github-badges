import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProp {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProp>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    font-size: 16px;
    border: 2px solid #fff;
    border-right: 0px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    transition: background-color 0.4s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  margin-left: 4px;
`;

export const Badges = styled.div`
  margin-top: 80px;
  max-width: 700px;
  display: flex;
  flex-direction: column;

  button {
    border: none;
    transition: all 0.3s ease-in-out;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
    border-radius: 5px;

    & + button {
      margin-top: 16px;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.1);
    }
  }

  p {
    font-size: 22px;
    font-weight: 800;
    color: #333;
  }

  img {
    margin-top: 13px;
  }
`;

interface ImgProp {
  isLoading: boolean;
}

export const LoadingIcon = styled.img<ImgProp>`
  display: none;

  ${props =>
    props.isLoading &&
    css`
      display: block;
      margin-top: 50px;
    `}
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

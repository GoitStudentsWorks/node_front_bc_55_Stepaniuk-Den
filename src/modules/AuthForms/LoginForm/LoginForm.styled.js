import styled from "styled-components";
import { LuEye, LuEyeOff } from "react-icons/lu";

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 474px;
  width: 100%;
  padding: 60px 80px;
  border: 1px solid var(--text-color-30);
  border-radius: 20px;
  background-color: var(--second-background);

  @media screen and (max-width: 768px) {
    max-width: 335px;
    padding: 40px 20px;
  }
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
  }
`;


// ================================

export const AuthTitle = styled.h2`
  align-self: flex-start;
  font-size: 24px;
  font-family: "GilroyBold";
  line-height: 1.3;
  color: var(--text-color-100);

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const FormStyled = styled.form`
  width: 100%;
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 14px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 295px;
  }
`;

export const InputPasswWrapStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const LuEyeStyled = styled(LuEye)`
  color: var(--text-color-100);
`;

export const LuEyeOffStyled = styled(LuEyeOff)`
  color: var(--text-color-100);
`;

export const BtnEyeStyled = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  width: 26px;
  height: 26px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const RestoreStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-size: 16px;
  line-height: 1;
  background-color: transparent;
  color: var(--text-color-50);
  border: none;
  cursor: pointer;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: var(--text-color-30);
  }
`;

export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: var(--pink-color);
`;

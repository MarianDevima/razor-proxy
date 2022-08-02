import * as S from './styles';
import useRadioButton from './useRadioButton';

import type { IRadioButtonProps } from './types';

const RadioButton = ({
  children,
  name,
  value,
  checked,
  hiddenRadio,
  className,
  onClick,
}: IRadioButtonProps) => {
  const { onChange } = useRadioButton({ onClick });

  return (
    <S.Wrapper className={className} checked={checked}>
      <S.RadioLabel>
        <S.RadioInput
          hidden={hiddenRadio}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        ></S.RadioInput>
        {children}
      </S.RadioLabel>
    </S.Wrapper>
  );
};

export default RadioButton;

import * as S from './styles';
import useSwitcher from './useSwitcher';

import type { ISwitcherProps } from './types';

const Switcher = ({ options, value, name, onChange }: ISwitcherProps) => {
  const { selectOption } = useSwitcher({ onChange });
  return (
    <S.Wrapper>
      {options.map(({ label, value: optionValue }, index) => (
        <S.RadioButton
          hiddenRadio
          name={name}
          key={index}
          value={optionValue}
          checked={value === optionValue}
          onClick={selectOption}
        >
          {label}
        </S.RadioButton>
      ))}
    </S.Wrapper>
  );
};

export default Switcher;

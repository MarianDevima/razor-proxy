import * as S from './styles';
import useTextSelect from './useTextSelect';

import type { ITextSelectProps } from './types';
const TextSelect = ({ options, value, onSelect }: ITextSelectProps) => {
  const { open, ref, handleChange, handleOpen } = useTextSelect({ onSelect });
  return (
    <S.Wrapper ref={ref}>
      <S.SelectLabelButton onClick={handleOpen}>
        {value?.label || 'Not selected'}
      </S.SelectLabelButton>
      <S.TextSelect isVisible={open}>
        {options.map((option, index) => (
          <S.TextSelectItem
            onClick={handleChange(option)}
            isActive={option.value === value?.value}
            key={index}
          >
            {option.label}
          </S.TextSelectItem>
        ))}
      </S.TextSelect>
    </S.Wrapper>
  );
};

export default TextSelect;

import DefaultDropdown from '../DefaultDropdown';

import * as S from './styles';
import useTextSelect from './useTextSelect';

import type { ITextSelectProps } from './types';
const TextSelect = ({ options, value, onSelect }: ITextSelectProps) => {
  const { isOpen, ref, handleChange, handleOpen } = useTextSelect({ onSelect });
  return (
    <DefaultDropdown
      ref={ref}
      buttonChildren={
        <S.SelectLabelButton onClick={handleOpen}>
          {value?.label || 'Not selected'}
        </S.SelectLabelButton>
      }
      isOpen={isOpen}
    >
      {options.map((option, index) => (
        <S.TextSelectItem
          onClick={handleChange(option)}
          isActive={option.value === value?.value}
          key={index}
        >
          {option.label}
        </S.TextSelectItem>
      ))}
    </DefaultDropdown>
  );
};

export default TextSelect;

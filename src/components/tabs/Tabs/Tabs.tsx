import * as S from './styles';

import type { ITabsProps } from './types';

const Tabs = ({ tabs, active, setActive }: ITabsProps) => {
  return (
    <S.Wrapper>
      {tabs.map((tab, index) => (
        <S.Tab key={index} active={active === index} onClick={() => setActive(index)}>
          {tab}
        </S.Tab>
      ))}
    </S.Wrapper>
  );
};

export default Tabs;

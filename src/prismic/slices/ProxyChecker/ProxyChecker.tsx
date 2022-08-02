import { PrismicRichText } from '@prismicio/react';
import React, { useState } from 'react';

import { Box, CodeExample, Switcher, Tabs, TextSelect } from '@/components';

import * as S from './styles';
import useProxyChecker from './useProxyChecker';

import type { ProxyCheckerSlice } from '@/prismic/types.generated';
import type { SliceComponentProps } from '@prismicio/react';

const ProxyChecker = ({ slice }: SliceComponentProps<ProxyCheckerSlice>) => {
  const [activeCodeTemplate, setActiveCodeTemplate] = useState(0);
  const {
    locationOptions,
    sessionsOptions,
    typesDC,
    activeTypeDC,
    location,
    proxyType,
    languageTabs,
    languageTabsLabels,
    selectTypeDC,
    setLocation,
    setProxyType,
  } = useProxyChecker(slice);

  return (
    <section>
      <S.Wrapper>
        <Box>
          <S.TitleWrapper>
            <PrismicRichText field={slice.primary.title} />
          </S.TitleWrapper>
          {slice.primary.locationLabel}
          <Switcher
            value={activeTypeDC}
            options={typesDC}
            onChange={selectTypeDC}
            name="proxyType"
          ></Switcher>
          <TextSelect value={location} options={locationOptions} onSelect={setLocation} />
          <TextSelect value={proxyType} options={sessionsOptions} onSelect={setProxyType} />
        </Box>

        <Box>
          <Tabs
            tabs={languageTabsLabels}
            active={activeCodeTemplate}
            setActive={setActiveCodeTemplate}
          />
          <CodeExample
            language={languageTabs[activeCodeTemplate].value}
            location={location.value}
            proxyType={proxyType.value}
          />
        </Box>
      </S.Wrapper>
    </section>
  );
};

export default ProxyChecker;

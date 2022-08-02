import { useCallback, useEffect, useMemo, useState } from 'react';

import { Languages } from '@/constants';

import { DropdownType, TypeDC } from './types';

import type { ITextSelectOptions } from '@/components/dropdowns/TextSelect';
import type { ProxyCheckerSlice } from '@/prismic';

const useProxyChecker = ({ items, primary }: ProxyCheckerSlice) => {
  const [activeTypeDC, setTypeDC] = useState(TypeDC.Shared);
  const languageTabs = useMemo(
    () => [
      { label: 'JavaScript', value: Languages.JavaScript },
      { label: 'Java', value: Languages.Java },
      { label: 'Python', value: Languages.Python },
    ],
    [],
  );

  const languageTabsLabels = useMemo(() => languageTabs.map(({ label }) => label), [languageTabs]);

  const typesDC = useMemo(
    () => [
      { label: primary.typeDC1, value: TypeDC.Shared },
      { label: primary.typeDC2, value: TypeDC.Dedicated },
    ],
    [primary.typeDC1, primary.typeDC2],
  );

  const locationOptions = useMemo(
    () =>
      items.filter((x) => x.dropdownType === DropdownType.Location && x.typeDC === activeTypeDC),
    [items, activeTypeDC],
  );
  const sessionsOptions = useMemo(
    () => items.filter((x) => x.dropdownType === DropdownType.Session && x.typeDC === activeTypeDC),
    [items, activeTypeDC],
  );

  const [location, setLocation] = useState<ITextSelectOptions>(locationOptions[0]);
  const [proxyType, setProxyType] = useState<ITextSelectOptions>(sessionsOptions[0]);

  const selectTypeDC = useCallback((value: string) => {
    setTypeDC(value as TypeDC);
  }, []);

  useEffect(() => {
    setLocation(locationOptions[0]);
    setProxyType(sessionsOptions[0]);
  }, [locationOptions, sessionsOptions]);

  return {
    location,
    proxyType,
    locationOptions,
    sessionsOptions,
    activeTypeDC,
    typesDC,
    languageTabsLabels,
    languageTabs,
    selectTypeDC,
    setLocation,
    setProxyType,
  };
};

export default useProxyChecker;

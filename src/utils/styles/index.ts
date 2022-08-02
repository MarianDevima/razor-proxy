import { deviceMediaQuery } from '@/constants';

import type { DefaultTheme, ThemedStyledProps, CSSObject } from 'styled-components';

const wrapInMediaQuery = (mediaQueryKey: string, cssObject: CSSObject): CSSObject => ({
  [mediaQueryKey]: cssObject,
});

export const sinceTablet: SinceMediaFunc = (themedStyledFunction) => (innerProps) => {
  return wrapInMediaQuery(deviceMediaQuery.tablet, themedStyledFunction(innerProps));
};
export const sinceLaptop: SinceMediaFunc = (themedStyledFunction) => (innerProps) => {
  return wrapInMediaQuery(deviceMediaQuery.laptop, themedStyledFunction(innerProps));
};
export const sinceDesktop: SinceMediaFunc = (themedStyledFunction) => (innerProps) => {
  return wrapInMediaQuery(deviceMediaQuery.desktop, themedStyledFunction(innerProps));
};

type ThemedStyledFunction<T extends Object> = (
  props: ThemedStyledProps<T, DefaultTheme>,
) => CSSObject;

type SinceMediaFunc = <T extends Object>(
  themedStyledFunction: ThemedStyledFunction<T>,
) => ThemedStyledFunction<T>;

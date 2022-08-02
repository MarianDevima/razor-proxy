import type { IObjectToMerge } from './object.type';

export const isEmpty = (obj: unknown) => {
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj ?? {}).length === 0;
  }
  return true;
};

export const mergeObject = <T extends IObjectToMerge>(A?: T, B?: T) => {
  const union: IObjectToMerge = { ...A, ...B };
  Object.keys(union).map((key) => {
    if (typeof union[key] === 'object' && union[key] !== null) {
      union[key] = !isEmpty(B?.[key]) ? B?.[key] : A?.[key];
      return;
    }

    union[key] = B?.[key] || A?.[key];
  });

  return union as T;
};

export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !('nodeType' in e)) {
    throw new Error(`Node expected`);
  }
}

import type { AllDocumentTypes } from '@/prismic';

export interface ICustomTypeInfo {
  id: AllDocumentTypes['type'];
  label: string;
  repeatable: boolean;
  status: boolean;
}

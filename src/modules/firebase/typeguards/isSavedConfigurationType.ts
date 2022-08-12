import { DocumentData } from 'firebase/firestore';
import { SavedCarConfiguration } from 'types';

export function isSavedConfigurationType(
  data: DocumentData,
): data is SavedCarConfiguration {
  return 'userId' in data && 'createdAt' in data;
}

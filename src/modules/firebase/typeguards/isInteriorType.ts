import { DocumentData } from 'firebase/firestore';
import { Interior } from 'types';

export function isInteriorType(data: DocumentData): data is Interior {
  return 'interiorName' in data && 'interiorPrice' in data;
}

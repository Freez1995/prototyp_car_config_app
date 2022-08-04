import { DocumentData } from 'firebase/firestore';
import { Color } from 'types';

export function isColorType(data: DocumentData): data is Color {
  return 'colorName' in data && 'colorPrice' in data;
}

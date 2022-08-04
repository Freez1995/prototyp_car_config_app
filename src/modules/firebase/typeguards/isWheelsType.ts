import { DocumentData } from 'firebase/firestore';
import { Wheels } from 'types';

export function isWheelsType(data: DocumentData): data is Wheels {
  return 'wheelsModel' in data && 'wheelsPrice' in data;
}

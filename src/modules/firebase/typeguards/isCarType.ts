import { DocumentData } from 'firebase/firestore';
import { Car } from 'types';

export function isCarType(data: DocumentData): data is Car {
  return (
    'carModel' in data &&
    'carYear' in data &&
    'carFrontImg' in data &&
    'carPrice' in data
  );
}

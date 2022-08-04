import { DocumentData } from 'firebase/firestore';
import { Exterior } from 'types';

export function isExteriorType(data: DocumentData): data is Exterior {
  return 'colorId' in data && 'wheelsId' in data && 'imgUrl' in data;
}

import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from 'firebaseConfig';
import { Color } from 'types';
import { isColorType, isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from 'modules/configurator';

export function useCarColors() {
  const setColors = useSetRecoilState(configuratorAtoms.carColors);
  const colorsCollection = collection(db, 'colors');

  function getCarColors(carId: string) {
    const colorList: Color[] = [];
    const colorsQuery = query(colorsCollection, where('carId', '==', carId));
    getDocs(colorsQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const colorId = snapshot.id;
          const data = snapshot.data();
          if (isColorType(data)) {
            colorList.push({
              colorId: colorId,
              colorName: data.colorName,
              colorPrice: data.colorPrice,
              iconUrl: data.iconUrl,
            });
          }
        });
        setColors(colorList);
      })
      .catch((error) => {
        if (isFirestoreError(error)) {
          toast.error(error.message);
          return;
        }
        toast.error('Request failed, please try again or contact our support');
      });
  }

  return {
    getCarColors,
  };
}

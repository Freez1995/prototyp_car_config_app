import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from 'firebaseConfig';
import { Interior } from 'types';
import { isInteriorType, isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from 'modules/configurator';

export function useCarInteriors() {
  const setInteriors = useSetRecoilState(configuratorAtoms.carInteriors);
  const interiorsCollection = collection(db, 'interiors');

  function getCarInteriors(carId: string) {
    const interiorsList: Interior[] = [];
    const interiorsQuery = query(
      interiorsCollection,
      where('carId', '==', carId),
    );
    getDocs(interiorsQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const interiorId = snapshot.id;
          const data = snapshot.data();
          if (isInteriorType(data)) {
            interiorsList.push({ ...data, interiorId: interiorId });
          }
        });
        setInteriors(interiorsList);
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
    getCarInteriors,
  };
}

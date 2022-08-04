import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from 'firebaseConfig';
import { Wheels } from 'types';
import { isWheelsType, isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from 'modules/configurator';

export function useCarWheels() {
  const setWheels = useSetRecoilState(configuratorAtoms.carWheels);
  const wheelsCollection = collection(db, 'wheels');

  function getCarWheels(carId: string) {
    const wheelsList: Wheels[] = [];
    const wheelsQuery = query(wheelsCollection, where('carId', '==', carId));
    getDocs(wheelsQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const wheelsId = snapshot.id;
          const data = snapshot.data();
          if (isWheelsType(data)) {
            wheelsList.push({ ...data, wheelsId: wheelsId });
          }
        });
        setWheels(wheelsList);
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
    getCarWheels,
  };
}

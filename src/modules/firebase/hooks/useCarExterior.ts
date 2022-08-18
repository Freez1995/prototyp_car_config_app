import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { isExteriorType, isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from 'modules/configurator';
import { Exterior } from 'types';

export function useCarExterior() {
  const setExterior = useSetRecoilState(configuratorAtoms.carExterior);
  const exteriorsCollection = collection(db, 'exteriorImages');

  function getCarExteriors(carId: string) {
    const exteriorsList: Exterior[] = [];
    const exteriorsQuery = query(
      exteriorsCollection,
      where('carId', '==', carId),
    );
    getDocs(exteriorsQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const exteriorId = snapshot.id;
          const data = snapshot.data();
          if (isExteriorType(data)) {
            exteriorsList.push({
              exteriorId: exteriorId,
              imgUrl: data.imgUrl,
              colorId: data.colorId,
              wheelsId: data.wheelsId,
            });
          }
        });
        setExterior(exteriorsList);
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
    getCarExteriors,
  };
}

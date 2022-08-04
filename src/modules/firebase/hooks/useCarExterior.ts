import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { isExteriorType, isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from 'modules/configurator';

export function useCarExterior() {
  const setExterior = useSetRecoilState(configuratorAtoms.carExterior);
  const exteriorsCollection = collection(db, 'exteriorImages');

  function getCarExterior(colorId: string, wheelsId: string) {
    const exteriorsQuery = query(
      exteriorsCollection,
      where('colorId', '==', colorId),
      where('wheelsId', '==', wheelsId),
    );
    getDocs(exteriorsQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const exteriorId = snapshot.id;
          const data = snapshot.data();
          if (isExteriorType(data)) {
            setExterior({ exteriorId: exteriorId, imgUrl: data.imgUrl });
          }
        });
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
    getCarExterior,
  };
}

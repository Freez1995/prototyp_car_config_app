import { useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';

export function useSavedCarConfigs() {
  const [configurationExist, setConfigurationExist] = useState(false);
  const savedConfigsCollection = collection(db, 'savedConfigurations');

  function getSavedCars() {
    const savedConfigsQuery = query(savedConfigsCollection);
    getDocs(savedConfigsQuery)
      .then((querySnapshot) => {
        querySnapshot.empty && setConfigurationExist(false);
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
    configurationExist,
    getSavedCars,
  };
}

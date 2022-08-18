import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { authAtoms } from 'modules/auth';
import { configuratorSelectors } from 'modules/configurator';
import { isFirestoreError, isSavedConfigurationType } from 'modules/firebase';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { SavedCarConfiguration } from 'types';

export function useCarConfiguration() {
  const [savedConfigurations, setSavedConfigurations] = useState<
    SavedCarConfiguration[]
  >([]);
  const carConfiguration = useRecoilValue(
    configuratorSelectors.savedCarConfiguration,
  );
  const userId = useRecoilValue(authAtoms.userAuthState);
  const configurationsCollection = collection(db, 'savedConfigurations');

  function saveCarConfiguration() {
    setDoc(doc(configurationsCollection), {
      userId: carConfiguration.userId,
      car: carConfiguration.car,
      carSideImage: carConfiguration.carSideImage,
      color: carConfiguration.color,
      wheels: carConfiguration.wheels,
      interior: carConfiguration.interior,
      createdAt: carConfiguration.createdAt,
    })
      .then(() =>
        toast.success('Configuration successfully saved', { autoClose: 2000 }),
      )
      .catch((error) => {
        if (isFirestoreError(error)) {
          toast.error(error.message);
          return;
        }
        toast.error('Request failed, please try again or contact our support');
      });
  }

  function updateCarConfiguration(documentId: string) {
    updateDoc(doc(configurationsCollection, documentId), {
      userId: carConfiguration.userId,
      car: carConfiguration.car,
      carSideImage: carConfiguration.carSideImage,
      color: carConfiguration.color,
      wheels: carConfiguration.wheels,
      interior: carConfiguration.interior,
      createdAt: carConfiguration.createdAt,
    })
      .then(() =>
        toast.success('Configuration successfully updated', {
          autoClose: 2000,
        }),
      )
      .catch((error) => {
        if (isFirestoreError(error)) {
          toast.error(error.message);
          return;
        }
        toast.error('Request failed, please try again or contact our support');
      });
  }

  function deleteCarConfiguration(documentId: string) {
    deleteDoc(doc(configurationsCollection, documentId))
      .then(() =>
        toast.success('Configuration successfully deleted', {
          autoClose: 2000,
        }),
      )
      .catch((error) => {
        if (isFirestoreError(error)) {
          toast.error(error.message);
          return;
        }
        toast.error('Request failed, please try again or contact our support');
      });
  }

  function getSavedConfigurations() {
    let savedConfigurationList: SavedCarConfiguration[] = [];
    const savedConfigsQuery = query(
      configurationsCollection,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
    );
    onSnapshot(savedConfigsQuery, (querySnapshot) => {
      if (querySnapshot.empty) return setSavedConfigurations([]);
      querySnapshot.docs.forEach((snapshot) => {
        const configurationId = snapshot.id;
        const data = snapshot.data();
        if (isSavedConfigurationType(data)) {
          savedConfigurationList.push({
            documentId: configurationId,
            car: data.car,
            color: data.color,
            wheels: data.wheels,
            interior: data.interior,
            carSideImage: data.carSideImage,
            userId: data.userId,
            createdAt: data.createdAt,
          });
        }
      });
      setSavedConfigurations(savedConfigurationList);
      savedConfigurationList = [];
    });
  }

  return {
    saveCarConfiguration,
    updateCarConfiguration,
    deleteCarConfiguration,
    getSavedConfigurations,
    savedConfigurations,
  };
}

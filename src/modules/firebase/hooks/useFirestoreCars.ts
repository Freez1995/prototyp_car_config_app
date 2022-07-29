import { useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { isCarType, isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';
import { Car } from '../models';

export function useFirestoreCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const carsCollection = collection(db, 'cars');

  function getAllCars() {
    const carsQuery = query(carsCollection);
    getDocs(carsQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const carId = snapshot.id;
          const data = snapshot.data();
          isCarType(data) &&
            setCars((cars) => [...cars, { ...data, carId: carId }]);
        });
      })
      .catch((error) => {
        if (isFirestoreError(error)) {
          toast.error(error.message);
          return;
        }
        toast.error('Request failed, please try again or contact our support');
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }

  return {
    cars,
    isLoaded,
    getAllCars,
  };
}

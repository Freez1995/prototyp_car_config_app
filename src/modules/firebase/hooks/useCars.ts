import { useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { isCarType, isFirestoreError } from '../typeguards';
import { toast } from 'react-toastify';
import { Car } from 'types';

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const carsCollection = collection(db, 'cars');

  function getAllCars() {
    const carList: Car[] = [];
    const carsQuery = query(carsCollection);
    getDocs(carsQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const carId = snapshot.id;
          const data = snapshot.data();
          if (isCarType(data)) {
            carList.push({ ...data, carId: carId });
          }
        });
        setCars(carList);
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

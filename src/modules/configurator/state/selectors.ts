import { authAtoms } from 'modules/auth';
import { selector } from 'recoil';
import { configuratorAtoms } from './atoms';
import { SavedCarConfiguration } from 'types/SavedCarConfiguration';
import { Timestamp } from 'firebase/firestore';

export const carTotalPrice = selector<number>({
  key: 'configurator.totalPrice.state',
  get: ({ get }) => {
    const selectedCar = get(configuratorAtoms.selectedCar);
    const selectedColor = get(configuratorAtoms.selectedColor);
    const selectedWheels = get(configuratorAtoms.selectedWheels);
    const selectedInterior = get(configuratorAtoms.selectedInterior);

    const totalPrice =
      selectedCar.carPrice +
      selectedColor.colorPrice +
      selectedWheels.wheelsPrice +
      selectedInterior.interiorPrice;

    return totalPrice;
  },
});

export const selectedExterior = selector<string[]>({
  key: 'configurator.selectedExteriror.state',
  get: ({ get }) => {
    const selectedColor = get(configuratorAtoms.selectedColor);
    const selectedWheels = get(configuratorAtoms.selectedWheels);
    const carExteriors = get(configuratorAtoms.carExterior);

    const exterior = carExteriors.find(
      (exterior) =>
        exterior.colorId === selectedColor.colorId &&
        exterior.wheelsId === selectedWheels.wheelsId,
    );

    if (!exterior) return [];
    return exterior.imgUrl;
  },
});

export const savedCarConfiguration = selector<SavedCarConfiguration>({
  key: 'configurator.savedCarConfiguration.state',
  get: ({ get }) => {
    const userId = get(authAtoms.userAuthState);
    const selectedCar = get(configuratorAtoms.selectedCar);
    const selectedColor = get(configuratorAtoms.selectedColor);
    const selectedWheels = get(configuratorAtoms.selectedWheels);
    const selectedInterior = get(configuratorAtoms.selectedInterior);
    const exteriorImages = get(selectedExterior);

    const savedConfiguration = {
      userId: userId,
      car: selectedCar,
      color: selectedColor,
      wheels: selectedWheels,
      carSideImage: exteriorImages[2],
      interior: selectedInterior,
      createdAt: Timestamp.now(),
    };

    return savedConfiguration;
  },
});

export const configuratorSelectors = {
  carTotalPrice,
  savedCarConfiguration,
  selectedExterior,
};

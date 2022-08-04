import { selector } from 'recoil';
import { configuratorAtoms } from './atoms';

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

export const configuratorSelectors = {
  carTotalPrice,
};

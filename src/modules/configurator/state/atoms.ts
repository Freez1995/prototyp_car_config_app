import { atom } from 'recoil';
import { Car, Color, Exterior, Interior, Wheels } from 'types';

const carColors = atom<Color[]>({
  key: 'configurator.colors.state',
  default: [],
});

const carWheels = atom<Wheels[]>({
  key: 'configurator.wheels.state',
  default: [],
});

const carInteriors = atom<Interior[]>({
  key: 'configurator.interiors.state',
  default: [],
});

const carExterior = atom<Exterior[]>({
  key: 'configurator.exteriors.state',
  default: [],
});

const selectedColor = atom<Color>({
  key: 'configurator.selectedColor.state',
  default: {
    colorId: '',
    colorName: '',
    colorPrice: 0,
    iconUrl: '',
  },
});

const selectedWheels = atom<Wheels>({
  key: 'configurator.selectedWheels.state',
  default: {
    wheelsId: '',
    wheelsModel: '',
    wheelsPrice: 0,
    iconUrl: '',
  },
});

const selectedInterior = atom<Interior>({
  key: 'configurator.selectedInterior.state',
  default: {
    interiorId: '',
    interiorName: '',
    interiorPrice: 0,
    iconUrl: '',
    imgUrl: [],
  },
});

const selectedCar = atom<Car>({
  key: 'configurator.selectedCar.state',
  default: {
    carId: '',
    carFrontImg: '',
    carYear: 0,
    carModel: '',
    carPrice: 0,
  },
});

const currentDocumentId = atom<string>({
  key: 'configurator.currentDocId.state',
  default: '',
});

export const configuratorAtoms = {
  carColors,
  selectedColor,
  carWheels,
  selectedWheels,
  carInteriors,
  selectedInterior,
  carExterior,
  selectedCar,
  currentDocumentId,
};

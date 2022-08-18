import { configuratorAtoms } from 'modules/configurator';
import {
  useCarColors,
  useCarExterior,
  useCarInteriors,
  useCarWheels,
} from 'modules/firebase';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { UpdateCarConfiguration } from 'types';

export function useHomeContent() {
  const setSelectedCar = useSetRecoilState(configuratorAtoms.selectedCar);
  const setSelectedColor = useSetRecoilState(configuratorAtoms.selectedColor);
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);
  const setSelectedInterior = useSetRecoilState(
    configuratorAtoms.selectedInterior,
  );
  const setCurrentDocId = useSetRecoilState(
    configuratorAtoms.currentDocumentId,
  );
  const { getCarExteriors } = useCarExterior();
  const { getCarColors } = useCarColors();
  const { getCarWheels } = useCarWheels();
  const { getCarInteriors } = useCarInteriors();
  const navigate = useNavigate();

  function handleUpdateConfiguration({
    car,
    color,
    wheels,
    interior,
    documentId,
  }: UpdateCarConfiguration) {
    setSelectedCar(car);
    getCarExteriors(car.carId);
    getCarColors(car.carId);
    getCarWheels(car.carId);
    getCarInteriors(car.carId);
    setSelectedColor(color);
    setSelectedWheels(wheels);
    setSelectedInterior(interior);
    if (documentId) {
      setCurrentDocId(documentId);
    }
    navigate('/configurator-summary');
  }

  return {
    handleUpdateConfiguration,
  };
}

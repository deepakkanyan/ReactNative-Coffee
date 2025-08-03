import { useEffect, useState, useCallback } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AppTableName } from '../constant/ApiConstants';
import { CoffeeModel } from '../getCoffeelist/CoffeeModel';

type CoffeeState = {
  loading: boolean;
  data: CoffeeModel[] | null;
  error: string | null;
};

const fetchFamousCoffees = async (): Promise<CoffeeModel[]> => {
  const snapshot = await firestore()
    .collection(AppTableName.FamousCoffee)
    .get();
  return snapshot.docs.map(doc => doc.data() as CoffeeModel);
};

export const useCoffeeData = () => {
  const [state, setState] = useState<CoffeeState>({
    loading: true,
    data: null,
    error: null,
  });

  const loadData = useCallback(async () => {
    console.log('Fetching famous coffees...');
    setState({ loading: true, data: null, error: null });
    try {
      const data = await fetchFamousCoffees();
      console.log('Fetched famous coffees:', data);
      setState({ loading: false, data, error: null });
    } catch (err) {
      console.error('Error fetching famous coffees:', err);
      setState({
        loading: false,
        data: null,
        error: err instanceof Error ? err.message : 'Unexpected error',
      });
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { ...state, refetch: loadData };
};

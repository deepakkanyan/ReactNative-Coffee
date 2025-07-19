import { useState, useEffect } from 'react';
import { CoffeeModel } from '../../api/getCoffeelist/CoffeeModel';
import { fetchCoffeeData } from '../../api/getCoffeelist/ApiGetCoffeeList';

interface CoffeeState {
  loading: boolean;
  data: CoffeeModel[] | null;
  error: string | null;
}

export const useCoffeeData = () => {
  const [state, setState] = useState<CoffeeState>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const loadData = async () => {
      setState({ loading: true, data: null, error: null });
      try {
        const result = await fetchCoffeeData();
        console.log('Fetched coffee data:', result);
        setState({ loading: false, data: result, error: null });
      } catch (err) {
        console.error('Error fetching coffee data:', err);
        setState({
          loading: false,
          data: null,
          error: err instanceof Error ? err.message : 'Unknown error',
        });
      }
    };

    loadData();
  }, []); // Empty dependency array for initial fetch

  return state;
};

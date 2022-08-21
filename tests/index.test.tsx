import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook, waitFor } from '@testing-library/react';
import Home from 'src/pages/index';

import { useFetchMovies } from '@/src/hooks/fetchHooks';

interface IChildren {
  children: React.ReactNode;
}

describe('Home Page', () => {
  it('renders without crashing', async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }: IChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useFetchMovies(''), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBeTruthy());
  });
});

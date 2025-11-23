import { RouterProvider, StoreProvider } from "@/app/providers";
import { AppRouter } from "@/app/router";

function App() {
  return (
    <StoreProvider>
      <RouterProvider>
        <AppRouter />
      </RouterProvider>
    </StoreProvider>
  );
}

export default App;

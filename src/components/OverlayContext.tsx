import { createContext, useContext, type ReactNode } from "react";

export type OverlayApi = {
  openProject: (id: string) => void;
  openBooking: () => void;
};

const OverlayContext = createContext<OverlayApi>({
  openProject: () => {},
  openBooking: () => {},
});

export function OverlayProvider({
  children,
  openProject,
  openBooking,
}: OverlayApi & { children: ReactNode }) {
  return (
    <OverlayContext.Provider value={{ openProject, openBooking }}>
      {children}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  return useContext(OverlayContext);
}

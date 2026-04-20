import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LmsProvider } from "./context/LmsContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <LmsProvider>
        <RouterProvider router={router} />
      </LmsProvider>
    </AuthProvider>
  );
}

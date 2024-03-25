import { AuthProvider } from "./AuthContext";
import Routers from "./Routers/Routers";
export default function App() {
  return (
    <>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </>
  );
}

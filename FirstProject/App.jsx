import { AuthContextProvider } from "./src/context/AuthContext"
import Navigator from "./Navigator"

export default function App() {  
  return (
    <AuthContextProvider>
        <Navigator/>
    </AuthContextProvider>
  )
}
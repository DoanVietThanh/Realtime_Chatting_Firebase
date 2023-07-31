import './App.css';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AppProvider from './context/AppProvider';
import AdddRoomModal from './components/Modals/AdddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ChatRoom />} />
          </Routes>
          <AdddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

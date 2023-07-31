import React, { createContext, useContext, useMemo, useState } from 'react';
import useFireStore from '../hooks/useFireStore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [selectedRoomdID, setSelectedRoomdID] = useState('');
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const {
    user: { uid },
  } = useContext(AuthContext);

  // Query Room Condition
  const roomsCondition = useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFireStore('rooms', roomsCondition);

  // Query Users Condition
  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomdID) || {},
    [rooms, selectedRoomdID]
  );
  const usersCondition = useMemo(() => {
    return {
      fieldName: 'uid',
      operator: 'in',
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);
  const members = useFireStore('users', usersCondition);

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomdID,
        setSelectedRoomdID,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

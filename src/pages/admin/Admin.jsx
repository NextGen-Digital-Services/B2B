import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AUTH_KEY = 'zycoon_admin_auth';

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === '1');

  if (!authed) {
    return (
      <AdminLogin
        onSuccess={() => {
          sessionStorage.setItem(AUTH_KEY, '1');
          setAuthed(true);
        }}
      />
    );
  }

  return (
    <AdminDashboard
      onLogout={() => {
        sessionStorage.removeItem(AUTH_KEY);
        setAuthed(false);
      }}
    />
  );
}
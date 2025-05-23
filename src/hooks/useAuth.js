import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: Check localStorage or cookie
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return { user, setUser };
}

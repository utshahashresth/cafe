"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
interface User {
  id: string;
  name: string;
}
const page = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        console.error(error);
      }
      setUsers(data as User[]);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default page;

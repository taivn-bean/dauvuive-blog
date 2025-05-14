import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { User } from "@supabase/supabase-js";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Create the client inside useEffect to avoid issues with SSR
    const supabase = createClient();

    // Fetch user on mount
    const getUser = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        if (!session) {
          setUser(null);
          return;
        }

        setUser((await supabase.auth.getUser()).data.user);
      } catch (err) {
        console.error("Unexpected error:", err);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", _event, session?.user?.email);
      setUser(session?.user ?? null);
    });

    // Cleanup listener on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [pathname]);

  return { user, isLoading };
};

export default useAuth;

import ProtectedAppShell from "@/components/layout/ProtectedAppShell";

// app/(protected)/layout.jsx
export default function ProtectedLayout({ children }) {
  return (
    <>
   {/* ✅ You can add Sidebar/Header here */}
     <ProtectedAppShell>
      {
        children
      }
     </ProtectedAppShell>
    
    </>
  );
}
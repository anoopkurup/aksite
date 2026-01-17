// This route group layout wraps children without defining html/body
// to avoid conflicts with the root layout

export default function SampleGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Full-screen overlay to create visually independent sample pages */}
      <div className="fixed inset-0 z-[100] bg-white overflow-auto">
        {children}
      </div>
    </>
  );
}

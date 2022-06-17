export function LightTheme({ children }: any) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>Light Theme</h2>
      {children}
    </div>
  );
}

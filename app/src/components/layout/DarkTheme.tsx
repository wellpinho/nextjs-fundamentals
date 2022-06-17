type Props = {
  children: React.ReactNode;
};

export const DarkTheme = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>Dark Theme</h2>
      {children}
    </div>
  );
};

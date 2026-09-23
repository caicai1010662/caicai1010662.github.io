export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "color-mix(in srgb, var(--bg) 96%, transparent)",
      }}
    >
      <div
        className="site-container type-body flex items-center justify-center px-5 py-5 text-center"
        style={{ color: "var(--text-muted)" }}
      >
        <p>© {new Date().getFullYear()} Lizhen Fan</p>
      </div>
    </footer>
  );
}

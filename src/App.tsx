function App() {
  return (
    <main
      aria-label="Hatfield seawater system map"
      className="min-h-screen w-full bg-white bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hatfield-seawater-system-map.webp')",
        backgroundSize: "cover",
      }}
    >
      <button onClick={() => window.location.href = '/weather'} className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
        To Weather Data
      </button>
    </main>
  );
}

export default App;

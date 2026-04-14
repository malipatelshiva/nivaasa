function PremiumBackground() {
  return (
    <div className="fixed inset-0 -z-10">

      {/* Gradient Background */}
      <div className="absolute w-full h-full bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Optional overlay pattern */}
      <div className="absolute w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

    </div>
  );
}

export default PremiumBackground;
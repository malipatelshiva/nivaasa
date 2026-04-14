function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919346708563"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </a>

      {/* Call */}
      <a
        href="tel:9346708563"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
      >
        📞
      </a>

      {/* Email */}
      <a
        href="mailto:yourmail@gmail.com"
        className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg"
      >
        ✉️
      </a>

    </div>
  );
}

export default FloatingButtons;
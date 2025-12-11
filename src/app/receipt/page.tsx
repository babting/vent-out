import Link from 'next/link';

const ReceiptPage = () => {
  const currentDate = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-4">
      <div className="bg-white text-black p-8 shadow-lg w-full max-w-md relative font-mono">
        {/* Zigzag Border */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white transform rotate-180" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 95% 100%, 90% 50%, 85% 100%, 80% 50%, 75% 100%, 70% 50%, 65% 100%, 60% 50%, 55% 100%, 50% 50%, 45% 100%, 40% 50%, 35% 100%, 30% 50%, 25% 100%, 20% 50%, 15% 100%, 10% 50%, 5% 100%, 0% 50%)' }}></div>

        <h1 className="text-center text-xl font-bold mb-4">VENT-OUT RECEIPT</h1>
        <p className="text-sm text-center mb-6">{currentDate}</p>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">Emotion Components:</h2>
          <p>Rage ......... 60%</p>
          <p>Fatigue ....... 30%</p>
          <p>Hunger ........ 10%</p>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">AI Prescription:</h2>
          <p>상사 때문에 열받았군요. 지금 당장 편의점으로 가서 초콜릿을 사드세요.</p>
        </div>

        <div className="mb-6 text-right">
          <p>Total Burned: 1 Stress</p>
          <p>Points Earned: +50 P</p>
        </div>

        {/* Barcode */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-[150px] h-12 flex">
            <div className="bg-black w-[5%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[3%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[6%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[4%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[7%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[5%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[3%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[6%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[4%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
            <div className="bg-black w-[7%] h-full"></div>
            <div className="bg-white w-[2%] h-full"></div>
          </div>
        </div>

      </div>
      <Link href="/">
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          메인으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

export default ReceiptPage;

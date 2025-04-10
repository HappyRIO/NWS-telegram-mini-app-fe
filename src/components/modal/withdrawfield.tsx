import Image from "next/image";
import { useEffect, useState } from "react";

interface WithdrawModalProps {
  onClose: () => void;
}

export default function WithdrawModal({ onClose }: WithdrawModalProps) {
  const [amount, setAmount] = useState<number | null>(null);
  const [address, setAddress] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWithdraw = () => {
    // Implement withdrawal logic here
    console.log(`Withdrawing ${amount} $GALA to ${address}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div
        className={`fixed bottom-0 bg-[#ED1147] rounded-t-xl border-t-4 border-yellow-400 w-full transform transition-transform duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-purple-300 hover:text-white"
        >
          <Image src="/image/close.svg" alt="Close" width={24} height={24} />
        </button>
        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <div className="bg-yellow-400 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#1E1E3F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center">
            Withdraw $GALA
          </h2>
          <div>
            <p className="text-white mb-2">Amount:</p>
            <div className="grid grid-cols-3 gap-2">
              {[100, 200, 500].map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`py-2 rounded ${
                    amount === value
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white mb-2">Address:</p>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address Format: client|xxxx_xxxx"
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
            <p className="text-green-400 text-sm mt-1 cursor-pointer hover:underline">
              How to find my GoloChain address?
            </p>
          </div>
          <p className="text-red-500 text-sm text-center">
            Incorrect addresses will result in losses.
            <br />
            You will receive tokens in 72 hrs
          </p>
          <button
            onClick={handleWithdraw}
            className="w-full py-3 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition-colors"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* First Image Section */}
        <div className="flex flex-col space-y-8">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/images/Water-proof-design.png"
              alt="Water-resistant A520s headphones"
              fill
              className="object-cover"
              priority
              quality={100}
              style={{
                imageRendering: 'crisp-edges',
                filter: 'contrast(1.15) brightness(1.1) saturate(1.1)'
              }}
            />
          </div>
          
          <div className="text-center lg:text-left px-2">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
              RAIN OR SHINE? YOUR BEATS STAY FINE
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Stormy weather? Sweaty workout? Bring it on. The A520s laugh in the face of water with military-grade protection that keeps your music pumping no matter what.
            </p>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="flex flex-col space-y-8">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/images/low-sound-leakage.png"
              alt="A520s headphones with crystal clear microphone"
              fill
              className="object-cover"
              style={{
                filter: 'contrast(1.1) brightness(1.1)'
              }}
            />
          </div>
          
          <div className="text-center lg:text-left px-2">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
              CRYSTAL CLEAR OR YOUR MONEY BACK
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Our studio-grade mic tech captures your voice with stunning clarity - so whether you're closing deals or chatting with friends, you'll sound like you're right there with them.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroImage;
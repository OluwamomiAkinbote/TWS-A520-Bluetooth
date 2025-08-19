import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* First Image Section */}
        <div className="flex flex-col space-y-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/Painless-Waterproof.png"
              alt="Waterproof A520 wireless earbuds"
              fill
              className="object-cover"
              priority
              quality={100}
              style={{
                imageRendering: 'crisp-edges',
                filter: 'contrast(1.15) brightness(1.1) saturate(1.1)',
              }}
            />
          </div>
          
          <div className="text-center lg:text-left px-2">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
              Sweat? Rain? No Problem.
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Power through Lagos rains or intense gym sessions without skipping a beat. 
              With <span className="text-cyan-300 font-semibold">IPX7 waterproof protection</span>, 
              the A520 keeps your music alive no matter what life throws at you.
            </p>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="flex flex-col space-y-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/slide-image-2.jpeg"
              alt="A520 wireless earbuds with clear microphone"
              fill
              className="object-cover"
              style={{
                filter: 'contrast(1.1) brightness(1.1)',
              }}
            />
          </div>
          
          <div className="text-center lg:text-left px-2">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
              Calls So Clear, It Feels Face-to-Face
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              No more “Can you hear me?” moments. 
              The <span className="text-emerald-300 font-semibold">AI-powered noise-canceling mic</span>  
              captures your voice with crystal clarity—whether you’re sealing a business deal or chatting with friends.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroImage;

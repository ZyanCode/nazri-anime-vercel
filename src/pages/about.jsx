import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'About'; // Set the title when the component mounts
    return () => {
      // Reset the title to the previous one when the component unmounts
      document.title = previousTitle;
    };
  }, []);

return (
    <div className="mt-[-2rem] bg-black pt-[120px] pb-[50px] ">
    <div className="max-w-[50rem] mx-auto px-4 py-8 text-base leading-6 text-white">
        <div className="mb-4">
        <h1 className="p-2 font-bold text-3xl">About</h1>
        <h3 className="font-bold text-lg mt-2 p-2">What's Nazri Anime.?</h3>
        <p className="mt-2 p-2">
            Anime Nazri. adalah situs streaming anime tempat Anda dapat menonton anime online
            dalam kualitas HD dengan subtitle atau dubbing bahasa Inggris. Anda juga bisa
            unduh anime apa pun yang Anda inginkan tanpa registrasi.
          </p>
        </div>
        <div className="mb-4 p-2">
          <h3 className="font-bold text-lg">Is Nazri Anime. safe?</h3>
          <p className="mt-2">
            Ya. Kami memulai situs ini untuk meningkatkan UX dan berkomitmen untuk itu
            menjaga keamanan pengguna kami. Kami mendorong semua pengguna kami untuk memberi tahu kami jika
            ada sesuatu yang terlihat mencurigakan.
        </p>
        </div>
        <div >
          <h3 className="font-bold text-lg p-2">Why Nazri Anime.?</h3>
          <p className="mt-2 p-2">
            <strong>Content Library:</strong> Kami memiliki banyak koleksi keduanya
            anime lama dan baru, menjadikan kami salah satu perpustakaan anime terbesar
            Web.
          </p>
          <p className="mt-2 p-2">
            <strong>Streaming Experience:</strong> Enjoy{' '}
            <span className="font-bold text-custom-color">cepat dan dapat diandalkan</span>{' '}
            streaming dengan kami{' '}
            <span className="font-bold text-custom-color">server terbaik</span>.
          </p>
          <p className="mt-2 p-2">
            <strong>Quality/Resolution:</strong> Video kami tersedia di{' '}
            <span className="font-bold text-custom-color">high resolution</span>, dan kami menawarkan
            pengaturan kualitas agar sesuai dengan kecepatan internet Anda.
          </p>
          <p className="mt-2 p-2">
            <strong>Frequent Updates:</strong> Konten kami diperbarui setiap jam hingga
            memberi Anda <span className="font-bold text-custom-color">rilis terbaru</span>.
          </p>
          <p className="mt-2 p-2">
            <strong>User-Friendly Interface:</strong>Kami fokus pada{' '}
            <span className="font-bold text-custom-color">kesederhanaan dan kemudahan penggunaan</span>.
          </p>
          <p className="mt-2 p-2">
            <strong>Device Compatibility:</strong> Nazri Anime. bekerja dengan lancar pada keduanya{' '}
            <span className="font-bold text-custom-color">desktop dan perangkat seluler</span>.
          </p>
          <p className="mt-2 p-2">
            <strong>Community:</strong> Bergabunglah dengan kami{' '}
            <span className="font-bold text-custom-color">komunitas pecinta anime</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

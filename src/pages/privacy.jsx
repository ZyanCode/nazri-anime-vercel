import React, { useEffect } from 'react';

const sections = [
  {
    title: 'Privacy Policy',
    content: (
      <p>
        <strong>Data Collection</strong>:Kami mengumpulkan data pengguna minimal yang diperlukan
        untuk berfungsinya Nazri Anime. seperti pengguna
        preferensi.
        <br />
        <br />
        <strong>Use of Data</strong>: Data yang dikumpulkan digunakan untuk perbaikan
        kualitas layanan dan pengalaman pengguna. Kami tidak membagikan data pribadi kepada
        pihak ketiga kecuali diwajibkan oleh hukum.
        <br />
        <br />
        <strong>Cookies and Tracking</strong>: Nazri Anime. menggunakan cookie dan sejenisnya
        teknologi pelacakan untuk meningkatkan pengalaman pengguna seperti menyimpan video dalam cache
        cap waktu dan pelacakan konten yang ditonton.
        <br />
        <br />
        <strong>Third-Party Services</strong>: Video tersemat dari pihak ketiga
        situs mungkin memiliki kebijakan privasinya sendiri, dan kami menyarankan pengguna untuk membacanya
        kebijakan ini di situs masing-masing.
        <br />
        <br />
        <strong>Security</strong>: Kami berkomitmen untuk memastikan data Anda ada
        aman tetapi mengingatkan pengguna bahwa tidak ada metode transmisi melalui Internet
        100% aman.
        <br />
        <br />
        <strong>Changes to Privacy Policy</strong>: Kami dapat memperbarui Privasi kami
        Kebijakan dari waktu ke waktu. Kami akan memberi tahu pengguna tentang perubahan apa pun melalui postingan
        kebijakan baru di halaman ini.
        <br />
        <br />
        <strong>Contact Us</strong>: Jika Anda memiliki pertanyaan tentang ini
        ketentuan, silakan hubungi kami di{' '}
        <a href='mailto:nazrixddeswara@gmail.com' className="font-bold text-indigo-600">
          nazrixddeswara@gmail.com
        </a>
      </p>
    ),
  },
  {
    title: 'Terms of Service',
    content: (
      <p>
        <strong>Acceptance of Terms</strong>: By using Nazri Anime. kamu menyetujuinya
        Ketentuan Layanan ini dan mengakui bahwa hal tersebut memengaruhi hukum Anda
        hak dan kewajiban.
        <br />
        <br />
        <strong>Content</strong>: Nazri Anime. tidak menghosting konten video tetapi menyematkan
        video dari berbagai sumber pihak ketiga. Kami tidak bertanggung jawab atas
        konten, kualitas, atau kebijakan situs eksternal tersebut.
        <br />
        <br />
        <strong>Use of Site</strong>: Layanan disediakan "sebagaimana adanya" dan apa adanya
        digunakan atas risiko pengguna sendiri. Pengguna tidak boleh menyalahgunakan layanan dalam hal apa pun
        cara yang melanggar hukum atau peraturan.
        <br />
        <br />
        <strong>User Content</strong>: Pengguna dapat berbagi konten, seperti komentar
        atau ulasan, secara bertanggung jawab. Kami berhak menghapus konten apa pun yang
        melanggar kebijakan kami atau dianggap tidak pantas.
        <br />
        <br />
        <strong>Intellectual Property</strong>: Hak kekayaan intelektual
        dari video yang disematkan tetap menjadi milik pemiliknya masing-masing. Nazri Anime.
        menghormati hak-hak ini dan tidak mengklaim kepemilikan atas konten ini.
        <br />
        <br />
        <strong>Changes to Terms of Service</strong>: Kami berhak untuk itu
        mengubah ketentuan ini kapan saja. Melanjutkan penggunaan situs setelah perubahan
        merupakan penerimaan terhadap persyaratan baru.
        <br />
        <br />
        <strong>Termination</strong>: Kami dapat menghentikan atau menangguhkan akses ke situs kami
        layanan segera, tanpa pemberitahuan sebelumnya, atas pelanggaran apa pun terhadap hal ini
        Ketentuan.
      </p>
    ),
  },
];

function PolicyTerms() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Policy & Terms'; // Set the title when the component mounts
    return () => {
      // Reset the title to the previous one when the component unmounts
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="mt-[-2rem]  bg-black pt-[120px] pb-[50px]">
      <div className="max-w-[50rem] mx-auto px-4 py-8 text-base leading-6 text-white">
        {sections.map((section, index) => (
          <div key={index}>
            {section.title && <h1 className="font-bold text-2xl mb-4">{section.title}</h1>}
            <div className="mb-4">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PolicyTerms;

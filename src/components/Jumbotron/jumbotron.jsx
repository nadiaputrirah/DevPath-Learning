import React from 'react';
import banner from "../../assets/img-banner.svg";

export default function Jumbotron() {
    return (
        <div>
            <section className="bg-white">
                <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl font-extrabold text-[#273147] dark:text-white">
                        Mulai Karir Full Stack Web Developer Anda di Sini!
                    </h2>
                    <p className="mb-6 text-[#273147] md:text-lg dark:text-white">
                        Kuasi keterampilan, alat, dan teknologi yang dibutuhkan untuk sukses di dunia pengembangan web dengan kursus online kami yang komprehensif.
                    </p>
                    <a href="#" className="text-white bg-[#6059F7] hover:bg-indigo-300 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                        Daftar Kelas
                    </a>
                    </div>
                    <img className="w-full" src={banner} alt="banner image" />
                </div>
            </section>
        </div>
    );
}

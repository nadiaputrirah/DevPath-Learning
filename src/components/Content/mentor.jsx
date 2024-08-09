import React from 'react';
import imgMentor from "../../assets/img-mentor.svg";

export default function Mentor() {
    return (
        <div>
            <section className="bg-white">
                <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-5xl space-x-6 font-bold text-[#273147] dark:text-white">
                    Dapatkan Bimbingan dari Mentor DevPath
                    </h2>
                    <p className="mb-6 text-[#273147] md:text-lg dark:text-white leading-10">
                    Mentor berpengalaman kami akan mengunggah materi terbaru, memberikan tantangan, serta menilai  portofolio Anda.
                    </p>
                    <a href="#" className="text-white bg-[#6059F7] hover:bg-indigo-300 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                        Daftar Kelas
                    </a>
                    </div>
                    <img className="w-full" src={imgMentor} alt="banner image" />
                </div>
            </section>
        </div>
    );
}
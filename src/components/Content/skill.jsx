import React from 'react';
import imgSkill from "../../assets/img-skill.svg";

export default function Skill() {
    return (
        <div>
            <section className="bg-white">
                <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className="w-full" src={imgSkill} alt="banner image" />

                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-5xl font-bold text-[#273147] dark:text-white">
                        Tingkatkan Skill Anda Bersama DevPath
                        </h2>
                        <p className="mb-6 text-[#273147] md:text-lg dark:text-white">
                        Belajar dari dasar secara gratis yang dapat diakses kapan saja. Dengan dukungan tools dan sumber daya yang lengkap, 
                        serta kesempatan untuk membangun portofolio profesional melalui proyek nyata
                        </p>
                        <a href="#" className="text-white bg-[#6059F7] hover:bg-indigo-300 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                            Daftar Kelas
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
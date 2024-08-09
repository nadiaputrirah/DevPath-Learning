import React from 'react';
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";

export default function WhyDev() {
    return (
        <div>
            <section className="bg-white">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h1 className="text-3xl text-center font-bold mb-5 text-[#273147]">Mengapa DevPath?</h1>
                    <p className="text-center text-[#273147] max-w-lg mx-auto text-lg mb-10">Platform pembelajaran online yang dirancang khusus untuk membantu Anda menjadi Full Stack Developer yang handal.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8 flex items-center text-center justify-center">
                        <div className="px-5 py-4 flex flex-col items-center justify-center">
                            <img src={img1} alt="img1" />
                            <p className="text-center text-[#273147] text-lg p-6">
                                Materi up-to-date dan fokus pada satu bidang, yaitu Full Stack Development
                            </p>
                        </div>

                        <div className="px-5 py-4 flex flex-col items-center justify-center">
                            <img src={img2} alt="img2" />
                            <p className="text-center text-[#273147] text-lg p-6">
                                Akses materi kapan saja, di mana saja, tanpa batasan waktu.
                            </p>
                        </div>

                        <div className="px-5 py-4 flex flex-col items-center justify-center">
                            <img src={img3} alt="img3" />
                            <p className="text-center text-[#273147] text-lg p-6">
                                Nikmati pengalaman belajar secara daring dengan mentor berpengalaman
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

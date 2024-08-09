import React from "react";

export default function Review(){
    return(
        <div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10">
                <div className="w-full mb-8 lg:mb-16 text-center">
                    <h2 className="mb-4 text-[#273147] text-4xl font-bold mx-auto">
                        Dari Siswa, untuk Siswa
                    </h2>
                    <p className="text-[#273147] text-lg lg:w-1/2 mx-auto">
                        Testimoni dari siswa yang telah menjalani perjalanan belajar dan bagaimana program kami telah membantu mereka berkembang.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8">
                    <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-5 pb-5">
                            <h6 className="text-[#273147] text-lg font-bold mr-auto">Maria Natasya</h6>
                            <div className="flex items-center mt-2.5 mb-5 text-[#273147]">
                                <p>DevPath mengubah cara saya belajar. Materi yang jelas dan mentor yang mendukung!</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-5 pb-5">
                            <h6 className="text-[#273147] text-lg font-bold mr-auto">Nadia Putri</h6>
                            <div className="flex items-center mt-2.5 mb-5 text-[#273147]">
                                <p>Kursus terstruktur dengan tantangan yang membantu. Sangat direkomendasikan!</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-5 pb-5">
                            <h6 className="text-[#273147] text-lg font-bold mr-auto">Michael Agustinus</h6>
                            <div className="flex items-center mt-2.5 mb-5 text-[#273147]">
                                <p>Pengalaman belajar yang memuaskan! Akses materi gratis dan bimbingan mentor yang hebat!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8">
                    <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-5 pb-5">
                            <h6 className="text-[#273147] text-lg font-bold mr-auto">Maria Natasya</h6>
                            <div className="flex items-center mt-2.5 mb-5 text-[#273147]">
                                <p>DevPath mengubah cara saya belajar. Materi yang jelas dan mentor yang mendukung!</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-5 pb-5">
                            <h6 className="text-[#273147] text-lg font-bold mr-auto">Nadia Putri</h6>
                            <div className="flex items-center mt-2.5 mb-5 text-[#273147]">
                                <p>Kursus terstruktur dengan tantangan yang membantu. Sangat direkomendasikan!</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-5 pb-5">
                            <h6 className="text-[#273147] text-lg font-bold mr-auto">Michael Agustinus</h6>
                            <div className="flex items-center mt-2.5 mb-5 text-[#273147]">
                                <p>Pengalaman belajar yang memuaskan! Akses materi gratis dan bimbingan mentor yang hebat!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
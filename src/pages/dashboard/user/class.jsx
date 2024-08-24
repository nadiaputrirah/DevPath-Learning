import React from 'react';
import NavUser from '../../../components/dashboard/user/navbar';
import SidebarUser from '../../../components/dashboard/user/sidebar';

export default function ClassUser() {
    return (
        <div>
            <NavUser />
            <SidebarUser />

            <div className="p-4 sm:ml-64">
                <div className="p-4">
                    <div className="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6">
                        <div className="w-full space-y-10 md:gap-12 md:space-y-0">
                            <h2 className="mb-4 text-3xl mt-10 font-bold text-[#014539]">
                                Kuasai Inovasi Terbaru
                            </h2>
                            <p className="text-[#014539] font-normal">
                            Tingkatkan pengetahuan dan pengalaman terbaru Anda di dunia teknologi
                            </p>
                        </div>
                    </div>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-20">
                        <div className="w-full mb-8 lg:mb-16 text-center">
                            <h2 className="mb-4 text-[#273147] text-4xl font-bold mx-auto">
                                Jelajahi Alur Belajar Anda
                            </h2>
                            <p className="text-[#273147] text-lg lg:w-1/2 mx-auto">
                                Rancang alur belajar yang terstruktur untuk membantu Anda mencapai kesuksesan sebagai Full Stack Developer
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8">
                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={html5} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">HTML5 Dasar</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={css} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">CSS Website Design</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={php} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">PHP Dasar</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8">
                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={vanillajs} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">Vanilla JavaScript Website</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={wordpress} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">Wordpress.com Website</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={flutter} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">Flutter Website Sederhana</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8">
                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={bootstrap} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">CSS Bootstrap 4 Web Design</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={ruby} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">Ruby on Rails Web</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="px-5 pb-5">
                                    <a href="">
                                    <img src={laravel} alt="" />
                                    <div className="items-center text-center text-bold mt-5 mb-4 text-[#273147]">
                                        <h6 className="text-[#273147] text-lg font-bold mr-auto">Laravel</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import banner from "../../assets/img-banner.svg";

export default function RegisterForm() {
    return (
        <div>
            <section className="bg-white mt-10">
                <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className="w-full" src={banner} alt="banner image" />
                    
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl font-extrabold text-[#273147] dark:text-white">
                            Mulai Karir Full Stack Web Developer Anda di Sini!
                        </h2>

                        <form class="mx-auto mt-5">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Anda</label>
                            <input type="email" id="email" class="bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-4 mt-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama anda" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Anda</label>
                            <input type="email" id="email" class="bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-4 mt-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama@gmail.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <a href="/kelas-user" class="text-white bg-[#6059F7] hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" type="submit">Register</a>
                        </form>

                        <p className="mb-4 text-2xs text-center font-normal mt-5 text-[#273147] dark:text-white">
                            Sudah punya akun? <a href="/login" className="font-bold">Login</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

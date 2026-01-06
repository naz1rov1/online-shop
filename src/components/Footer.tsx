import React from "react";
import { FaInstagram, FaTelegramPlane, FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-whitemt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

        <div>
          <h3 className="font-semibold mb-4">Biz haqida</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-gray-900 cursor-pointer">Topshirish punktlari</li>
            <li className="hover:text-gray-900 cursor-pointer">Vakansiyalar</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Foydalanuvchilarga</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-gray-900 cursor-pointer">Biz bilan bog‘lanish</li>
            <li className="hover:text-gray-900 cursor-pointer">Savol-Javob</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Tadbirkorlarga</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-gray-900 cursor-pointer">Uzumda soting</li>
            <li className="hover:text-gray-900 cursor-pointer">Sotuvchi kabinetiga kirish</li>
            <li className="hover:text-gray-900 cursor-pointer">Topshirish punktini ochish</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Ilovani yuklab olish</h3>
          <div className="flex space-x-4 mb-4">
            <SiAppstore className="w-6 h-6 cursor-pointer hover:text-gray-900" />
            <SiGoogleplay className="w-6 h-6 cursor-pointer hover:text-gray-900" />
          </div>

          <h3 className="font-semibold mb-2">Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex space-x-4">
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-900" />
            <FaTelegramPlane className="w-6 h-6 cursor-pointer hover:text-gray-900" />
            <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-gray-900" />
            <FaYoutube className="w-6 h-6 cursor-pointer hover:text-gray-900" />
          </div>
        </div>
      </div>

     
      <div className="bg-gray-100 text-gray-500 text-sm py-4 mt-6 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <span className="hover:text-gray-900 cursor-pointer">Maxfiylik kelishuvi</span>
          <span className="hover:text-gray-900 cursor-pointer">Foydalanuvchi kelishuvi</span>
          <span className="hover:text-gray-900 cursor-pointer">SHAXSIY MA'LUMOTLARNI QAYTA ISHLASH NIZOMI «UZUM MARKET» MCHJ XK</span>
        </div>
        <div className="mt-2">©2026 «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan</div>
      </div>
    </footer>
  );
};

export default Footer;

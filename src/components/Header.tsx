

import Link from "next/link";
import Image from "next/image";
import { FaUserCircle, FaHeart, FaShoppingBasket, FaSearch } from "react-icons/fa";
import uzum from "../app/assets/uzum-logo.png"


interface HeaderProps {
  totalCount: number;
}

const Header: React.FC<HeaderProps> = ({ totalCount }) => {
  return (
    <header className="w-full font-sans border-b border-gray-200">

      <div className="bg-gray-100 text-sm">
        <div className="container mx-auto flex justify-between items-center py-1 px-4">
          <div className="flex items-center gap-4 text-gray-700">
            <span>Toshkent</span>
            <a href="#" className="hover:text-purple-600">Yetkazib berish punktlari</a>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <a href="#" className="hover:text-purple-600">Sotuvchi bo‘lish</a>
            <a href="#" className="hover:text-purple-600">FAQ</a>
            <span>Til</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option value="uz">O‘zbekcha</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>

  
      <div className="container mx-auto flex justify-between items-center py-3 px-4">

        <div className="flex items-center gap-4">
          <div className="logo">
            <Link href="/">
              <Image src={uzum} alt="Uzum Market" width={120} height={40} />
            </Link>
          </div>

          <button className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
            Katalog
          </button>

          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Qidiruv..."
              className="px-2 py-1 outline-none"
            />
            <button className=" text-black px-3 py-1 ">
              <FaSearch />
            </button>
          </div>
        </div>

  
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
            <FaUserCircle /> Kirish
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
            <FaHeart /> Sevimlilar
          </a>

          <Link href="/cart" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 relative">
            <FaShoppingBasket /> Savat
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {totalCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

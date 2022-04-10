import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Link to={"/"} className="sidebar__logo">
        <svg
          width="130"
          height="18"
          viewBox="0 0 130 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.4596 11.0948C28.5967 10.3024 30.0629 8.59761 30.0629 5.88497V5.83581C30.0629 4.22789 29.5829 2.95543 28.6213 1.99386C27.4934 0.866002 25.8595 0.289062 23.7223 0.289062H16.0385V17.0999H19.7372V11.7195H22.6422L26.2456 17.0999H30.5676L26.4596 11.0948ZM26.3164 6.07728C26.3164 7.51892 25.3071 8.45301 23.4809 8.45301H19.7358V3.62636H23.41C25.2363 3.62636 26.3179 4.41875 26.3179 6.02956V6.07728H26.3164Z"
            fill="white"
          />
          <path
            d="M41.6101 0C36.4234 0 32.6523 3.91424 32.6523 8.69317V8.74089C32.6523 13.5198 36.3757 17.3863 41.5624 17.3863C46.7491 17.3863 50.5202 13.4721 50.5202 8.69317V8.64546C50.5202 3.86797 46.7968 0 41.6101 0ZM46.6537 8.74089C46.6537 11.6242 44.5888 13.9768 41.6116 13.9768C38.6343 13.9768 36.5218 11.5735 36.5218 8.69317V8.64546C36.5218 5.7622 38.5866 3.4096 41.5639 3.4096C44.5411 3.4096 46.6537 5.8128 46.6537 8.69317V8.74089Z"
            fill="white"
          />
          <path
            d="M68.3371 0.289062L62.2134 9.4623L56.0897 0.289062H54.1709V17.0999H56.0188V3.50779L62.1425 12.4902H62.2394L68.3631 3.48321V17.0999H70.2602V0.289062H68.3371Z"
            fill="white"
          />
          <path
            d="M86.8485 0.289062V10.0638C86.8485 13.738 84.8776 15.6106 81.7818 15.6106C78.5385 15.6106 76.6428 13.5934 76.6428 9.94236V0.289062H74.7457V10.0638C74.7457 14.8182 77.5784 17.3631 81.7327 17.3631C85.9346 17.3631 88.7456 14.8413 88.7456 9.91923V0.289062H86.8485Z"
            fill="white"
          />
          <path
            d="M99.2622 7.78188C95.5389 7.01407 94.6987 6.10021 94.6987 4.51543V4.46627C94.6987 2.93065 96.0666 1.75362 98.2761 1.75362C100.005 1.75362 101.567 2.30599 103.127 3.57844L104.233 2.11367C102.504 0.74434 100.799 0.0488281 98.3252 0.0488281C95.1311 0.0488281 92.8002 2.0168 92.8002 4.634V4.68172C92.8002 7.44496 94.5787 8.69284 98.4438 9.53294C101.973 10.3008 102.815 11.1655 102.815 12.7271V12.7763C102.815 14.4319 101.349 15.6321 99.067 15.6321C96.7376 15.6321 95.0573 14.8642 93.3034 13.2563L92.1278 14.6488C94.1449 16.475 96.3052 17.3383 98.9947 17.3383C102.332 17.3383 104.734 15.4658 104.734 12.5839V12.5362C104.735 9.96674 103.007 8.62199 99.2622 7.78188Z"
            fill="white"
          />
          <path
            d="M108.769 0.289062V17.0999H110.666V0.289062H108.769Z"
            fill="white"
          />
          <path
            d="M128.748 13.2075C127.14 14.746 125.626 15.6324 123.322 15.6324C119.599 15.6324 116.814 12.5828 116.814 8.69317V8.64546C116.814 4.77893 119.6 1.75396 123.322 1.75396C125.627 1.75396 127.164 2.71408 128.604 4.05884L129.902 2.66637C128.246 1.05701 126.395 0 123.345 0C118.423 0 114.846 3.93882 114.846 8.69317V8.74089C114.846 13.5675 118.425 17.3863 123.275 17.3863C126.301 17.3863 128.27 16.2093 130 14.4322L128.748 13.2075Z"
            fill="white"
          />
          <path
            d="M13.3029 6.09897V6.14813C13.3029 10.0624 10.2765 12.0564 6.50542 12.0564H3.69735V17.0985H0V0.289062H6.86692C10.878 0.289062 13.3029 2.64165 13.3029 6.09897Z"
            fill="white"
          />
          <path
            d="M9.02719 7.81597C8.57894 8.15288 7.93983 8.04443 7.62605 7.57883L6.82787 6.39168L4.83966 8.99443L2.90929 6.22251L2.76325 6.39313C2.44658 6.76619 1.98243 6.97875 1.49369 6.97875H0V4.99199H1.39681L3.21728 3.17151L4.87003 5.634L6.9421 3.03125L9.25277 6.48856C9.54196 6.91946 9.44363 7.5022 9.02719 7.81597Z"
            fill="#F5E333"
          />
        </svg>
      </Link>
      <Link className="none" to={"/"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Dashboard</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/products"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Products</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/brands"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Brands</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/categories"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Categories</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/info"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Informations</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/settings"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Settings</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/sliders"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Sliders</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/subcategories"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Sub categories</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

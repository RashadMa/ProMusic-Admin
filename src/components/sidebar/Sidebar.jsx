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
          d="M26.4604 11.0948C28.5975 10.3024 30.0637 8.59761 30.0637 5.88497V5.83581C30.0637 4.22789 29.5837 2.95543 28.6221 1.99386C27.4942 0.866002 25.8603 0.289062 23.7231 0.289062H16.0392V17.0999H19.738V11.7195H22.643L26.2464 17.0999H30.5684L26.4604 11.0948ZM26.3172 6.07728C26.3172 7.51892 25.3079 8.45301 23.4817 8.45301H19.7366V3.62636H23.4108C25.2371 3.62636 26.3187 4.41875 26.3187 6.02956V6.07728H26.3172Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M41.6101 0C36.4234 0 32.6523 3.91424 32.6523 8.69317V8.74089C32.6523 13.5198 36.3757 17.3863 41.5624 17.3863C46.7491 17.3863 50.5202 13.4721 50.5202 8.69317V8.64546C50.5202 3.86797 46.7968 0 41.6101 0ZM46.6537 8.74089C46.6537 11.6242 44.5888 13.9768 41.6116 13.9768C38.6343 13.9768 36.5218 11.5735 36.5218 8.69317V8.64546C36.5218 5.76219 38.5866 3.4096 41.5639 3.4096C44.5411 3.4096 46.6537 5.8128 46.6537 8.69317V8.74089Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M68.3371 0.289062L62.2134 9.4623L56.0897 0.289062H54.1709V17.0999H56.0188V3.50779L62.1425 12.4902H62.2394L68.3631 3.48321V17.0999H70.2602V0.289062H68.3371Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M86.8502 0.289062V10.0638C86.8502 13.738 84.8794 15.6106 81.7836 15.6106C78.5402 15.6106 76.6446 13.5934 76.6446 9.94236V0.289062H74.7475V10.0638C74.7475 14.8182 77.5801 17.3631 81.7344 17.3631C85.9364 17.3631 88.7473 14.8413 88.7473 9.91923V0.289062H86.8502Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M99.2643 7.78188C95.5409 7.01407 94.7008 6.10021 94.7008 4.51543V4.46627C94.7008 2.93065 96.0687 1.75362 98.2782 1.75362C100.008 1.75362 101.569 2.30599 103.129 3.57844L104.236 2.11367C102.506 0.74434 100.801 0.0488281 98.3273 0.0488281C95.1332 0.0488281 92.8023 2.0168 92.8023 4.634V4.68172C92.8023 7.44496 94.5808 8.69284 98.4459 9.53294C101.975 10.3008 102.817 11.1655 102.817 12.7271V12.7763C102.817 14.4319 101.351 15.6321 99.0691 15.6321C96.7396 15.6321 95.0594 14.8642 93.3055 13.2563L92.1299 14.6488C94.147 16.475 96.3073 17.3383 98.9968 17.3383C102.334 17.3383 104.736 15.4658 104.736 12.5839V12.5362C104.737 9.96674 103.009 8.62199 99.2643 7.78188Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M108.771 0.289062V17.0999H110.668V0.289062H108.771Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M128.748 13.2075C127.141 14.746 125.627 15.6324 123.323 15.6324C119.6 15.6324 116.815 12.5828 116.815 8.69317V8.64546C116.815 4.77893 119.601 1.75396 123.323 1.75396C125.628 1.75396 127.165 2.71408 128.605 4.05884L129.902 2.66637C128.247 1.057 126.396 0 123.346 0C118.424 0 114.847 3.93882 114.847 8.69317V8.74089C114.847 13.5675 118.426 17.3863 123.275 17.3863C126.302 17.3863 128.271 16.2093 130.001 14.4322L128.748 13.2075Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M13.3029 6.09897V6.14813C13.3029 10.0624 10.2765 12.0564 6.50542 12.0564H3.69735V17.0985H0V0.289062H6.86692C10.878 0.289062 13.3029 2.64165 13.3029 6.09897Z"
          fill="#1B1C1F"
        ></path>
        <path
          d="M9.02719 7.81597C8.57894 8.15288 7.93983 8.04443 7.62605 7.57883L6.82787 6.39168L4.83966 8.99443L2.90929 6.22251L2.76325 6.39313C2.44658 6.76619 1.98243 6.97875 1.49369 6.97875H0V4.99199H1.39681L3.21728 3.17151L4.87003 5.634L6.9421 3.03125L9.25277 6.48856C9.54196 6.91946 9.44363 7.5022 9.02719 7.81597Z"
          fill="#F5E333"
        ></path>
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
      <Link  className="none" to={"/categories"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Categories</span>
          </div>
        </div>
      </Link>
      <Link  className="none" to={"/info"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Informations</span>
          </div>
        </div>
      </Link>
      <Link  className="none" to={"/"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Settings</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/"}>
        <div className="sidebar__item">
          <div className="sidebar__item-inner ">
            <i className="bx bx-category-alt"></i>
            <span>Sliders</span>
          </div>
        </div>
      </Link>
      <Link className="none" to={"/"}>
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

import React from "react";

const Footerlinks = () => {
  return (
    //     <>
    //     {/* Quick link svg */}

    //     <div>
    //     <svg width="251" height="55" viewBox="0 0 251 55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
    //       position:'relative',
    //       marginTop:'0',
    //       alignContent:'center',
    //       marginBottom:'120%',
    //       marginLeft:'20%',
    //       zIndex:'0'
    //     }}>
    // <path d="M9 52.205C9 52.905 8.9 53.455 8.7 53.855C8.5 54.255 8.2 54.54 7.8 54.71C7.4 54.87 6.905 54.95 6.315 54.95H2.85C2.27 54.95 1.785 54.87 1.395 54.71C0.994999 54.55 0.694999 54.27 0.495 53.87C0.285 53.47 0.18 52.915 0.18 52.205V47.825C0.18 47.125 0.285 46.58 0.495 46.19C0.694999 45.79 0.994999 45.51 1.395 45.35C1.785 45.18 2.27 45.095 2.85 45.095H4.815C5.565 45.095 6.165 45.19 6.615 45.38C7.055 45.56 7.43 45.885 7.74 46.355C7.93 46.645 8.16 47.14 8.43 47.84C8.5 47.42 8.575 47.03 8.655 46.67C8.725 46.3 8.785 45.98 8.835 45.71C8.895 45.38 8.95 45.045 9 44.705C9.04 44.355 9.07 44.05 9.09 43.79C9.12 43.53 9.14 43.37 9.15 43.31L10.44 43.64C10.45 43.68 10.47 43.785 10.5 43.955C10.54 44.125 10.56 44.355 10.56 44.645C10.56 45.075 10.515 45.48 10.425 45.86C10.345 46.23 10.235 46.64 10.095 47.09C9.965 47.49 9.835 47.86 9.705 48.2C9.575 48.53 9.455 48.875 9.345 49.235C9.245 49.595 9.16 50.01 9.09 50.48C9.03 50.95 9 51.525 9 52.205ZM7.56 51.77V49.91C7.56 49.24 7.485 48.7 7.335 48.29C7.175 47.87 6.9 47.565 6.51 47.375C6.11 47.175 5.555 47.075 4.845 47.075H2.67C2.38 47.075 2.135 47.18 1.935 47.39C1.725 47.6 1.62 47.885 1.62 48.245V51.77C1.62 52.13 1.715 52.42 1.905 52.64C2.095 52.86 2.35 52.97 2.67 52.97H6.495C6.835 52.97 7.1 52.865 7.29 52.655C7.47 52.435 7.56 52.14 7.56 51.77ZM9.15 39.37C9.15 40.28 8.905 40.915 8.415 41.275C7.925 41.635 7.275 41.815 6.465 41.815H0.18V39.835H6.525C6.995 39.835 7.31 39.72 7.47 39.49C7.63 39.26 7.71 38.975 7.71 38.635V35.455C7.71 35.135 7.63 34.855 7.47 34.615C7.3 34.375 6.985 34.255 6.525 34.255H0.18V32.275H6.465C7.005 32.275 7.475 32.35 7.875 32.5C8.275 32.65 8.59 32.9 8.82 33.25C9.04 33.6 9.15 34.085 9.15 34.705V39.37ZM9 28.9807H0.18V27.0007H9V28.9807ZM9 20.8808C9 21.5908 8.9 22.1458 8.7 22.5458C8.5 22.9458 8.2 23.2258 7.8 23.3858C7.4 23.5458 6.905 23.6258 6.315 23.6258H2.97C2.01 23.6258 1.305 23.4108 0.854999 22.9808C0.394999 22.5508 0.164999 21.8508 0.164999 20.8808V16.3658C0.164999 15.6758 0.204999 15.1508 0.285 14.7908C0.355 14.4208 0.43 14.2358 0.509999 14.2358L1.755 14.5358C1.725 14.7058 1.695 15.2108 1.665 16.0508C1.625 16.8808 1.605 18.0908 1.605 19.6808V20.4458C1.605 21.2458 1.96 21.6458 2.67 21.6458H6.495C6.835 21.6458 7.1 21.5608 7.29 21.3908C7.47 21.2108 7.56 20.8958 7.56 20.4458V19.8308C7.56 18.1708 7.545 16.8858 7.515 15.9758C7.475 15.0558 7.435 14.4858 7.395 14.2658L8.385 13.6508C8.435 13.6508 8.51 13.7358 8.61 13.9058C8.71 14.0658 8.8 14.3658 8.88 14.8058C8.96 15.2458 9 15.8808 9 16.7108V20.8808ZM9.15 1.62254C9.15 2.11254 9.05 2.53754 8.85 2.89754C8.65 3.25754 8.38 3.61254 8.04 3.96254C7.64 4.34254 7.18 4.80254 6.66 5.34254C6.4 5.59254 6.185 5.84754 6.015 6.10754C5.845 6.36754 5.715 6.66254 5.625 6.99254C5.535 7.31254 5.49 7.71254 5.49 8.19254V8.89754H9V10.8775H1.38L0.18 11.0275V8.89754H4.02V8.05754C4.02 7.85754 3.995 7.69254 3.945 7.56254C3.895 7.43254 3.815 7.31254 3.705 7.20254C3.425 6.92254 3.075 6.60254 2.655 6.24254C2.235 5.88254 1.805 5.53254 1.365 5.19254C0.915 4.84254 0.52 4.54254 0.18 4.29254L0.18 1.86254L1.08 2.47754C1.37 2.75754 1.685 3.05754 2.025 3.37754C2.365 3.69754 2.7 4.01254 3.03 4.32254C3.35 4.63254 3.635 4.91254 3.885 5.16254C4.125 5.41254 4.3 5.59754 4.41 5.71754C4.5 5.44754 4.615 5.20254 4.755 4.98254C4.895 4.75254 5.1 4.47254 5.37 4.14254C5.57 3.89254 5.775 3.65254 5.985 3.42254C6.195 3.18254 6.445 2.90754 6.735 2.59754C7.055 2.24754 7.29 1.91754 7.44 1.60754C7.59 1.29754 7.685 1.03754 7.725 0.827538C7.765 0.607538 7.785 0.467538 7.785 0.407538L9 0.707539C9.03 0.737539 9.06 0.827538 9.09 0.977538C9.13 1.12754 9.15 1.34254 9.15 1.62254Z" fill="white"/>
    // <path d="M25.12 44L25.76 38.88V6.368H34.208V37.856H60.704L63.264 43.296C63.264 43.4667 62.688 43.6373 61.536 43.808C60.384 43.936 58.4 44 55.584 44H25.12ZM73.795 44V6.368H82.243V44H73.795ZM97.9225 44V11.488L97.2825 6.368H106.498L128.258 29.152L130.755 32.608H131.458V6.368H139.907V44H131.778L109.507 20.832L107.01 17.824H106.37V44H97.9225ZM195.085 44.64C192.995 44.64 191.181 44.2133 189.645 43.36C188.109 42.5067 186.595 41.3547 185.101 39.904C183.48 38.1973 181.517 36.2347 179.213 34.016C178.147 32.9067 177.059 31.9893 175.949 31.264C174.84 30.5387 173.581 29.984 172.173 29.6C170.808 29.216 169.101 29.024 167.053 29.024H164.045V44H155.597V11.488L154.957 6.368H164.045V22.752H167.629C168.483 22.752 169.187 22.6453 169.741 22.432C170.296 22.2187 170.808 21.8773 171.277 21.408C172.472 20.2133 173.837 18.72 175.373 16.928C176.909 15.136 178.403 13.3013 179.853 11.424C181.347 9.504 182.627 7.81867 183.693 6.368H194.061L191.437 10.208C190.243 11.4453 188.963 12.7893 187.597 14.24C186.232 15.6907 184.888 17.12 183.565 18.528C182.243 19.8933 181.048 21.1093 179.981 22.176C178.915 23.2 178.125 23.9467 177.613 24.416C178.765 24.8 179.811 25.2907 180.749 25.888C181.731 26.4853 182.925 27.36 184.333 28.512C185.4 29.3653 186.424 30.24 187.405 31.136C188.429 32.032 189.603 33.0987 190.925 34.336C192.419 35.7013 193.827 36.704 195.149 37.344C196.472 37.984 197.581 38.3893 198.477 38.56C199.416 38.7307 200.013 38.816 200.269 38.816L198.989 44C198.861 44.128 198.477 44.256 197.837 44.384C197.197 44.5547 196.28 44.64 195.085 44.64ZM217.988 44C215.087 44 212.953 43.872 211.588 43.616C210.223 43.36 209.54 43.0613 209.54 42.72L212.1 37.152C213.081 37.3227 215.513 37.4933 219.396 37.664C223.321 37.792 228.697 37.856 235.524 37.856H236.74C238.575 37.856 239.876 37.536 240.644 36.896C241.412 36.2133 241.796 35.0827 241.796 33.504V32.224C241.796 30.7307 241.476 29.664 240.836 29.024C240.239 28.384 238.873 28.064 236.74 28.064H221.892C217.583 28.064 214.447 27.2747 212.484 25.696C210.521 24.0747 209.54 21.4507 209.54 17.824V16.8C209.54 14.9227 209.881 13.1947 210.564 11.616C211.289 10.0373 212.505 8.77866 214.212 7.84C215.919 6.85867 218.265 6.368 221.252 6.368H238.66C241.561 6.368 243.908 6.51733 245.7 6.816C247.492 7.11467 248.388 7.43467 248.388 7.776L247.108 13.152C245.999 13.024 243.481 12.896 239.556 12.768C235.631 12.5973 230.361 12.512 223.748 12.512L223.044 12.448C221.081 12.448 219.759 12.8533 219.076 13.664C218.393 14.432 218.031 15.4133 217.988 16.608V17.696C217.988 19.104 218.372 20.1707 219.14 20.896C219.951 21.5787 221.273 21.92 223.108 21.92H237.316C240.047 21.92 242.372 22.1973 244.292 22.752C246.212 23.3067 247.684 24.3307 248.708 25.824C249.732 27.2747 250.244 29.4293 250.244 32.288V33.312C250.244 36.512 249.412 39.0933 247.748 41.056C246.127 43.0187 243.289 44 239.236 44H217.988Z" fill="white"/>
    // </svg>
    // </div>
    // <div>
    // <svg width="397" height="63" viewBox="0 0 397 63" fill="none" xmlns="http://www.w3.org/2000/svg"
    // style={{
    //   position:'relative',
    //   alignContent:'center',
    //   marginLeft:'0',
    //   zIndex:'1',
    //   width:'130%',
    //   transform:'translateX(-14rem)'
    // }}>
    //         <g filter="url(#filter0_d_319_2)" >
    //           <rect x="0" y="-30" width="100%" height="100%" fill="black" style={{padding:'1rem'}}/>
    //           <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50" viewBox="0 0 315 50" fill="none"
    //           style={{
    //             width:'50rem',
    //           }}>
    //   <g filter="url(#filter0_d_548_37)">
    //     <path d="M10.8286 37.5422V41H120.406L125.069 38.5422H10.8286Z" fill="white"/>
    //     <path d="M5 0V34.0843M311 37.5422H125.069M125.069 37.5422H10.8286V41H120.406L125.069 37.5422Z" stroke="white"/>
    //   </g>
    //   <defs>
    //     <filter id="filter0_d_548_37" x="0.5" y="0" width="314.5" height="49.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    //       <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    //       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    //       <feOffset dy="4"/>
    //       <feGaussianBlur stdDeviation="2"/>
    //       <feComposite in2="hardAlpha" operator="out"/>
    //       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    //       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_37"/>
    //       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_548_37" result="shape"/>
    //     </filter>
    //   </defs>
    // </svg>  </g>
    //         <foreignObject x="50" y="10" width="100%" height="100%">
    //           <a href="" target="_blank" rel="noopener noreferrer">
    //             <rect x="10" y="10" width="100%" height="100%" fill="black" />
    //             <text x="50%" y="50%" fill="white" textAnchor="middle" dominantBaseline="middle" fontSize="16" style={{color:'white', fontFamily:'Bruno Ace SC',}}>
    //               LINK
    //             </text>
    //           </a>
    //         </foreignObject>
    //       </svg>

    //       </div>

    //     </>
    // <div className="flex w-full pb-14 md:pb-28 justify-center items-center h-full">
    //   <div className="flex flex-col justify-center items-center w-[35%] relative">
    //     <div className="Links-heading flex items-center">
    //       <h4 className="text-inherit tracking-[0.08em] font-normal font-goldman flex items-center transform -rotate-90">
    //         QUICK
    //       </h4>
    //       <h2 className="text-5xl md:text-45xl tracking-[0.08em] font-normal font-goldman flex items-center">
    //         LINKS
    //       </h2>
    //     </div>
    <div>
      <div>
        <svg
          width="100%"
          height="55"
          viewBox="0 0 251 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "relative",
            alignContent: "center",
            marginLeft: "",
            zIndex: "1",
            width: "100%",
            marginBottom: "10%",
          }}
        >
          <path
            d="M9 52.205C9 52.905 8.9 53.455 8.7 53.855C8.5 54.255 8.2 54.54 7.8 54.71C7.4 54.87 6.905 54.95 6.315 54.95H2.85C2.27 54.95 1.785 54.87 1.395 54.71C0.994999 54.55 0.694999 54.27 0.495 53.87C0.285 53.47 0.18 52.915 0.18 52.205V47.825C0.18 47.125 0.285 46.58 0.495 46.19C0.694999 45.79 0.994999 45.51 1.395 45.35C1.785 45.18 2.27 45.095 2.85 45.095H4.815C5.565 45.095 6.165 45.19 6.615 45.38C7.055 45.56 7.43 45.885 7.74 46.355C7.93 46.645 8.16 47.14 8.43 47.84C8.5 47.42 8.575 47.03 8.655 46.67C8.725 46.3 8.785 45.98 8.835 45.71C8.895 45.38 8.95 45.045 9 44.705C9.04 44.355 9.07 44.05 9.09 43.79C9.12 43.53 9.14 43.37 9.15 43.31L10.44 43.64C10.45 43.68 10.47 43.785 10.5 43.955C10.54 44.125 10.56 44.355 10.56 44.645C10.56 45.075 10.515 45.48 10.425 45.86C10.345 46.23 10.235 46.64 10.095 47.09C9.965 47.49 9.835 47.86 9.705 48.2C9.575 48.53 9.455 48.875 9.345 49.235C9.245 49.595 9.16 50.01 9.09 50.48C9.03 50.95 9 51.525 9 52.205ZM7.56 51.77V49.91C7.56 49.24 7.485 48.7 7.335 48.29C7.175 47.87 6.9 47.565 6.51 47.375C6.11 47.175 5.555 47.075 4.845 47.075H2.67C2.38 47.075 2.135 47.18 1.935 47.39C1.725 47.6 1.62 47.885 1.62 48.245V51.77C1.62 52.13 1.715 52.42 1.905 52.64C2.095 52.86 2.35 52.97 2.67 52.97H6.495C6.835 52.97 7.1 52.865 7.29 52.655C7.47 52.435 7.56 52.14 7.56 51.77ZM9.15 39.37C9.15 40.28 8.905 40.915 8.415 41.275C7.925 41.635 7.275 41.815 6.465 41.815H0.18V39.835H6.525C6.995 39.835 7.31 39.72 7.47 39.49C7.63 39.26 7.71 38.975 7.71 38.635V35.455C7.71 35.135 7.63 34.855 7.47 34.615C7.3 34.375 6.985 34.255 6.525 34.255H0.18V32.275H6.465C7.005 32.275 7.475 32.35 7.875 32.5C8.275 32.65 8.59 32.9 8.82 33.25C9.04 33.6 9.15 34.085 9.15 34.705V39.37ZM9 28.9807H0.18V27.0007H9V28.9807ZM9 20.8808C9 21.5908 8.9 22.1458 8.7 22.5458C8.5 22.9458 8.2 23.2258 7.8 23.3858C7.4 23.5458 6.905 23.6258 6.315 23.6258H2.97C2.01 23.6258 1.305 23.4108 0.854999 22.9808C0.394999 22.5508 0.164999 21.8508 0.164999 20.8808V16.3658C0.164999 15.6758 0.204999 15.1508 0.285 14.7908C0.355 14.4208 0.43 14.2358 0.509999 14.2358L1.755 14.5358C1.725 14.7058 1.695 15.2108 1.665 16.0508C1.625 16.8808 1.605 18.0908 1.605 19.6808V20.4458C1.605 21.2458 1.96 21.6458 2.67 21.6458H6.495C6.835 21.6458 7.1 21.5608 7.29 21.3908C7.47 21.2108 7.56 20.8958 7.56 20.4458V19.8308C7.56 18.1708 7.545 16.8858 7.515 15.9758C7.475 15.0558 7.435 14.4858 7.395 14.2658L8.385 13.6508C8.435 13.6508 8.51 13.7358 8.61 13.9058C8.71 14.0658 8.8 14.3658 8.88 14.8058C8.96 15.2458 9 15.8808 9 16.7108V20.8808ZM9.15 1.62254C9.15 2.11254 9.05 2.53754 8.85 2.89754C8.65 3.25754 8.38 3.61254 8.04 3.96254C7.64 4.34254 7.18 4.80254 6.66 5.34254C6.4 5.59254 6.185 5.84754 6.015 6.10754C5.845 6.36754 5.715 6.66254 5.625 6.99254C5.535 7.31254 5.49 7.71254 5.49 8.19254V8.89754H9V10.8775H1.38L0.18 11.0275V8.89754H4.02V8.05754C4.02 7.85754 3.995 7.69254 3.945 7.56254C3.895 7.43254 3.815 7.31254 3.705 7.20254C3.425 6.92254 3.075 6.60254 2.655 6.24254C2.235 5.88254 1.805 5.53254 1.365 5.19254C0.915 4.84254 0.52 4.54254 0.18 4.29254L0.18 1.86254L1.08 2.47754C1.37 2.75754 1.685 3.05754 2.025 3.37754C2.365 3.69754 2.7 4.01254 3.03 4.32254C3.35 4.63254 3.635 4.91254 3.885 5.16254C4.125 5.41254 4.3 5.59754 4.41 5.71754C4.5 5.44754 4.615 5.20254 4.755 4.98254C4.895 4.75254 5.1 4.47254 5.37 4.14254C5.57 3.89254 5.775 3.65254 5.985 3.42254C6.195 3.18254 6.445 2.90754 6.735 2.59754C7.055 2.24754 7.29 1.91754 7.44 1.60754C7.59 1.29754 7.685 1.03754 7.725 0.827538C7.765 0.607538 7.785 0.467538 7.785 0.407538L9 0.707539C9.03 0.737539 9.06 0.827538 9.09 0.977538C9.13 1.12754 9.15 1.34254 9.15 1.62254Z"
            fill="white"
          />
          <path
            d="M25.12 44L25.76 38.88V6.368H34.208V37.856H60.704L63.264 43.296C63.264 43.4667 62.688 43.6373 61.536 43.808C60.384 43.936 58.4 44 55.584 44H25.12ZM73.795 44V6.368H82.243V44H73.795ZM97.9225 44V11.488L97.2825 6.368H106.498L128.258 29.152L130.755 32.608H131.458V6.368H139.907V44H131.778L109.507 20.832L107.01 17.824H106.37V44H97.9225ZM195.085 44.64C192.995 44.64 191.181 44.2133 189.645 43.36C188.109 42.5067 186.595 41.3547 185.101 39.904C183.48 38.1973 181.517 36.2347 179.213 34.016C178.147 32.9067 177.059 31.9893 175.949 31.264C174.84 30.5387 173.581 29.984 172.173 29.6C170.808 29.216 169.101 29.024 167.053 29.024H164.045V44H155.597V11.488L154.957 6.368H164.045V22.752H167.629C168.483 22.752 169.187 22.6453 169.741 22.432C170.296 22.2187 170.808 21.8773 171.277 21.408C172.472 20.2133 173.837 18.72 175.373 16.928C176.909 15.136 178.403 13.3013 179.853 11.424C181.347 9.504 182.627 7.81867 183.693 6.368H194.061L191.437 10.208C190.243 11.4453 188.963 12.7893 187.597 14.24C186.232 15.6907 184.888 17.12 183.565 18.528C182.243 19.8933 181.048 21.1093 179.981 22.176C178.915 23.2 178.125 23.9467 177.613 24.416C178.765 24.8 179.811 25.2907 180.749 25.888C181.731 26.4853 182.925 27.36 184.333 28.512C185.4 29.3653 186.424 30.24 187.405 31.136C188.429 32.032 189.603 33.0987 190.925 34.336C192.419 35.7013 193.827 36.704 195.149 37.344C196.472 37.984 197.581 38.3893 198.477 38.56C199.416 38.7307 200.013 38.816 200.269 38.816L198.989 44C198.861 44.128 198.477 44.256 197.837 44.384C197.197 44.5547 196.28 44.64 195.085 44.64ZM217.988 44C215.087 44 212.953 43.872 211.588 43.616C210.223 43.36 209.54 43.0613 209.54 42.72L212.1 37.152C213.081 37.3227 215.513 37.4933 219.396 37.664C223.321 37.792 228.697 37.856 235.524 37.856H236.74C238.575 37.856 239.876 37.536 240.644 36.896C241.412 36.2133 241.796 35.0827 241.796 33.504V32.224C241.796 30.7307 241.476 29.664 240.836 29.024C240.239 28.384 238.873 28.064 236.74 28.064H221.892C217.583 28.064 214.447 27.2747 212.484 25.696C210.521 24.0747 209.54 21.4507 209.54 17.824V16.8C209.54 14.9227 209.881 13.1947 210.564 11.616C211.289 10.0373 212.505 8.77866 214.212 7.84C215.919 6.85867 218.265 6.368 221.252 6.368H238.66C241.561 6.368 243.908 6.51733 245.7 6.816C247.492 7.11467 248.388 7.43467 248.388 7.776L247.108 13.152C245.999 13.024 243.481 12.896 239.556 12.768C235.631 12.5973 230.361 12.512 223.748 12.512L223.044 12.448C221.081 12.448 219.759 12.8533 219.076 13.664C218.393 14.432 218.031 15.4133 217.988 16.608V17.696C217.988 19.104 218.372 20.1707 219.14 20.896C219.951 21.5787 221.273 21.92 223.108 21.92H237.316C240.047 21.92 242.372 22.1973 244.292 22.752C246.212 23.3067 247.684 24.3307 248.708 25.824C249.732 27.2747 250.244 29.4293 250.244 32.288V33.312C250.244 36.512 249.412 39.0933 247.748 41.056C246.127 43.0187 243.289 44 239.236 44H217.988Z"
            fill="white"
          />
        </svg>

        <svg
            width="75%"
            height="63%"
            viewBox="0 0 397 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "2rem" }}
          >
            <g filter="url(#filter0_d_319_2)">
              <path
                d="M36.8286 41.5422V45H146.406L151.069 41.5422H36.8286Z"
                fill="white"
              />
              <path
                d="M31 4V38.0843M337 41.5422H151.069M151.069 41.5422H36.8286V45H146.406L151.069 41.5422Z"
                stroke="white"
              />
            </g>
            <svg width="340" height="50" xmlns="http://www.w3.org/2000/svg">
              <a href="https://www.iitbhu.ac.in/dept/ece" target="_blank">
                <rect x="39" width="100%" height="80%" fill="black" />
                <text x="43" y="25" fill="white">
                  ECE Dept IIT(BHU) Varanasi
                </text>
              </a>
            </svg>

            <path
              d="M375.647 0L364 7.8806V15.7612L386.324 0H375.647Z"
              fill="#D9D9D9"
            />
            <path
              d="M397 0H395.059L364 24.3806V30.5373L397 5.91045V0Z"
              fill="#D9D9D9"
            />
            <path
              d="M397 14.2836L371.765 33H380.824L397 20.6866V14.2836Z"
              fill="#D9D9D9"
            />
            <path d="M388.912 33H397V26.8433L388.912 33Z" fill="#D9D9D9" />
            <line x1="10.5" y1="48" x2="10.5" y2="58" stroke="white" />
            <line x1="5" y1="52.5" x2="15" y2="52.5" stroke="white" />
            <g filter="url(#filter1_f_319_2)">
              <line x1="10.5" y1="48" x2="10.5" y2="58" stroke="white" />
              <line x1="5" y1="52.5" x2="15" y2="52.5" stroke="white" />
            </g>
            <line x1="351.5" y1="48" x2="351.5" y2="58" stroke="white" />
            <line x1="346" y1="52.5" x2="356" y2="52.5" stroke="white" />
            <g filter="url(#filter2_f_319_2)">
              <line x1="351.5" y1="48" x2="351.5" y2="58" stroke="white" />
              <line x1="346" y1="52.5" x2="356" y2="52.5" stroke="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_319_2"
                x="26.5"
                y="4"
                width="314.5"
                height="49.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_319_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_319_2"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_f_319_2"
                x="0.8"
                y="43.8"
                width="18.4"
                height="18.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.1"
                  result="effect1_foregroundBlur_319_2"
                />
              </filter>
              <filter
                id="filter2_f_319_2"
                x="341.8"
                y="43.8"
                width="18.4"
                height="18.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.1"
                  result="effect1_foregroundBlur_319_2"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="75%"
            height="63%"
            viewBox="0 0 397 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "2rem" }}
          >
            <g filter="url(#filter0_d_319_2)">
              <path
                d="M36.8286 41.5422V45H146.406L151.069 41.5422H36.8286Z"
                fill="white"
              />
              <path
                d="M31 4V38.0843M337 41.5422H151.069M151.069 41.5422H36.8286V45H146.406L151.069 41.5422Z"
                stroke="white"
              />
            </g>
            <svg width="340" height="50" xmlns="http://www.w3.org/2000/svg">
              <a href="https://maps.app.goo.gl/YDSX6VC8rhnwatBi7" target="_blank">
                <rect x="39" width="100%" height="80%" fill="black" />
                <text x="43" y="25" fill="white">
                  location
                </text>
              </a>
            </svg>

            <path
              d="M375.647 0L364 7.8806V15.7612L386.324 0H375.647Z"
              fill="#D9D9D9"
            />
            <path
              d="M397 0H395.059L364 24.3806V30.5373L397 5.91045V0Z"
              fill="#D9D9D9"
            />
            <path
              d="M397 14.2836L371.765 33H380.824L397 20.6866V14.2836Z"
              fill="#D9D9D9"
            />
            <path d="M388.912 33H397V26.8433L388.912 33Z" fill="#D9D9D9" />
            <line x1="10.5" y1="48" x2="10.5" y2="58" stroke="white" />
            <line x1="5" y1="52.5" x2="15" y2="52.5" stroke="white" />
            <g filter="url(#filter1_f_319_2)">
              <line x1="10.5" y1="48" x2="10.5" y2="58" stroke="white" />
              <line x1="5" y1="52.5" x2="15" y2="52.5" stroke="white" />
            </g>
            <line x1="351.5" y1="48" x2="351.5" y2="58" stroke="white" />
            <line x1="346" y1="52.5" x2="356" y2="52.5" stroke="white" />
            <g filter="url(#filter2_f_319_2)">
              <line x1="351.5" y1="48" x2="351.5" y2="58" stroke="white" />
              <line x1="346" y1="52.5" x2="356" y2="52.5" stroke="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_319_2"
                x="26.5"
                y="4"
                width="314.5"
                height="49.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_319_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_319_2"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_f_319_2"
                x="0.8"
                y="43.8"
                width="18.4"
                height="18.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.1"
                  result="effect1_foregroundBlur_319_2"
                />
              </filter>
              <filter
                id="filter2_f_319_2"
                x="341.8"
                y="43.8"
                width="18.4"
                height="18.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.1"
                  result="effect1_foregroundBlur_319_2"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="75%"
            height="63%"
            viewBox="0 0 397 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "2rem" }}
          >
            <g filter="url(#filter0_d_319_2)">
              <path
                d="M36.8286 41.5422V45H146.406L151.069 41.5422H36.8286Z"
                fill="white"
              />
              <path
                d="M31 4V38.0843M337 41.5422H151.069M151.069 41.5422H36.8286V45H146.406L151.069 41.5422Z"
                stroke="white"
              />
            </g>
            <svg width="340" height="50" xmlns="http://www.w3.org/2000/svg">
              <a href="https://en.wikipedia.org/wiki/IIT_(BHU)_Varanasigit " target="_blank">
                <rect x="39" width="100%" height="80%" fill="black" />
                <text x="43" y="25" fill="white">
                  wikipedia IIT(BHU) Varanasi
                </text>
              </a>
            </svg>

            <path
              d="M375.647 0L364 7.8806V15.7612L386.324 0H375.647Z"
              fill="#D9D9D9"
            />
            <path
              d="M397 0H395.059L364 24.3806V30.5373L397 5.91045V0Z"
              fill="#D9D9D9"
            />
            <path
              d="M397 14.2836L371.765 33H380.824L397 20.6866V14.2836Z"
              fill="#D9D9D9"
            />
            <path d="M388.912 33H397V26.8433L388.912 33Z" fill="#D9D9D9" />
            <line x1="10.5" y1="48" x2="10.5" y2="58" stroke="white" />
            <line x1="5" y1="52.5" x2="15" y2="52.5" stroke="white" />
            <g filter="url(#filter1_f_319_2)">
              <line x1="10.5" y1="48" x2="10.5" y2="58" stroke="white" />
              <line x1="5" y1="52.5" x2="15" y2="52.5" stroke="white" />
            </g>
            <line x1="351.5" y1="48" x2="351.5" y2="58" stroke="white" />
            <line x1="346" y1="52.5" x2="356" y2="52.5" stroke="white" />
            <g filter="url(#filter2_f_319_2)">
              <line x1="351.5" y1="48" x2="351.5" y2="58" stroke="white" />
              <line x1="346" y1="52.5" x2="356" y2="52.5" stroke="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_319_2"
                x="26.5"
                y="4"
                width="314.5"
                height="49.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_319_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_319_2"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_f_319_2"
                x="0.8"
                y="43.8"
                width="18.4"
                height="18.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.1"
                  result="effect1_foregroundBlur_319_2"
                />
              </filter>
              <filter
                id="filter2_f_319_2"
                x="341.8"
                y="43.8"
                width="18.4"
                height="18.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.1"
                  result="effect1_foregroundBlur_319_2"
                />
              </filter>
            </defs>
          </svg>

        <svg
          width="75%"
          height="63%"
          viewBox="0 0 397 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: "2rem" }}
        >
          <g filter="url(#filter0_d_319_2)">
            <path
              d="M36.8286 41.5422V45H146.406L151.069 41.5422H36.8286Z"
              fill="white"
            />
            <path
              d="M31 4V38.0843M337 41.5422H151.069M151.069 41.5422H36.8286V45H146.406L151.069 41.5422Z"
              stroke="white"
            />
          </g>
          <svg width="340" height="50" xmlns="http://www.w3.org/2000/svg">
            <a href="https://unstop.com/c/ees-iit-bhu-732303" target="_blank">
              <rect x="39" width="100%" height="80%" fill="black" />
              <text x="43" y="25" fill="white">
                unstop ees-iit-bhu
              </text>
            </a>
          </svg>

          <path
            d="M375.647 0L364 7.8806V15.7612L386.324 0H375.647Z"
            fill="#D9D9D9"
          />
          <path
            d="M397 0H395.059L364 24.3806V30.5373L397 5.91045V0Z"
            fill="#D9D9D9"
          />
          <path
            d="M397 14.2836L371.765 33H380.824L397 20.6866V14.2836Z"
            fill="#D9D9D9"
          />
          <path d="M388.912 33H397V26.8433L388.912 33Z" fill="#D9D9D9" />

          <defs>
            <filter
              id="filter0_d_319_2"
              x="26.5"
              y="4"
              width="314.5"
              height="49.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_319_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_319_2"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_f_319_2"
              x="0.8"
              y="43.8"
              width="18.4"
              height="18.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2.1"
                result="effect1_foregroundBlur_319_2"
              />
            </filter>
            <filter
              id="filter2_f_319_2"
              x="341.8"
              y="43.8"
              width="18.4"
              height="18.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2.1"
                result="effect1_foregroundBlur_319_2"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Footerlinks;

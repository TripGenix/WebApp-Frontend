import React from "react";

function Gallery() {
  return (
    <section className="py-24 ">
      {/* 🔹 Gallery Heading Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
          Travel Moments
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Recent <span className="text-[#1DA9CC]">Gallery</span>
        </h2>

        {/* Accent divider */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="w-12 h-[2px] bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-[#1DA9CC]"></div>
          <div className="w-12 h-[2px] bg-gray-300"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          Explore breathtaking travel moments captured across Sri Lanka. From
          stunning beaches and lush mountains to historic landmarks, our gallery
          showcases the beauty and experiences waiting for you.
        </p>
      </div>
      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-6 auto-rows-[200px]">
        {/* Left Tall */}
        <div className="col-span-1 row-span-2">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/650948653_1326223206216677_1910311001668913092_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEVJPLlyTcRHU-ZoNo_VpdrnTRm2iDr8U2dNGbaIOvxTcT8RaCC4IaaPzWFspbqeG3rhj9fyMjXOLc4bsdlRhsN&_nc_ohc=TgpSHNPsDNgQ7kNvwGgRrXe&_nc_oc=Adm8xPHOfuquz4fHdP8zMxCRYP9yzDYfGGeOq-bFG3a6vKn-UEt51W7NIhDsTFgThlk&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=x1T1jUdEL6TXFnqrCrkqXA&_nc_ss=8&oh=00_Afw1XBHr-khY6nSNoYJ5E0X4pYj_SnnvkQoG45oYWsnF1Q&oe=69BE1ED1"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/627190011_1299326005573064_1975671462164775106_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFwJmvfHiwnQzgqZDyAvpa3oaYFMda14uShpgUx1rXi5D0xgsIJncIpEn7zqkysDHs0h19XLdCyenazIbPPXStS&_nc_ohc=wu64VEHFSHYQ7kNvwFdS1L5&_nc_oc=AdnSm5i1dd0pfOpDNzcEsFu8CIzCZI3unV7oq9B8vTZHalqfH7q3gYPLV_bKzZA0Et4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=v6cX57rxMWNMZgt2XorYHg&_nc_ss=8&oh=00_Afz6WTOl47dpDDop36a-O_Hkw5FHsRv677henW5RmArBNQ&oe=69BE0F58"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Center Tall */}
        <div className="col-span-1 row-span-2">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/632913811_1305369208302077_5897694500260532301_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEwGPYdPkkVCaW-47Ubs0hzjpw3Evj5FliOnDcS-PkWWJWdiXFEX0BQ7sU56yEKAAsx61HtSdrEVJJr9xBTPPNS&_nc_ohc=PQvYOdOIS3cQ7kNvwGdSxTA&_nc_oc=AdnPjwjiNqTDQc0jQfWjaNcXbz90bi3FSt4VvLUS6FGUW05XG4nDK5EvSqiRSpE28bU&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=Xzjkbj6v2vANQlX56Hh4pQ&_nc_ss=8&oh=00_AfxeGg32ubRX1bhoKf4XoECd2s0je8xsWOwobISnetVD0Q&oe=69BE440B"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/651226287_1462910055370806_1608636510992118239_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHwNdt5RVax_6LZ4hOyCLCqzPAB7n2cz2nM8AHufZzPabX-ndCExcEiRg47Git8K6Rf89iAB-x_MO3BB1hPLTcG&_nc_ohc=sIpu5Q52S5UQ7kNvwEjkE29&_nc_oc=Adlbg1sMMGSPsxrpDxcv7SpCoCs_nyy4S7gCoYU_6cxiwsojqZDp19AcX5Bajf3Jvb4&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=Xzjkbj6v2vANQlX56Hh4pQ&_nc_ss=8&oh=00_AfyBcPMVhA4iuPobrUlun_UFY-hE9fL4OQa_ACHbiUVoOQ&oe=69BE1DE0"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Right Tall */}
        <div className="col-span-1 row-span-2">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/648600488_2425410697912463_1104968157520200361_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH8tmuONgaZTbijLf4WnvKAPQ4Ocaa5JOs9Dg5xprkk621ec3KOP05YiprJWsfOjQEkSBp-uAltifk1LSqydmWp&_nc_ohc=8DI4YEXtNOAQ7kNvwFB6pCK&_nc_oc=AdmR37r6w2JUW0jUj0fjVX4vB1kymPe7XrnDbPpnn3zYvN6hKTXlVppenNFaBCSv3gg&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=7TKF8TJHYMhN7WhGO8sJGg&_nc_ss=8&oh=00_Afxs0AxA8Y9L6BIWtA9Qi6VD2dGH6BU6uAk-CX1Co7aqWg&oe=69BE18DB"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Bottom small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/625851374_2396792504107616_6315177283318356660_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeED-ZXi4pOlvEYDXEw5nwuS2LEehpAdi1XYsR6GkB2LVewRLfSxlmdsuIGbPoRQqCo4VOvv5CDYBAXrGwmFpjY9&_nc_ohc=BTlQcFT4CboQ7kNvwEYv0UC&_nc_oc=Adkb21SHvBTfL9ow5ON2b3nR31MXps1vJs8aAbkvQmN8j0DudzbKAJDPTTqKJaZO_uE&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=dJDmc2Po5fYaXVHsdc3kgA&_nc_ss=8&oh=00_AfzU9Mz0q1uh6U3jhB__bOGjLP9oyPlwR_ZH6izsd9IHiQ&oe=69BE1559"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>

        {/* Bottom small */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/647156940_2425411227912410_212034803173232498_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeECySRE5QTmxHSQLMA-2fbMwx1P8MS228rDHU_wxLbbygL2qbqRrBxOh0FmkgvWLdP_2edesd8_v379HJbaQy55&_nc_ohc=rfCEQ-hVFIwQ7kNvwGDpq3R&_nc_oc=AdlT1Y4ff1d7r9xKjmV3ZW2Uq_5a3MbfD8LQ56nCN-fdoCfEL-ROc9IJq_h_IAPzkSs&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=VwT6InnIF9cNCOFIFU3Prw&_nc_ss=8&oh=00_AfyrMjUiHuomnQ2l5tu-QVu2ijGzAEEDqQqqWxATAwLqQw&oe=69BE0FF6"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;

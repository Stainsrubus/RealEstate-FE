import React from 'react';
import { FaAward, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
const About_us = () => {
    const navigate=useNavigate()
    const awards = [
        {
          title: "Best Real Estate Agency Award - 2023",
          description: "Awarded for outstanding performance and customer satisfaction.",
        },
        {
          title: "Top Luxury Property Developer - 2022",
          description: "Recognized for excellence in developing high-end properties.",
        },
        {
          title: "Excellence in Customer Service - 2021",
          description: "Honored for providing exceptional customer service and support.",
        },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <div className="container mx-auto py-28 px-4">
        <div className='bg-yellow-400 shadow  hover:scale-110 duration-300 transition cursor-pointer rounded-full h-10 w-10 flex justify-center items-center'>
<p className='text-3xl text-white font-bold' onClick={()=>navigate('/')}>← </p>
        </div>
        <div className='w-full flex py-10 flex-col justify-center items-center'>
        <h2 className="text-4xl font-bold text-center ">About Us</h2>
<hr className='h-0.5 w-1/5  bg-black mt-2' />
        </div>
     
      <div className="mb-12">
        <p className="text-lg leading-relaxed text-center">
          Welcome to <span className="font-bold">RealEstate</span>, your trusted partner in finding, building, and investing in luxurious properties. With a commitment to excellence, we have been serving our clients with dedication and integrity, ensuring their real estate dreams come true. Our team of experienced professionals is here to guide you every step of the way, offering personalized solutions tailored to your unique needs.
        </p>
      </div>

      <div className="flex justify-around items-center mb-12">
        <div className="text-center hover:scale-125 transition shadow-md shadow-yellow-400 rounded-2xl px-5 py-5 cursor-pointer duration-500">
          <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
          <p className="text-lg font-medium">Total Clients</p>
        </div>
        <div className="text-center hover:scale-125 transition shadow-md shadow-yellow-400 rounded-2xl px-5 py-5 cursor-pointer duration-500">
          <h3 className="text-3xl font-bold text-yellow-500">200+</h3>
          <p className="text-lg font-medium">Total Projects</p>
        </div>
        <div className="text-center hover:scale-125 transition shadow-md shadow-yellow-400 rounded-2xl px-5 py-5 cursor-pointer duration-500">
          <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
          <p className="text-lg font-medium">Luxury Properties</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-lg leading-relaxed">
            <span className='text-yellow-500 text-2xl'>"</span>
          At RealEstate, our mission is to provide top-notch real estate services that cater to the diverse needs of our clients. We aim to create lasting relationships built on trust, transparency, and exceptional service. Whether you're looking to find your dream home, build a custom property, or invest in luxury real estate, we are here to make it happen.
          <span className='text-yellow-500 text-2xl'>"</span></p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-lg leading-relaxed"><span className='text-yellow-500 text-2xl'>"</span>
          Our vision is to be the leading real estate company renowned for innovation, customer satisfaction, and quality. We strive to set new benchmarks in the industry by continually evolving and embracing new technologies and market trends. We envision a future where every client finds their perfect property effortlessly with us.
          <span className='text-yellow-500 text-2xl'>"</span> </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-center mb-10">Meet Our Team</h3>
        <div className="grid  sm:grid-cols-1 grid-cols-3 gap-6">
      
          <div className="border hover:scale-90 hover:shadow-xl hover:shadow-yellow-400 transition duration-500 shadow-yellow-400 rounded-lg shadow-md p-4 text-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABRFBMVEX///98MQj3khn/0sDveBbR09SMPwrx8vL8xK5tLgPm5+iZUiLucAD62MLyrZfzhRflkHZ1JQD+7dv3jwD74c97LwDh4uN1HQDy7+3/18XQl4DQ1dn/0b6DNwlyFwB4KwCLPgryspzPwbPS0c1kGACJOgD9wqqVTBuycU/00sZ1MAaGMwDbpozjsZmUShH2uKPq28zzmTPl3tX1xrHLh3FzKAbc0sbrp2HSxL9pJQBhEQBfAACnZUGbaFLvvqmRRQDNtq2yjX6LQx+WUzVrAAC8ZRHJbxPbfBXjy7P1lSPdv6HuolGmemjktITxnUPpq23wiynrjUzsfiyLWDuigXN7QiS2m5C9pZuNXkh3PByGWki3eVqUUTOdVy+kZ0zXnIOlUw7ivJbXaxTgbgX7ypv2tYb0nl/82bbxhC/3vZnzgAD1pm7t0xnOAAANpElEQVR4nO2c61vbRhbGkW+44JBVHeEryGCDicEYbHCBgLmVhFxKQmlCdkmgSTbdS///7zszus1VlgyrGffR+yWPkT2dn887Z84ZyZ2YiBUrVqxYsWLFihUrVqxYsWLFihUrVqxYkau7Y6kreyL/D/WPDlq7DUe7u1fXO7Kn9IAqHv22t9fY/QEXoH12cF2UPbUHUffNLkWHUR6MfySPrgR4DuT7I9lTvJd2thsWSaul2Wq1WiRkY/tI9jRHVvfjHqLTGJGUe1djmlw/AH+2OHgOJebVvQ+yJzuCilcNXvQEjI33YxfGncauxzdni4X0wvjsSPaUw+n6Wctmq9UymGo1CtOL47OxcupxA+ERcB4lGUyXsfFG9rSD68O8EM8WwegifpQ98aACgP58NGNrzBCvQQSH8VGMrbEy6k4BTHloCGlGB/FY9vSHq1swYJIJRJipMYhjsGmcmGjCwQjxMDqIfdkEQ/RGt+YbzKZEGG3Ev8tG8NdRwSljghJ6iHa62VU62xQ1w5mvFcRmMzzi3qJsDB85HnWCOD09PUIUf5CNIVZ3HtvGa4EJPUTlt4wrEyOcC+pSFvGZqidUO3gIQ6RTDNHy6e5vslEEOjAJwuDpFEO0fapmP9wtaKRQEGvN6UBOncMRFQ0ilkhxRJBtwiBaPm2ouBKLpkETOjtGIETCp41r2TgcHdEmBVpaCoFIBFHF2u3KZADN0/2lTC0wIh7EPfVyTXGeAdT0QbUZIoo1LIi76p1LcUyql0ulQcZBDFDdzGFBVK90O2BMqt+WksnSwF2Lw8NYwwh3lbOpQWdSc66aTIZEnPNs2lDtvhuz3RvGoJS0EJFRm0EYsSAq1ybSy9DQ2xYgRJz2EIesxjmP8B+ykSgd6xTgmgMIEKv7qxnHqdO+7UbNs2lLsbLmoykEhIw3q1gY/bzq2XRvVjYTIez4Aq1BEhAgtpsojA6jENKzaUOtQzci0ZhGmwKETrXC6DECuxKYzUyNsKliez6+DPVPPQYQhfEzzUipWXNsCglbn2RD4cL6CkO/4eAhxNJd02IUQDZdm7bg3f/5I9lYmLyCxtBYh2JWvbPjCE9wGEx8Ibbgap6UzeXq2FuFxooYEDIm1/ZXHUiL0xa5X1jr+UA2mKMPXltRW/InhF7tlT8vrS55lIjL/ndpaQn0zc6JRkGRusYrZ0BPP5QQQQ7KK00QShwTvFhdbe7frSxht2vmlWj1iwUjJCGCrA7WtlY+H67aOpxe2bpbWM5Wb3BCbV6FDgNrm4ITWpTwrdXeYNDroZfJLBBJaF7JxiNP8ucyS6vBCRlVESHIQ9i9YQWCeI1VM8bq9P7WPQnL+9OrWAVYkL8S37gmNfWbQbXUY8zoS4VfRYQ9sEJvCt6g8tOp21Tot6hYG1AIgzX6L8KrFiHE7t06VaAp/wEU5xBRv7HCQfJUVw7XD/eZuNrq7YOrK1WGEDBu6cqkGjuG6NgJTo0gLK3A0qy5LyDcR1fd3GS71Prkja5KDK11aFjHTsnswgJhwnVUcB7yjdo+RFfXnauIcGEha410YiiyDq2KRi/Dr743MzNDELYtwnW6IbbCtGZfbROEYAzo1OodCmLhSDYgKGlgCDU0qRma0D+GAzuGzjJ1CWeAIarLKIgFBU5rYPNrolXYYQhLK+toHfJ3jBJah+vkOkSEHfjiFvhfV+GWflE3NB3u8yiEJCHIpevr6162pISu3pC5FBGCIFazZR200wqEEFU1aBnyCEFubQ98WmLiKkUIFqICFQ1U8cQQE4ZRjyY0TpQIIVyJyKXJ+xJmcUJQoepKrEKonYIo04xK2IGOvTULqtyd6eqGgTK+/fWPKLQMs24IwW6hy2+dLHVNe8evOtv1/QgX4CqEqdRUiFAzLbBsZ2HkGGYtl3ayFiwoI9QhLMCHEux5sg1iKEJUeEPAU/C1FVQhRKWpflu1drZRCXtZu3lCbkUNogJFqSWrvdA/tdHRUm9Em2YxdU51RRoLpKJ9C98s3K5VRw5i1eNr3+pW02kYauz43n0nU9dPPp0Iz6JKnkQh3Dq9PTV195RGjS2/T9zBNwzTEABa1coMv/KxVmH2xDSJm8kFBW6Tsg/s6dx+N7nwN1wUou3RNfrxRsOU7tPiCfOkkHHCJewQhB2eR9EWQcqUXnwfMA+VioJYJQi5HmVCCAeTfIvtmvO8Hggid8PoCEPo5NFP7OON0u8/FZinZtH3Xub6dMYFnOECljkhBN9XQSYg76lZhMjt60tOFDslHmCHeTTOktTK5g3PVhrMD7wYJuF56ox9HsoActKMPZjMyuaE/617Z/ycQFKvHcDeDdej0KYnEgk1EaFoKTLqZX0XISLU5AEWBSsHeesuAJ9XjN4JLKpJrk7FMQTVyN3QJsMNYHaN/SmDEjGc4G5gzsT0u6xvm4F1E3e6GFAzZT7+9UG4eKD0G5BAhOfdWDsoTDLWMDIf4eP9BAGf22kHzL/KQFZxPLufF2teamXK/taJkKmVLYhq1eYE//YIvGxZ87E6/JrkNvpFQVHjyNBP21k/tU/9liCU7Ptrx/5BBGGcv10T893O+wdQgTaf84s1hlE/LXc4eJ3yqT6MT4WjGva3Mrw4bi1QjMudha2h8dOUeALzeshKRNK3rNOZjiXrxGZrmMGhFLiDuBOCkFQwQvm3n/p/ecJgMSx3GMCOuJtQi1DU5lOEKLl0FuAKXADLcTnr1y/hhEeyAYdVNRghrUCEkisaqPdD98N7ERrSf1cSaBneg1D+QvTrEB+EUPbjl8eBQngfQq0gtTA98u8PH4RQ6u+f+gEB70eozUtbil2fo7aHJDQMWU8s8O47aduWCrbmkX7mEv5sXXTeqluf5H1BkhoMxqNgerXfz56/gFq0dL4B1O3OPuUQPp3tduHlc/u96HPPz37PaBr9P6+dl3MrmKxmtrXM2YuErfyXShqpOzk5OQX0dJkBXH4KL4DrXeutlS95+9Opr2cZjYilpMoG7+63ax4eALxI25oNTphOX7iIqdS3swzGaBgyALGTxO3M8wSu/KIdwnQ/AGHffm9l0SGEiKnU10OPUcqJovuTru0ayZfIv3UAQxGmK29JxNRXN45SfuDlEp4lKL1Mu6oHIKx7b3/pDPE4ZTPOSSS0XLqdeUcD5l9VvDkXEaCYcGqy6L258ipPI6Ysq8o594Yl6TYTwET+NQYIk+mQGHaxd1deUz4FOoOIcu7lg91i+zkDmEj00yxhl0PYZQnTfXcUN4ipr9J2C7Djv2D58r/gIYTbBTIjA5jNWiadnMXfXvmFDWLqm6wdf+KAA5jYTBPq24RJOojLSZuwT35gkw1i6pusY2Fv0WAhPK9wCRmbWiZlCCvnnCCmLuUA/sQD/IkEdLcLOtc4mZTYLBCiOywWxJwUxH9yABMJar7petEmJBFtQEBYZD7hjoUFMfc9esAnPEC34iYIXUSHcdkDZAm9CvwxjvgocsKXHMDERZoWIrQRQQ+1DAX6JheQJQQVOCeIqVTUe/5bbgjpVZiGRY1LCBPOxtONrvsKETKf8FYiDpj7I1pArkdBRXpeoRk3JglEXOjKBgN4zlSnMny6yQWEJdtihdku+Iz236nNotLHUjRBmPp3lID/4ocQIuZfk3GsT/IRnT/XCb7z13l8aIIw958ICS9EgDZj2mO0Ug3N6P4NSzQMH0UYZRAfCUNoM154lU3fI+Sp6PW/5xd5elySMMKVyKtmKMY6J4ZcQu+NDB+9EKNLp8VhgADRSyBDCL2UxBn1MRXEHyMiFOcZFxBrobq+hF53iDVOQsKocg2vpyAB8eJtw5cQ2w69ck1EGFmuGQKYTyzi28WsLyHe/1YWE9TQNGEuGkBBPeMCbvaJPb/vS0hs+JX+Jjk2QxhNNuW3Ta4u6vyiJgBhulInd1qGMJqF6L9X0E1+KEK8xecRRtTsi2pSm5BpEf22C7qzoLINQxhNquF2hp5e0g2f33bRpd5bJwdnCFNRABb9AdkmMQRh5Sf/TBPNnv/j0N3wFYnot13MkoCvhuwWqdwTFQjp46jgMazTA6lKSPnUL5mS2yGTpVUlpHwalJDxqMKEVD4VbxfEZlFnk7S6hIRP6+KF2MW+CdajKhMSPg1GyPGo0oSET6eEhFO+HlWbEPepTwy9EHKPmFUmxH0qTqbeMRTPo4oTYj4NQMj1qOqEmE+FhH55VH1Cz6fCA0XnKFHgUeUJXZ8OJayLWk7VCd2nv4SEfnl0HAhdn4q2i66/R8eA0HnCTXRkah+Wig8N1Ce0feobQ7FHx4HQPnkTdfkw0VCna2NHmNis+2z5fb88Oi6EyKc+hH4eHQ9C5NO6gLDu79ExIUwkhKkGJhr/j9KAahJCn/K3i40hHh0XQuhTQQyHeJQFVJQwsSnYLmbT/rdA2DN9VQnzb/nJtO/vUQ6gqoSJ/BcuIXtXewhfRIRP/vs4tN5NzbKaeufzCS5fVIQ5wX/dRzn2mUWw2Y8yUBSEE+HnlcqxD5GCem0EwkjuH078EX5muUU2iJXFEcaJ5qmoEWyaa3MI2yOME4lJJyb+DD21ByLM/RkN4MTEZdi55b5zCL+HHiXC3ySEjuIlh/AyLGBkEYR6dJkLpV85hL+GG+Iy6t8jFB+FUpFVyAEi5osVK1asWLFixYoVK1asWLFixYoVK1asv5z+B9X5c2TORAYTAAAAAElFTkSuQmCC" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold">Victoria</h4>
            <p className="text-lg font-medium text-gray-600">CEO</p>
            <p className="text-sm leading-relaxed mt-2">
              John has over 20 years of experience in the real estate industry, leading our company with a vision for innovation and excellence.
            </p>
          </div>
          <div className="border  hover:scale-90 hover:shadow-xl hover:shadow-yellow-400 transition duration-500 shadow-yellow-400 shadow-yellow-400rounded-lg shadow-md p-4 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyZWYPEncWdEfHARCCc_DcvFFf1f1qcAgxQ&s" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold">Jane Smith</h4>
            <p className="text-lg font-medium text-gray-600">Head of Sales</p>
            <p className="text-sm leading-relaxed mt-2">
              Jane is dedicated to helping clients find their dream homes, with a keen eye for detail and a passion for customer service.
            </p>
          </div>
          <div className="border  hover:scale-90 hover:shadow-xl hover:shadow-yellow-400 transition duration-500 shadow-yellow-400 rounded-lg shadow-md p-4 text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54_opfabOr5TGWdn4op-WXk00JYKGMmaWxw&s" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold">Mark Johnson</h4>
            <p className="text-lg font-medium text-gray-600">Chief Architect</p>
            <p className="text-sm leading-relaxed mt-2">
              Mark brings creative designs to life, ensuring every project is unique and meets the highest standards of luxury and comfort.
            </p>
          </div>
          
          </div>
      </div>

   
      <div className="my-12">
        <h3 className="text-2xl font-bold mb-4">Client Testimonials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg shadow-lg p-4">
            <p className="italic mb-4">"RealEstate helped us find our dream home effortlessly. The team was professional and attentive to our needs."</p>
            <p className="font-bold text-right">- Client Name</p>
          </div>
          <div className="border rounded-lg shadow-lg p-4">
            <p className="italic mb-4">"Building with RealEstate was a seamless experience. Their expertise and attention to detail were remarkable."</p>
            <p className="font-bold text-right">- Client Name</p>
          </div>
          <div className="border rounded-lg shadow-lg p-4">
            <p className="italic mb-4">"Investing in luxury properties through RealEstate has been highly rewarding. Their market insights are invaluable."</p>
            <p className="font-bold text-right">- Client Name</p>
          </div>
        </div>
      </div>


      <div className="my-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Our History</h3>
        <p className="text-lg leading-relaxed">
          Founded in 2009, RealEstate has grown from a small agency into a leading real estate company. Over the years, we have expanded our services and portfolio, continuously striving to exceed our clients' expectations.
        </p>
      </div>

       <div className="my-12">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><FaAward className="mr-2 text-yellow-500" /> Awards & Recognitions</h3>
        <Slider {...settings}>
          {awards.map((award, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-6 text-center">
              <FaAward className="text-3xl text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold">{award.title}</h4>
              <p className="text-sm leading-relaxed mt-2">{award.description}</p>
            </div>
          ))}
        </Slider>
      </div>

 
      <div className="my-12">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><FaEnvelope className="mr-2 text-yellow-500" /> Contact Us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg shadow-lg p-4 text-center">
            <FaEnvelope className="text-3xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg leading-relaxed">
              <strong>Email:</strong> contact@realestate.com
            </p>
          </div>
          <div className="border rounded-lg shadow-lg p-4 text-center">
            <FaPhone className="text-3xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg leading-relaxed">
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
          <div className="border rounded-lg shadow-lg p-4 text-center">
            <FaMapMarkerAlt className="text-3xl text-yellow-500 mx-auto mb-4" />
            <p className="text-lg leading-relaxed">
              <strong>Address:</strong> 123 Luxury Lane, RealEstate City, RE 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;

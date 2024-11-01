import Link from "next/link";

 

export default function Featuring() {
  return (


    <div className="container max-w-6xl mx-auto p-8">

      <div className="headerSection flex justify-between items-center mb-6">
        <h2 className="title text-2xl font-semibold">Featured New Cars</h2>
        <a href="#" className="viewAllLink text-blue-600 hover:underline">View All New Cars</a>
      </div>


      <div className="tabsSection flex space-x-8 border-b mb-6">
        <button className="tabButton activeTab text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">Popular</button>
        <button className="tabButton text-gray-600 font-semibold hover:text-blue-600 pb-2">Upcoming</button>
        <button className="tabButton text-gray-600 font-semibold hover:text-blue-600 pb-2">Newly Launched</button>
      </div>


      <div className="carListingGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


        <div className="carCard border rounded-lg p-4 text-center shadow-md">

          <img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="Toyota Corolla" className="carImage mx-auto mb-4 w-full h-auto" />

<Link href="/toyota-corolla">Toyota corolla</Link>

          <h3 className="carName text-lg font-semibold text-gray-800">Toyota Corolla</h3>




          <p className="carPrice text-green-600 font-medium">PKR 59.7 - 75.5 lacs</p>
          <div className="carReviews flex justify-center items-center space-x-1 mt-2">
            <span className="carRating text-orange-500">⭐⭐⭐⭐</span>
            <span className="reviewCount text-gray-600">621 Reviews</span>
          </div>
        </div>


        <div className="carCard border rounded-lg p-4 text-center shadow-md">
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2SEFgSwovlw2IenrbnVlVGVkC2-5X5TjPQ&s" alt="Suzuki Alto" className="carImage mx-auto mb-4 w-full h-auto" />
         
          <Link href="/Suzuki-Alto">Suzuki Alto</Link>
         
          <h3 className="carName text-lg font-semibold text-gray-800">Suzuki Alto</h3>
          <p className="carPrice text-green-600 font-medium">PKR 23.3 - 30.5 lacs</p>
          <div className="carReviews flex justify-center items-center space-x-1 mt-2">
            <span className="carRating text-orange-500">⭐⭐⭐⭐</span>
            <span className="reviewCount text-gray-600">199 Reviews</span>
          </div>
        </div>


        <div className="carCard border rounded-lg p-4 text-center shadow-md">
          <img src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945" alt="Honda City" className="carImage mx-auto mb-4 w-full h-auto" />
          <Link href="/Honda-City">Honda city</Link>
         
          
          <h3 className="carName text-lg font-semibold text-gray-800">Honda City</h3>
          <p className="carPrice text-green-600 font-medium">PKR 46.5 - 58.5 lacs</p>
          <div className="carReviews flex justify-center items-center space-x-1 mt-2">
            <span className="carRating text-orange-500">⭐⭐⭐⭐</span>
            <span className="reviewCount text-gray-600">458 Reviews</span>
          </div>
        </div>


        <div className="carCard border rounded-lg p-4 text-center shadow-md">
          
          
          <img src="https://di-honda-enrollment.s3.amazonaws.com/2021/model-pages/civic_hatchback/trims/Hatchback+Sport+Touring.jpg" alt="Honda Civic" className="carImage mx-auto mb-4 w-full h-auto" />
          
          <Link href="/Honda-Civic">Honda civic</Link>
         
          
          <h3 className="carName text-lg font-semibold text-gray-800">Honda Civic</h3>
          <p className="carPrice text-green-600 font-medium">PKR 86.6 - 99.0 lacs</p>
          <div className="carReviews flex justify-center items-center space-x-1 mt-2">
            <span className="carRating text-orange-500">⭐⭐⭐⭐</span>
            <span className="reviewCount text-gray-600">357 Reviews</span>
          </div>
        </div>
      </div>
    </div>



  )
}


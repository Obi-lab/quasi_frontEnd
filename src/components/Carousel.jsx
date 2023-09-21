import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PortfolioDownload from '../components/PortfolioDownload'

export function CarouselWithContent() {
  return (
    <div className="mt-2 w-[94%] mx-auto pt-5 mt-3">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[68%] md:h-96 h-full w-full">
          <Carousel className="rounded-xl">
            {/* Carousel Images */}
            <div className="relative h-full w-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1683141381544-390e29f842fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Higo quantity survey building technology house remodel kitchen"
                className="h-full w-full object-cover"
                loading="lazy" // seo
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/[0.4]">
                <p className="text-white font-bold">Amazing Designs</p>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
                alt="Higo quantity survey building technology house remodel kitchen"
                className="h-full w-full object-cover"
                loading="lazy" // seo
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/[0.4]">
                <p className="text-white font-bold">House Remodeling</p>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
                loading="lazy" // seo
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/[0.4]">
                <p className="text-white font-bold">Construction Costs Estimation</p>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
                loading="lazy" // seo
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/[0.4]">
                <p className="text-white font-bold">Repair and Renovations</p>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="md:w-[32%] portfolio">
          {/* Portfolio Content */}
          <div className="">
            <p className="md:text-2xl mb-4">
              Higo
            </p>
            <p className="my-4">
              We are a leading quantity survey firm with a proven track record in delivering accurate 
              cost estimates and project management services. Our team of experienced professionals 
              ensures cost efficiency and quality on every project.
            </p>
            <PortfolioDownload />

            <Link to='https://wa.me/254710217169'>
              <button className='bg-[#3f418c] text-white  px-5 py-2 hover:py-3 rounded-full'>
                Hire Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

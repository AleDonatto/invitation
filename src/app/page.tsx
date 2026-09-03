import Image from "next/image";
import HeroSection from "./components/HeroSection";
import MessageSection from "./components/MessageSection";
import EventDetails from "./components/EventDetails";
import ConfirmationForm from "./components/ConfirmationForm";
import Footer from "./components/Footer";
import ParentsSection from "./components/ParentsSection";

export default function Home() {
  return (
     <main className="min-h-screen">

      <div className=" colorful-border">
        <div className="grid grid-cols-12 mx-10">
          
          <div className="col-span-12" style={{
            backgroundImage: 'url("./images/top.png")',
            backgroundPosition: 'center',
            height: '190px',
            width: '100%',
            backgroundSize: 'contain',
          }}></div>
        </div>

        <div className="grid grid-cols-12 mx-10 pt-10">
          <div style={{
            backgroundImage: 'url("./images/esquina.png")',
            backgroundPosition: 'center',
            height: '120px',
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }} className="col-span-2">
          </div>

          <div style={{
            backgroundImage: 'url("./images/centro.png")',
            backgroundPosition: 'center',
            height: '120px',
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            rotate: '40deg',
          }} className="col-span-2">
          </div>
          <div style={{
            backgroundImage: 'url("./images/centro.png")',
            backgroundPosition: 'center',
            height: '190px',
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }} className="col-span-4">
          </div>
          <div style={{
            backgroundImage: 'url("./images/centro.png")',
            backgroundPosition: 'center',
            height: '120px',
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            rotate: '-40deg',
          }} className="col-span-2">
          </div>

          <div style={{
            backgroundImage: 'url("./images/esquina.png")',
            backgroundPosition: 'center',
            height: '120px',
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            rotate: '90deg',
          }} className="col-span-2">
          </div>
        </div>

        <div className="grid grid-cols-12 mx-10 pt-16">
          <div className="col-span-12">
            <div className="flex items-center justify-center">
              <div className="w-full h-full" style={{
                backgroundImage: 'url("./images/cruz.png")',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '280px',
              }}></div>
            </div>
          </div>

        </div>
      </div>

      <HeroSection />
      {/* <MessageSection /> */}
      <ParentsSection />
      <EventDetails />
      <ConfirmationForm />
      <Footer />
    </main>
  );
}

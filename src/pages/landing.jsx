import { Footer, NavBar, Slider } from '../components'

export const Landing = () => {

 const sliderData = [
    {
      image: "https://i.ibb.co/58Mq6Mb/slide1.jpg",
      heading: "Slide One",
      desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: "https://i.ibb.co/8gwwd4Q/slide2.jpg",
      heading: "Slide Two",
      desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
      heading: "Slide Three",
      desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
  ];


  return (
    <>
    <NavBar />
      <div className="px-52">
        <div className=" ">
        <div className="flex md:flex-row flex-col justify-around">
          <div className="h-full p-20 justify-self-center md:self-center basis-1/2">
            <h1 className="text-center text-xl sm:text-2xl bg-transparent">
              INDIAN KEBABS AND WRAPS
            </h1>
          </div>
          <div className="justify-items-center p-10 lg:p-28 basis-1/2">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://drive.google.com/thumbnail?id=1w3ngbSpYB4Wk1NDrFCB6jVenNwGVtWEP&sz=w1000"
              alt="img-1"
            />
          </div>
          <hr />
        </div>
        <div className="flex md:flex-row-reverse flex-col justify-around ">
          <div className="h-full p-20 justify-self-center md:self-center basis-1/2">
            <h1 className="text-center text-xl sm:text-2xl bg-transparent">
              INDIAN KEBABS AND WRAPS
            </h1>
          </div>
          <div className="justify-items-center p-6 lg:p-28 basis-1/2">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://drive.google.com/thumbnail?id=1w3ngbSpYB4Wk1NDrFCB6jVenNwGVtWEP&sz=w1000"
              alt="img-1"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around">
          <div className="h-full p-20 justify-self-center md:self-center basis-1/2">
            <h1 className="text-center text-xl sm:text-2xl bg-transparent">
              INDIAN KEBABS AND WRAPS
            </h1>
          </div>
          <div className="justify-items-center p-10 lg:p-28 basis-1/2">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://drive.google.com/thumbnail?id=1w3ngbSpYB4Wk1NDrFCB6jVenNwGVtWEP&sz=w1000"
              alt="img-1"
            />
          </div>
          <hr />
        </div>
        <div className="flex md:flex-row-reverse flex-col justify-around ">
          <div className="h-full p-20 justify-self-center md:self-center basis-1/2">
            <h1 className="text-center text-xl sm:text-2xl bg-transparent">
              INDIAN KEBABS AND WRAPS
            </h1>
          </div>
          <div className="justify-items-center p-6 lg:p-28 basis-1/2">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://drive.google.com/thumbnail?id=1w3ngbSpYB4Wk1NDrFCB6jVenNwGVtWEP&sz=w1000"
              alt="img-1"
            />
          </div>
        </div>
        </div>
        
      </div>
    <Footer/>
  </>
  );
};

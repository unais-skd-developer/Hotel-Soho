import React, { useState } from "react";
import {
  Phone,
  MapPin,
  CalendarDays,
  Users,
  Menu,
  X,
  ConciergeBell,
  Mail,
  Building2,
  Waves,
  Compass,
  TramFront,
  UserRound,
  ChartNoAxesColumn,
  Bath,
  Play,
  Quote,
} from "lucide-react";

const gold = "#bb9876";

const navLinks = [
  ["Home", "#home"],
  ["Accommodation", "#rooms"],
  ["Blog", "#offers"],
  ["Gallery", "#gallery"],
  ["About Us", "#about"],
  ["Contact Us", "#contact"],
];

const rooms = [
  {
    name: "Ensuite Room",
    image:
      "https://www.dorchestercollection.com/media/barpg43v/lmp-431-executive-room-hr-by-markread.jpg",
    capacity: "2 Adults",
    size: "35 sqm",
    view: "City",
    price: 450,
    link: "#ensuite-room",
  },
  {
    name: "King Room",
    image:
      "https://assets.hotelaparis.com/uploads/pictures/000/025/759/Belle-Etoile-01.jpg",
    capacity: "2 Adults",
    size: "35 sqm",
    view: "City",
    price: 300,
    link: "#king-room",
  },
];

const offers = [
  {
    title: "Buy One Get One Free",
    description: "1 Adult is free when booking in July",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Family Discount",
    description: "10% off for families in March",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Honeymoon Offer",
    description: "Special honeymoon suite and items",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
];

const facilities = [
  {
    title: "City Views",
    icon: Building2,
  },
  {
    title: "Swimming Pool",
    icon: Waves,
  },
  {
    title: "South Facing",
    icon: Compass,
  },
  {
    title: "Subway Nearby",
    icon: TramFront,
  },
];

const currencies = ["USD", "EUR", "GBP", "INR"];

function SectionHeading({ children, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl px-5 text-center sm:mb-14">
      <h2 className="text-2xl font-normal text-[#292c31] sm:text-3xl md:text-4xl">
        {children}
      </h2>

      <div className="mx-auto mt-5 h-[2px] w-12 bg-[#c6a789] sm:mt-7" />

      {description && (
        <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-7 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function RoomCard({ room }) {
  return (
    <article className="min-w-0 overflow-hidden border border-gray-200 bg-white">
      <div className="aspect-[4/3] overflow-hidden sm:aspect-[5/3] lg:aspect-[4/3]">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="border-b border-gray-200 px-5 py-4 sm:px-6">
        <h3 className="text-base font-medium text-gray-900">{room.name}</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 px-5 py-5 text-sm text-slate-600 sm:grid-cols-3 sm:gap-3 sm:px-6">
        <div className="flex items-center gap-2">
          <UserRound size={17} className="shrink-0 text-[#bd9775]" />
          <span>Capacity: {room.capacity}</span>
        </div>

        <div className="flex items-center gap-2">
          <ChartNoAxesColumn size={17} className="shrink-0 text-[#bd9775]" />
          <span>Size: {room.size}</span>
        </div>

        <div className="flex items-center gap-2">
          <Bath size={17} className="shrink-0 text-[#bd9775]" />
          <span>View: {room.view}</span>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-4 px-5 pb-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="bg-[#bd9775] px-4 py-3 text-center text-sm font-semibold text-white sm:px-5">
          From ${room.price} / Night
        </span>

        <a
          href={room.link}
          className="inline-flex items-center justify-center gap-1 text-sm text-gray-900 transition hover:text-[#bd9775]"
        >
          View Room <span className="text-lg">›</span>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [currency, setCurrency] = useState("USD");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(4);
  const [showGuests, setShowGuests] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    if (checkIn < localToday) {
      alert("Check-in cannot be in the past.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out must be after check-in.");
      return;
    }

    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: String(guests),
    });

    window.location.href = `/booking?${params.toString()}`;
  };

  const scrollToBooking = () => {
    setMobileMenu(false);
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#f2f2f3] font-sans text-[#292c31]">
      {/* Top contact bar */}

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1454px] flex-col items-start justify-between gap-3 px-4 py-3 sm:px-6 lg:min-h-[59px] lg:flex-row lg:items-center lg:px-8 lg:py-0">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 lg:w-auto">
            <a
              href="tel:111122223333"
              className="flex min-w-0 items-center gap-3 text-sm"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white sm:h-10 sm:w-10"
                style={{ backgroundColor: gold }}
              >
                <Phone size={18} />
              </span>
              <span>1111-2222-3333</span>
            </a>

            <a
              href="https://maps.google.com/?q=55+Columbus+Circle+New+York+NY"
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 items-center gap-3 text-sm"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white sm:h-10 sm:w-10"
                style={{ backgroundColor: gold }}
              >
                <MapPin size={19} />
              </span>
              <span>55 Columbus Circle, New York, NY</span>
            </a>
          </div>

          <div className="hidden h-[58px] items-stretch lg:flex">
            <select
              aria-label="Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="cursor-pointer border-x border-gray-200 bg-white px-5 text-sm outline-none"
            >
              {currencies.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="border-r border-gray-200 px-5 text-sm"
              onClick={() => alert("Account feature coming soon.")}
            >
              My Account
            </button>

            <button
              type="button"
              onClick={scrollToBooking}
              className="flex items-center justify-center gap-3 px-6 font-semibold text-white transition hover:brightness-90"
              style={{ backgroundColor: gold }}
            >
              <ConciergeBell size={20} />
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <header className="relative z-30 bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1454px] items-center justify-between px-5 sm:h-[88px] sm:px-6 lg:h-[100px] lg:px-8">
          <a
            href="#home"
            onClick={() => setMobileMenu(false)}
            className="font-serif text-[27px] tracking-wide sm:text-[32px] lg:text-[36px]"
          >
            Soho Hotel
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-9">
            {navLinks.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`whitespace-nowrap text-sm transition hover:text-[#bb9876] xl:text-[15px] ${
                  index === 0 ? "text-gray-400" : "text-[#303238]"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md transition hover:bg-gray-100 lg:hidden"
            aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu((open) => !open)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="absolute left-0 top-full z-40 w-full border-t border-gray-100 bg-white px-5 py-3 shadow-xl lg:hidden">
            {navLinks.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenu(false)}
                className={`block border-b border-gray-100 py-4 text-sm transition last:border-0 hover:text-[#bb9876] ${
                  index === 0 ? "text-[#bb9876]" : "text-gray-800"
                }`}
              >
                {label}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToBooking}
              className="mt-4 flex w-full items-center justify-center gap-2 px-5 py-4 font-semibold text-white"
              style={{ backgroundColor: gold }}
            >
              <ConciergeBell size={19} />
              Book Now
            </button>
          </nav>
        )}
      </header>

      {/* Hero */}

      <section
        id="home"
        className="relative flex min-h-[370px] items-center bg-cover bg-center sm:min-h-[440px] lg:min-h-[520px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2200&q=90')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto w-full max-w-[1454px] px-5 py-12 sm:px-8 sm:py-16 lg:px-8">
          <h1 className="mb-7 text-4xl font-light leading-[1.2] tracking-tight text-white sm:mb-9 sm:text-6xl lg:text-7xl xl:text-[76px]">
            Convenient City
            <br />
            Location
          </h1>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center px-7 py-3 text-sm font-semibold text-white transition hover:brightness-90 sm:min-h-[60px] sm:px-9 sm:text-base"
            style={{ backgroundColor: gold }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Booking form */}

      <section
        id="booking"
        className="relative z-10 mx-auto -mt-8 max-w-[1200px] scroll-mt-5 px-4 pb-10 sm:-mt-12 sm:px-6 lg:-mt-[59px] lg:px-5"
      >
        <div className="grid grid-cols-1 bg-white shadow-[0_9px_18px_rgba(0,0,0,0.12)] sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex min-h-[94px] items-center gap-4 border-b border-gray-200 px-5 py-5 sm:px-6 lg:min-h-[112px] lg:border-r">
            <CalendarDays size={24} className="shrink-0 text-[#bb9876]" />

            <span className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="font-medium">Check In</span>
              <input
                type="date"
                min={localToday}
                value={checkIn}
                onChange={(e) => {
                  const value = e.target.value;
                  setCheckIn(value);

                  if (checkOut && value >= checkOut) {
                    setCheckOut("");
                  }
                }}
                required
                className="w-full min-w-0 max-w-full bg-transparent text-sm text-gray-500 outline-none"
              />
            </span>
          </label>

          <label className="flex min-h-[94px] items-center gap-4 border-b border-gray-200 px-5 py-5 sm:px-6 lg:min-h-[112px] lg:border-r">
            <CalendarDays size={24} className="shrink-0 text-[#bb9876]" />

            <span className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="font-medium">Check Out</span>
              <input
                type="date"
                min={checkIn || localToday}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="w-full min-w-0 max-w-full bg-transparent text-sm text-gray-500 outline-none"
              />
            </span>
          </label>

          <div className="relative flex min-h-[94px] items-center gap-4 border-b border-gray-200 px-5 py-5 sm:px-6 lg:min-h-[112px] lg:border-r">
            <Users size={25} className="shrink-0 text-[#bb9876]" />

            <button
              type="button"
              aria-expanded={showGuests}
              onClick={() => setShowGuests((open) => !open)}
              className="flex min-w-0 flex-1 flex-col items-start gap-2 text-left"
            >
              <span className="font-medium">Guests</span>
              <span className="text-sm text-gray-500">{guests} Guest(s)</span>
            </button>

            {showGuests && (
              <div className="absolute left-3 right-3 top-[85%] z-40 rounded-sm border border-gray-100 bg-white p-5 shadow-xl sm:left-2 sm:right-2 lg:top-[95%]">
                <p className="mb-5 font-medium">Number of guests</p>

                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    aria-label="Decrease guests"
                    disabled={guests <= 1}
                    onClick={() => setGuests((value) => Math.max(1, value - 1))}
                    className="h-10 w-10 rounded border border-gray-200 text-lg disabled:opacity-30"
                  >
                    −
                  </button>

                  <span className="text-sm">{guests} guests</span>

                  <button
                    type="button"
                    aria-label="Increase guests"
                    disabled={guests >= 20}
                    onClick={() =>
                      setGuests((value) => Math.min(20, value + 1))
                    }
                    className="h-10 w-10 rounded border border-gray-200 text-lg disabled:opacity-30"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowGuests(false)}
                  className="mt-5 w-full py-3 text-white"
                  style={{ backgroundColor: gold }}
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleBooking}
            className="flex min-h-[64px] items-center justify-center gap-2 px-5 py-4 font-semibold text-white transition hover:brightness-90 sm:col-span-2 lg:col-span-1 lg:min-h-[112px]"
            style={{ backgroundColor: gold }}
          >
            <ConciergeBell size={20} />
            Book Now
          </button>
        </div>
      </section>

      {/* Welcome */}

      <section
        id="contact"
        className="mx-auto flex max-w-[1454px] flex-col items-center justify-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[400px] lg:py-24"
      >
        <h2 className="text-center text-2xl font-normal sm:text-3xl">
          Welcome To Soho Hotel
        </h2>

        <div className="mt-6 h-[2px] w-12 bg-[#c6a789] sm:mt-7" />

        <p className="mt-6 w-full max-w-[600px] text-center text-sm leading-7 text-gray-600 sm:mt-7 sm:text-base">
          Nullam et aliquam leo. Pellentesque eget sapien massa. Cras ac est
          faucibus, auctor urna sed, mollis magna. Vestibulum a ante porttitor,
          tincidunt neque in, semper ipsum. Morbi hendrerit sed risus in
          venenatis.
        </p>

        <a
          href="#about"
          className="mt-8 inline-flex min-h-12 items-center justify-center px-7 py-3 text-sm font-semibold text-white transition hover:brightness-90 sm:mt-10"
          style={{ backgroundColor: gold }}
        >
          Learn More
        </a>
      </section>

      {/* About Us */}

      <section id="about" className="flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col items-start justify-center bg-white px-5 py-12 sm:px-10 sm:py-16 md:w-1/2 md:px-10 lg:px-16 lg:py-20 xl:px-24">
          <h2 className="mb-7 text-2xl font-normal text-gray-900 sm:mb-8 sm:text-3xl">
            About Us
            <span className="mt-6 block h-[2px] w-[63px] bg-[#bd9775]" />
          </h2>

          <p className="mb-7 text-sm leading-7 tracking-wide text-[#657184] sm:mb-8 sm:text-base sm:leading-[1.9]">
            Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit
            amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante,
            nec dignissim massa felis ad nulla donec porttitor nulla et
            tristique dignissim.
          </p>

          <a
            href="#rooms"
            className="inline-flex min-h-12 items-center justify-center bg-[#bd9775] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a78160] sm:px-10 sm:py-4 sm:text-base"
          >
            Learn More
          </a>
        </div>

        <div className="h-[280px] w-full overflow-hidden sm:h-[380px] md:h-auto md:min-h-[430px] md:w-1/2 lg:min-h-[500px]">
          <img
            src="https://media.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/homecentre/1000013946386-1000013946386-0705_01-2100.jpg"
            alt="Modern living room with a grey sofa"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      {/* Our Rooms */}

      <section id="rooms" className="scroll-mt-8 py-14 sm:py-20 lg:py-24">
        <SectionHeading description="Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec dignissim.">
          Our Rooms
        </SectionHeading>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </section>

      {/* Guest review */}

      <section className="flex w-full flex-col md:flex-row">
        <div className="h-[280px] w-full overflow-hidden sm:h-[380px] md:h-auto md:min-h-[430px] md:w-1/2 lg:min-h-[500px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyQk8I82n4w7nFcnikM45lh1Z6Capqc4I2K_oH-ZahL3rTknN_UhQXEE&s=10"
            alt="Hotel interior"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex w-full flex-col justify-center bg-white px-5 py-12 sm:px-10 sm:py-16 md:w-1/2 md:px-10 lg:px-16 lg:py-20 xl:px-20">
          <div className="flex items-start gap-3 sm:gap-5">
            <span className="shrink-0 text-5xl font-bold leading-none text-[#c6a789] sm:text-6xl">
              “
            </span>

            <p className="text-xl leading-relaxed tracking-wide text-[#656a70] sm:text-2xl md:text-2xl lg:text-3xl">
              We enjoyed our stay at Soho Hotel greatly, the staff were friendly
              and attentive to every one of our needs.
            </p>
          </div>

          <p className="ml-12 mt-7 text-sm text-[#88847f] sm:ml-[65px] sm:mt-10 sm:text-base">
            — Olivia Simons
          </p>
        </div>
      </section>

      {/* Special Offers */}

      <section id="offers" className="scroll-mt-8 py-14 sm:py-20 lg:py-24">
        <SectionHeading>Special Offers</SectionHeading>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-8">
          {offers.map((offer) => (
            <article key={offer.title} className="min-w-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-lg font-normal text-[#656a70] sm:text-xl">
                {offer.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#88847f] sm:text-base">
                <span className="mr-2" aria-hidden="true">
                  🏷️
                </span>
                {offer.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Video tour */}

      <section id="gallery" className="w-full scroll-mt-8">
        <div
          className="relative flex min-h-[380px] items-center justify-center bg-cover bg-center px-5 py-16 sm:min-h-[460px] sm:px-8 md:min-h-[520px]"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/48/0f/a3/480fa3728b79687fea9213507aa312af.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <h2 className="text-2xl font-normal leading-snug tracking-wide sm:text-3xl md:text-4xl">
              Book online today and look forward to a
              <br className="hidden sm:block" /> relaxing stay with us
            </h2>

            <div className="mx-auto my-6 h-[2px] w-14 bg-[#bd9675] sm:my-8" />

            <p className="mb-8 text-sm sm:mb-9 sm:text-base">
              Watch our video tour now and imagine yourself here
            </p>

            <button
              type="button"
              aria-label="Play video tour"
              onClick={() =>
                alert("Add your video URL to enable the video tour.")
              }
              className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-white transition hover:bg-white/20 sm:h-[84px] sm:w-[84px]"
            >
              <Play size={32} fill="white" />
            </button>
          </div>
        </div>
      </section>

      {/* Hotel Facilities */}

      <section className="bg-[#f3f3f3] px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <SectionHeading>Hotel Facilities</SectionHeading>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-10 lg:gap-x-16 lg:gap-y-12">
          {facilities.map(({ title, icon: Icon }) => (
            <article key={title} className="flex items-start gap-4 sm:gap-6">
              <Icon
                size={36}
                strokeWidth={1.5}
                className="shrink-0 text-[#bd9976] sm:h-[42px] sm:w-[42px]"
              />

              <div>
                <h3 className="mb-3 text-lg sm:mb-5 sm:text-xl">{title}</h3>

                <p className="text-sm leading-7 text-gray-500 sm:text-base sm:leading-[30px]">
                  Proin felis mauris, fermentum non condimentum id, porttitor in
                  nisl curabitur euismod convallis.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}

      <footer className="w-full bg-white">
        <div className="mx-auto grid max-w-[1454px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 lg:px-8">
          {/* Follow Us */}

          <div>
            <h3 className="mb-5 text-xl font-normal text-[#202329] sm:mb-8">
              Follow Us
            </h3>

            <p className="mb-6 text-sm tracking-wide text-[#657184] sm:mb-8 sm:text-base">
              And keep up to date with Soho Hotel
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                ["Facebook", "f"],
                ["Twitter", "♥"],
                ["Instagram", "◎"],
                ["YouTube", "▶"],
                ["Tripadvisor", "◎"],
              ].map(([label, symbol]) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bd9876] text-lg font-bold text-white transition hover:bg-[#a78362] sm:h-12 sm:w-12"
                >
                  {symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div id="footer-contact">
            <h3 className="mb-5 text-xl font-normal text-[#202329] sm:mb-8">
              Contact
            </h3>

            <div className="space-y-6 text-sm tracking-wide text-[#657184] sm:space-y-7 sm:text-base">
              <a
                href="https://maps.google.com/?q=55+Columbus+Circle+New+York+NY"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 transition hover:text-[#bd9876]"
              >
                <MapPin size={22} className="shrink-0 text-[#bd9876]" />
                <span>55 Columbus Circle, New York, NY</span>
              </a>

              <a
                href="tel:111122223333"
                className="flex items-center gap-4 transition hover:text-[#bd9876]"
              >
                <Phone size={21} className="shrink-0 text-[#bd9876]" />
                <span>1111-2222-3333</span>
              </a>

              <a
                href="mailto:booking@example.com"
                className="flex items-center gap-4 break-all transition hover:text-[#bd9876]"
              >
                <Mail size={21} className="shrink-0 text-[#bd9876]" />
                <span>booking@example.com</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="mb-5 text-xl font-normal text-[#202329] sm:mb-8">
              Newsletter
            </h3>

            <p className="mb-6 text-sm text-[#657184] sm:mb-8 sm:text-base">
              Sign up to our newsletter for exclusive offers.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-14 min-w-0 w-full flex-1 border-2 border-[#bd9876] bg-white px-4 text-sm outline-none focus:ring-1 focus:ring-[#bd9876] sm:h-16"
              />

              <button
                type="submit"
                className="h-14 shrink-0 bg-[#bd9876] px-6 text-sm font-semibold text-white transition hover:bg-[#a78362] sm:h-16 sm:px-8"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}

        <div className="bg-[#bd9876]">
          <div className="mx-auto flex max-w-[1454px] flex-col items-start justify-between gap-4 px-5 py-6 text-white sm:flex-row sm:items-center sm:px-8 sm:py-8">
            <p className="text-xs sm:text-sm md:text-base">
              © 2024 Soho Hotel. All Rights Reserved
            </p>

            <div className="flex items-center gap-3">
              <label
                htmlFor="footer-currency"
                className="text-sm text-white/80"
              >
                Currency:
              </label>

              <select
                id="footer-currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="max-w-full cursor-pointer bg-transparent text-sm text-white outline-none"
              >
                {currencies.map((item) => (
                  <option key={item} value={item} className="text-black">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

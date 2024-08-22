import { Link } from 'react-router-dom';
import { User, DollarSign, Bell, Facebook, Twitter, Instagram } from 'lucide-react';
import FAQ from '../components/FAQ';
import { heroImg, portraitImg, sliderImg } from '../assets';
import { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "vfKYvbzoZw5uwPt_NjCUd",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.setAttribute("chatbotId", "vfKYvbzoZw5uwPt_NjCUd");
    script2.setAttribute("domain", "www.chatbase.co");
    script2.defer = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <>
      <header className="bg-[#0A0251] shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#40E9E0]">MoneyMap</div>
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-white font-semibold hover:text-[#40E9E0]">Home</a></li>
            <li><a href="#how-it-works" className="text-white font-semibold hover:text-[#40E9E0]">How It Works</a></li>
            <li><a href="#faq" className="text-white font-semibold hover:text-[#40E9E0]">FAQ</a></li>
            <li><a href="#contact" className="text-white font-semibold hover:text-[#40E9E0]">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-[#0A0251] to-[#1A106A] h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-28">
        {/* Hero Content */}
        <div className="relative z-10 space-y-6 max-w-lg text-white animate-fade-in text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Track <span className="text-[#40E9E0]">Expenses</span> <br /><span className="text-[#40E9E0]">Budget</span> with a Mission.
          </h1>
          <p className="text-lg animate-slide-in-up">
            Take control of your expenses with MoneyMap. Track your spending, set budgets, and achieve your financial goals all in one place.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 font-semibold animate-slide-in-up">
            <Link
              to="/login"
              className="bg-[#40E9E0] text-blue-900 py-3 px-6 rounded-full shadow-lg hover:bg-[#40E9E0] transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-transparent border border-[#40E9E0] py-3 px-6 rounded-full text-[#40E9E0] hover:bg-[#40E9E0] hover:text-blue-900 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 animate-fade-in-right mt-8 md:mt-0">
          <img
            src={sliderImg}
            alt="MoneyMap Web App"
            className="w-full md:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-16 px-4 md:px-16 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Benefits Content */}
          <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
            <h5 className="text-lg text-gray-600 font-bold uppercase tracking-wide">Benefits</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A106A] leading-snug">
              We Make Money <br /> Work In Your Favor
            </h2>
            <p className="text-gray-700 text-lg pb-8 leading-relaxed">
              MoneyMap helps you track every penny, create categories, and set budgets. 
              Get notified when you're nearing your limits, so you can stay on top of your expenses 
              and achieve your financial goals.
            </p>
            <a href="#get-started" className="inline-block bg-[#1A106A] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#1A106A] hover:text-white transition duration-300">
              Get Started
            </a>
          </div>

          {/* Benefits Image */}
          <div className="relative order-1 md:order-2">
            <img src={portraitImg} alt="MoneyMap Dashboard" className="rounded-lg shadow-lg w-full transform hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A106A] opacity-50 rounded-lg"></div>
          </div>
        </div>

        {/* Icons Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-[#0A0251] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <User className="mx-auto text-[#40E9E0] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-white">Personalized Dashboard</h3>
            <p className="text-[#40E9E0] mt-2">Access all your financial data in one place, tailored to your needs.</p>
          </div>
          <div className="p-8 bg-[#0A0251] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <DollarSign className="mx-auto text-[#40E9E0] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-white">Budget Tracking</h3>
            <p className="text-[#40E9E0] mt-2">Set budgets for different categories and stay on top of your spending.</p>
          </div>
          <div className="p-8 bg-[#0A0251] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Bell className="mx-auto text-[#40E9E0] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-white">Real-time Alerts</h3>
            <p className="text-[#40E9E0] mt-2">Receive notifications when you're nearing or exceeding your budget.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-16 text-white px-4">
        <div className="container mx-auto">
          <FAQ /> {/* Include the FAQ component */}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1A106A] mb-8">Choose Your Plan</h2>
          <p className="text-gray-700 mb-8">Select the plan that fits your needs and start managing your expenses effectively.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0A0251] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-white">Basic Plan</h3>
              <p className="text-2xl font-bold text-[#40E9E0] mt-4">$0/month</p>
              <ul className="mt-6 space-y-2 text-white">
                <li>Track Expenses</li>
                <li>Create Categories</li>
                <li>Basic Reports</li>
              </ul>
              <a href="#get-started" className="inline-block mt-8 bg-[#1A106A] text-white py-2 px-6 rounded-full shadow-md hover:bg-[#40E9E0] transition duration-300">Get Started</a>
            </div>

            <div className="bg-[#0A0251] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-white">Premium Plan</h3>
              <p className="text-2xl font-bold text-[#40E9E0] mt-4">$9.99/month</p>
              <ul className="mt-6 space-y-2 text-white">
                <li>All Basic Features</li>
                <li>Advanced Reports</li>
                <li>Custom Alerts</li>
                <li>Priority Support</li>
              </ul>
              <a href="#get-started" className="inline-block mt-8 bg-[#1A106A] text-white py-2 px-6 rounded-full shadow-md hover:bg-[#40E9E0] transition duration-300">Get Started</a>
            </div>

            <div className="bg-[#0A0251] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-white">Enterprise Plan</h3>
              <p className="text-2xl font-bold text-[#40E9E0] mt-4">Contact Us</p>
              <ul className="mt-6 space-y-2 text-white">
                <li>Custom Solutions</li>
                <li>Dedicated Account Manager</li>
                <li>Unlimited Users</li>
              </ul>
              <a href="#get-started" className="inline-block mt-8 bg-[#1A106A] text-white py-2 px-6 rounded-full shadow-md hover:bg-[#40E9E0] transition duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#0A0251] text-white py-8 px-4 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2 text-[#40E9E0]">Email: support@moneymap.com</p>
            <p className="mt-2 text-[#40E9E0]">Phone: +1 234 567 890</p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="text-[#40E9E0] hover:text-white">
              <Facebook size={28} />
            </a>
            <a href="#home" className="text-[#40E9E0] hover:text-white">
              <Twitter size={28} />
            </a>
            <a href="#home" className="text-[#40E9E0] hover:text-white">
              <Instagram size={28} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 MoneyMap. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;

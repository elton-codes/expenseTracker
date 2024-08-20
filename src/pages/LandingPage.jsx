import { Link } from 'react-router-dom';
import { User, UserCheck, Folder, DollarSign, Calendar, Bell, Facebook, Twitter, Instagram } from 'lucide-react';
import FAQ from '../components/FAQ';
import { heroImg, portraitImg, sliderImg } from '../assets';
import { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    // Inject the chatbot script
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
        <nav className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#40E9E0]">MoneyMap</div>
          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-white font-semibold hover:text-[#40E9E0]">Home</a></li>
            <li><a href="#how-it-works" className="text-white font-semibold hover:text-[#40E9E0]">How It Works</a></li>
            <li><a href="#faq" className="text-white font-semibold hover:text-[#40E9E0]">FAQ</a></li>
            <li><a href="#contact" className="text-white font-semibold hover:text-[#40E9E0]">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-[#0A0251] to-[#1A106A] h-screen flex items-center justify-between px-8 md:px-28"
      >
        {/* Hero Content */}
        <div className="relative z-10 space-y-6 max-w-lg text-white animate-fade-in">
          <h1 className="text-5xl font-bold leading-tight">
            Track <span className="text-[#40E9E0]">Expenses</span> <br /><span className="text-[#40E9E0]">Budget</span> with a Mission.
          </h1>
          <p className="text-lg animate-slide-in-up">
            Take control of your expenses with MoneyMap. Track your spending, set budgets, and achieve your financial goals all in one place.
          </p>
          <div className="flex space-x-4 font-semibold animate-slide-in-up">
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
        <div className="relative z-10 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 animate-fade-in-right">
          <img
            src={sliderImg}
            alt="MoneyMap Web App"
            className="w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-16 px-8 md:px-16 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Benefits Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h5 className="text-lg text-gray-600 font-bold uppercase tracking-wide">Benefits</h5>
            <h2 className="text-4xl font-bold text-[#1A106A] leading-snug">
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
      <section id="faq" className="bg-white py-16 text-white">
        <div className="container mx-auto">
          <FAQ /> {/* Include the FAQ component */}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 text-center">
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
              <Link to="/signup" className="mt-6 block bg-[#40E9E0] text-white py-2 px-4 rounded-lg hover:bg-[#1A106A] hover:text-white transition duration-300">Get Started</Link>
            </div>
            <div className="bg-[#1A106A] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#40E9E0] transform scale-105">
              <h3 className="text-2xl font-semibold text-white">Pro Plan</h3>
              <p className="text-2xl font-bold text-[#40E9E0] mt-4">$9.99/month</p>
              <ul className="mt-6 space-y-2 text-white">
                <li>Everything in Basic</li>
                <li>Custom Reports</li>
                <li>Budget Alerts</li>
                <li>Email Support</li>
              </ul>
              <Link to="/get-started" className="mt-6 block bg-[#40E9E0] text-blue-900 py-2 px-4 rounded-lg hover:bg-[#1A106A] hover:text-white transition duration-300">Get Started</Link>
            </div>
            <div className="bg-[#0A0251] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-white">Premium Plan</h3>
              <p className="text-2xl font-bold text-[#40E9E0] mt-4">$19.99/month</p>
              <ul className="mt-6 space-y-2 text-white">
                <li>Everything in Pro</li>
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
                <li>Custom Integrations</li>
              </ul>
              <Link to="/get-started" className="mt-6 block bg-[#40E9E0] text-blue-900 py-2 px-4 rounded-lg hover:bg-[#1A106A] hover:text-white transition duration-300">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0251] py-16">
        <div className="container mx-auto flex justify-between text-white">
          {/* Footer Branding */}
          <div className="max-w-xs">
            <img src="logo.png" alt="MoneyMap Logo" className="mb-4" />
            <p className="text-[#40E9E0]">MoneyMap helps you track every penny, create categories, and set budgets. Achieve your financial goals with ease.</p>
            <div className="flex space-x-4 mt-4">
              <Link to="#"><Facebook className="text-[#40E9E0]" /></Link>
              <Link to="#"><Twitter className="text-[#40E9E0]" /></Link>
              <Link to="#"><Instagram className="text-[#40E9E0]" /></Link>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            <div>
              <h3 className="text-lg font-bold text-[#40E9E0] mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-[#40E9E0]">About</a></li>
                <li><a href="#terms" className="hover:text-[#40E9E0]">Terms of Use</a></li>
                <li><a href="#privacy" className="hover:text-[#40E9E0]">Privacy Policy</a></li>
                <li><a href="#how-it-works" className="hover:text-[#40E9E0]">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#40E9E0] mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#support-center" className="hover:text-[#40E9E0]">Support Center</a></li>
                <li><a href="#service" className="hover:text-[#40E9E0]">24/7 Service</a></li>
                <li><a href="#chat" className="hover:text-[#40E9E0]">Quick Chat</a></li>
                <li><a href="#contact" className="hover:text-[#40E9E0]">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#40E9E0] mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#support-center" className="hover:text-[#40E9E0]">Support Center</a></li>
                <li><a href="#whatsapp" className="hover:text-[#40E9E0]">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;

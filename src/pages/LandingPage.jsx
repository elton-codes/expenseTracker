import { Link } from 'react-router-dom';
import { User, UserCheck, Folder, DollarSign, Calendar, Bell, FacebookIcon, Twitter, Instagram, Facebook } from 'lucide-react';
import FAQ from '../components/FAQ';
import { heroImg, portraitImg } from '../assets';
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
      <header className="bg-gray-200 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MoneyMap</div>
          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-black font-semibold hover:text-blue-600">Home</a></li>
            <li><a href="#how-it-works" className="text-black font-semibold hover:text-blue-600">How It Works</a></li>
            <li><a href="#faq" className="text-black font-semibold hover:text-blue-600">FAQ</a></li>
            <li><a href="#contact" className="text-black font-semibold hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="flex items-center justify-between bg-gradient-to-r from-gray-200 to-white h-screen px-28">
        {/* Hero Content */}
        <div className="space-y-6 max-w-lg">
          <h1 className="text-5xl font-bold">
            We <span className="text-blue-600">Guarantee</span> <br />
            The Worthiness Of <br /> Every <span className="text-blue-600">Money</span> Transaction.
          </h1>
          <p className="text-gray-700 text-lg">Take control of your expenses with MoneyMap. Track your spending, set budgets, and achieve your financial goals all in one place.</p>
          <div className="space-x-4 font-semibold">
            <Link to="/login" className="bg-blue-600 text-white py-2 px-4 border border-blue-600 rounded-lg hover:bg-blue-800">Login</Link>
            <Link to="/signup" className="bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">Sign Up</Link>
          </div>
        </div>
        {/* Hero Image */}
        <div className="rounded-full overflow-hidden">
          <img src={heroImg} alt="MoneyMap Web App" className="w-full h-full object-cover" />
        </div>
      </section>

      <section id="how-it-works" className="flex items-center gap-4 justify-between bg-white py-16 px-16">
        {/* Benefits Image */}
        <div className="w-1/2">
          <img src={portraitImg} alt="MoneyMap Dashboard" className="rounded-lg shadow-lg" />
        </div>
        {/* Benefits Content */}
        <div className="w-1/2 space-y-6">
          <h5 className="text-lg text-gray-600 font-bold">Benefits</h5>
          <h2 className="text-4xl font-bold text-blue-600">We Make Money <br /> Work In Your Favor</h2>
          <p className="text-gray-700 text-base pb-8">MoneyMap helps you track every penny, create categories, and set budgets. <br /> Get notified when you're nearing your limits, so you can stay on top of your expenses and achieve your financial goals.</p>
          <a href="#get-started" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800">Get Started</a>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <div className="container mx-auto">
          <h5 className="text-lg text-gray-600">How It Works</h5>
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Add Your All Daily Expenses</h2>
          <p className="text-gray-700 mb-16">Nullam porta consectetur metus vel facilisis. Aliquam quis molestie massa, ut fringilla odio. Sed blandit quis ante ut feugiat.</p>
          <div className="grid grid-cols-3 gap-8 px-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <User className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold">Sign Up / Log In</h3>
              <p>Create an account or log in to access your personal dashboard.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <UserCheck className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold">Update Profile</h3>
              <p>Personalize your account by updating your profile information.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <Folder className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold">Create Category</h3>
              <p>Organize your expenses by creating categories such as Groceries, Transport, etc.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <DollarSign className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold">Attach a Budget</h3>
              <p>Assign a budget to each category to control your spending.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <Calendar className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold">Add Expenses</h3>
              <p>Log your daily expenses under the respective categories.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <Bell className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold">Get Notifications</h3>
              <p>Receive alerts when your spending exceeds your set budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <FAQ /> {/* Include the FAQ component */}
      </section>

      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">Choose Your Plan</h2>
          <p className="text-gray-700 mb-8">Select the plan that fits your needs and start managing your expenses effectively.</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Basic Plan</h3>
              <p className="text-2xl font-bold text-blue-600 mt-4">$0/month</p>
              <ul className="mt-6 space-y-2">
                <li>Track Expenses</li>
                <li>Create Categories</li>
                <li>Basic Reports</li>
              </ul>
              <Link to="/signup" className="mt-6 block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800">Sign Up</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 transform scale-105">
              <h3 className="text-2xl font-semibold">Pro Plan</h3>
              <p className="text-2xl font-bold text-blue-600 mt-4">$9.99/month</p>
              <ul className="mt-6 space-y-2">
                <li>Everything in Basic</li>
                <li>Custom Reports</li>
                <li>Budget Alerts</li>
                <li>Email Support</li>
              </ul>
              <Link to="/get-started" className="mt-6 block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800">Get Started</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Premium Plan</h3>
              <p className="text-2xl font-bold text-blue-600 mt-4">$19.99/month</p>
              <ul className="mt-6 space-y-2">
                <li>Everything in Pro</li>
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
                <li>Custom Integrations</li>
              </ul>
              <Link to="/get-started" className="mt-6 block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-16">
      <div className="container mx-auto flex justify-between">
        {/* Footer Branding */}
        <div className="max-w-xs">
          <img src="logo.png" alt="MoneyMap Logo" className="mb-4" />
          <p className="text-gray-700">Nullam porta consectetur metus vel facilisis. Aliquam quis molestie massa, ut fringilla odio. Sed blandit quis ante ut feugiat.</p>
          {/* <div className="flex space-x-4 mt-4">
            <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
          </div> */}
          <div className="flex space-x-4 mt-4">
                  <Link className="text-yellow"> <Facebook /> </Link>
                  <Link className="text-yellow"> <Twitter /> </Link>
                  <Link className="text-yellow"> <Instagram /> </Link>
                </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-3 gap-16">
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
              <li><a href="#terms" className="text-gray-700 hover:text-blue-600">Terms of Use</a></li>
              <li><a href="#privacy" className="text-gray-700 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#support-center" className="text-gray-700 hover:text-blue-600">Support Center</a></li>
              <li><a href="#service" className="text-gray-700 hover:text-blue-600">24/7 Service</a></li>
              <li><a href="#chat" className="text-gray-700 hover:text-blue-600">Quick Chat</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#support-center" className="text-gray-700 hover:text-blue-600">Support Center</a></li>
              <li><a href="#whatsapp" className="text-gray-700 hover:text-blue-600">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default LandingPage;

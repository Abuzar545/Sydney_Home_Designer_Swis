import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact_Us() {
  return (
    <div className="bg-pink-200 min-h-screen">
        {/* ── Animations ── */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .fade-up         { animation: fadeUp 0.7s ease both; }
                .fade-up-d1      { animation-delay: 0.1s; }
                .fade-up-d2      { animation-delay: 0.25s; }
                .fade-up-d3      { animation-delay: 0.4s; }
                .fade-up-d4      { animation-delay: 0.55s; }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-14px); }
                }
                .float { animation: float 5s ease-in-out infinite; }
            `}} />
     
      <section className="bg-gray-50 py-20 px-6 lg:px-12 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto fade-up fade-up-d1 fade-up fade-up-d2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 mb-4">
            LET'S BUILD YOUR <span className="text-[#48AAB5]">DREAM</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Ready to start your custom luxury home journey? Reach out to our expert team for a free creative call and estimate.
          </p>
        </div>
      </section>

      {/* --- Section 2: Contact Form & Info --- */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 fade-up fade-up-d2">
          
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" placeholder="Abuzar" className="bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#48AAB5] transition-all outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" placeholder="Ghaffari" className="bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#48AAB5] transition-all outline-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" placeholder="abuzar@example.com" className="bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#48AAB5] transition-all outline-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Project Type</label>
                <select className="bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#48AAB5] outline-none">
                  <option>Custom Home Construction</option>
                  <option>Knock Down & Rebuild</option>
                  <option>Addition & Renovation</option>
                  <option>Interior Design</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea rows="4" placeholder="Tell us about your vision..." className="bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#48AAB5] transition-all outline-none resize-none"></textarea>
              </div>

              <button className="w-full bg-black text-white py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg mt-4">
                SEND REQUEST
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right: Info & Process */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              
              {/* Direct Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#8E537A] rounded-2xl flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-500 text-sm">1300 574 235<br/>0481 000 066</p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#48AAB5] rounded-2xl flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-500 text-sm">info@sydneydesignerhomes.com.au</p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Office Info */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-[#48AAB5] shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Our Studio</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      11 Lamington Circuit,<br/> North Kellyville NSW 2155, Australia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#8E537A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Working Hours</h4>
                    <p className="text-gray-500 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge / Note */}
              <div className="bg-gray-900 text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2">Free Creative Call</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Not ready for a full contract? Book a 15-minute informal chat to explore pricing ideas and feasibility for your land.
                  </p>
                </div>
                {/* Decorative Circle */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#48AAB5]/20 rounded-full blur-2xl"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Full Width Map --- */}
      <section className="h-[450px] bg-gray-200 grayscale contrast-125">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467812921643!2d150.9575464!3d-33.6839352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3d000000001%3A0x0!2zMzPCsDQxJzAyLjIiUyAxNTDCsDU3JzI3LjIiRQ!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
      </section>
    </div>
  );
}

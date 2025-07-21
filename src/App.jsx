import React, { useEffect, useState} from 'react';
import { Menu, X, Phone, Mail, MapPin, Calendar, CheckCircle,AlertCircle, Users, Award, BookOpen, GraduationCap, Star, ChevronRight, Facebook, Twitter, Instagram, MessageCircle, Globe, Building, Target, Eye, Heart, ArrowRight, Play, ChevronDown, Zap, Shield, Trophy, Building2, Camera } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [scrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About LASU', id: 'about' },
    { name: 'Admission', id: 'admission' },
    { name: 'Gallery', id: 'gallery' },
    // { name: 'Results', id: 'results' },
    { name: 'Contact', id: 'contact' }
  ];

  // const galleryImages = [
  //   { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800', title: 'LASU Graduation Ceremony 2024' },
  //   { id: 2, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', title: 'Advanced Research Laboratory' },
  //   { id: 3, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800', title: 'University Sports Championship' },
  //   { id: 4, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'LASU Main Campus Building' },
  //   { id: 5, src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800', title: 'Modern University Library' },
  //   { id: 6, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800', title: 'Cultural Festival Celebrations' },
  //   { id: 7, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', title: 'Academic Excellence Awards' },
  //   { id: 8, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', title: 'Student Leadership Summit' },
  //   { id: 9, src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800', title: 'Information Technology Center' },
  //   { id: 10, src: 'https://images.unsplash.com/photo-1581726690015-c9861c2d3671?w=800', title: 'University Orchestra Performance' },
  //   { id: 11, src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800', title: 'Academic Conference 2024' },
  //   { id: 12, src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800', title: 'Inter-University Sports Competition' }
  // ];

  const Header = () => (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/90 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
                <img src="src\assets\logo.jpg" className='w-15 h-15 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg' alt="" />
              {/* <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-pulse"></div> */}
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">LASU</h1>
              <p className="text-sm text-gray-600 font-medium">University of First Choice</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                  currentPage === item.id 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-block px-4 py-2 mt-7 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                🎓 The Nation's Pride
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Lagos State
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                  University
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                It is with great pleasure that I welcome you to Lagos State University, the citadel of learning, the University of First Choice and the Nation's pride.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('admission')}
                  className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl font-semibold text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Discover More</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">50K+</div>
                    <div className="text-blue-200 text-sm">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">200+</div>
                    <div className="text-blue-200 text-sm">Programmes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-blue-200 text-sm">Faculties</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">40+</div>
                    <div className="text-blue-200 text-sm">Years Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">LASU?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to excellence, innovation, and producing globally competitive graduates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Innovation Excellence',
                description: 'Cutting-edge research facilities and innovative teaching methodologies that prepare students for the future.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Academic Excellence',
                description: 'Rigorous academic standards with world-class faculty committed to student success and development.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: <Trophy className="w-12 h-12" />,
                title: 'Global Recognition',
                description: 'Internationally recognized degrees and partnerships with leading universities worldwide.',
                color: 'from-green-500 to-green-600'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" style={{background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`}}></div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Excellence in Numbers</h2>
            <p className="text-xl text-blue-100">Our achievements speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '50,000+', label: 'Proud Students', desc: 'Active learners' },
              { icon: Award, number: '500+', label: 'Awards Won', desc: 'National & International' },
              { icon: BookOpen, number: '2,000+', label: 'Expert Faculty', desc: 'PhD holders' },
              { icon: Globe, number: '200+', label: 'Global Partners', desc: 'Universities worldwide' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-white/20 to-white/10 mb-6">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-semibold mb-1">{stat.label}</div>
                  <div className="text-blue-300 text-sm">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">LASU</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over the years, LASU has demonstrated excellence in its activities. We are irrevocably committed to sustaining this culture and indeed transmitting it from excellence to distinction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 mr-3" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed text-blue-100">
                  To produce outstanding globally acceptable education and related discipline professionals, using innovative and creative approach through relevant action research and most sophisticated technology, with high moral standards and values that enhance their potentials to develop and transform the education industry in particular and the larger society, in general.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 -translate-x-20"></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/10 rounded-full translate-y-14 translate-x-14"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 mr-3" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-red-100">
                  To be a great and dynamic University focused on the attainment of excellence in producing exemplary education and other related discipline professionals who are not only competent in their discipline, but also critical thinkers and information technology compliant capable of playing key roles in the laying of solid foundation for lifelong teaching, learning and provision of specialised services across all sectors of the economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Campus</h2>
            <p className="text-xl text-gray-600">Located in the heart of Lagos, Nigeria</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-blue-50">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Main Campus - Ojo</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">Lagos State University, Ojo (Main campus), Lagos State, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Established</p>
                      <p className="text-gray-600">1983 - Over 40 years of academic excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Motto</p>
                      <p className="text-gray-600">"Preferred State University at the Centre of Excellence"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AdmissionPage = () => (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join LASU Today</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Begin your journey to excellence at Nigeria's preferred state university
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Admission Requirements</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Undergraduate Programmes</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />JAMB UTME with minimum 180 score</li>
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />5 O'Level credits including English & Mathematics</li>
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />LASU Post-UTME screening</li>
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />Direct Entry with relevant qualifications</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Postgraduate Programmes</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />Bachelor's degree with minimum 2.5 CGPA</li>
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />NYSC discharge certificate</li>
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />Professional certifications (where applicable)</li>
                    <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-500 mr-2" />Research proposal for PhD programmes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-8">
                <h2 className="text-3xl font-bold mb-6">Application Process</h2>
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Online Registration', desc: 'Create account on LASU portal' },
                    { step: '2', title: 'Document Upload', desc: 'Submit required credentials' },
                    { step: '3', title: 'Application Fee', desc: 'Pay non-refundable fee' },
                    { step: '4', title: 'Screening Exercise', desc: 'Attend scheduled examination' },
                    { step: '5', title: 'Admission Decision', desc: 'Check portal for results' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-blue-100 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Admissions</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-600"> +234-903-676-5662</span>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-600">admissions@lasu.edu.ng</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-600">portal.lasu.edu.ng</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, ] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample building images with only src
  const galleryImages = [
    {
      id: 1,
      src: "src/assets/WhatsApp Image 2025-07-20 at 21.12.21_23389e66.jpg",
    },
    {
      id: 2,
      src: "src/assets/WhatsApp Image 2025-07-20 at 22.43.31_4b0c4a08.jpg",
    },
    {
      id: 3,
      src: "src/assets/WhatsApp Image 2025-07-20 at 22.43.30_78d66736.jpg",
    },
    {
      id: 4,
      src: "src/assets/WhatsApp Image 2025-07-20 at 22.43.28_c4fe0c16.jpg",
    },
    {
      id: 5,
      src: "src/assets/WhatsApp Image 2025-07-20 at 21.14.53_b8bee6f8.jpg",
    },
    {
      id: 6,
      src: "src/assets/WhatsApp Image 2025-07-20 at 21.14.52_3c2dbb80.jpg",
    }
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section with Enhanced Animation */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rotate-45 animate-bounce delay-300"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-purple-300 rotate-45 animate-bounce delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className={`transform transition-all duration-1500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center justify-center mb-8 space-x-4">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <Camera className="w-16 h-16 text-blue-300" />
              </div>
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <Building2 className="w-16 h-16 text-purple-300" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent leading-tight">
              Campus Gallery
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 max-w-5xl mx-auto leading-relaxed font-light mb-12">
              Discover the architectural beauty and modern design of our world-class facilities
            </p>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center space-x-2">
                  <span>Explore Gallery</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-2">
            <div className="w-2 h-4 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-6 hover:rotate-1 ${
                  index % 3 === 0 ? 'xl:translate-y-0' : index % 3 === 1 ? 'xl:translate-y-8' : 'xl:translate-y-4'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                {/* Main Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={image.src}
                    alt={`Gallery Image ${image.id}`}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                    loading="lazy"
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                  
                  {/* Dynamic Color Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 transition-all duration-700"></div>
                </div>

                {/* Enhanced Corner Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 hover:bg-white/30 transition-colors duration-300">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 backdrop-blur-lg" 
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-7xl max-h-full bg-white rounded-3xl overflow-hidden shadow-2xl transform animate-modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Close Button */}
            <button
              className="absolute top-6 right-6 z-30 w-14 h-14 bg-black/60 hover:bg-black/80 text-white rounded-2xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 group"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {/* Image Container */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={`Gallery Image ${selectedImage.id}`}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes modal-enter {
          from {
            transform: scale(0.8) rotate(-2deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-modal-enter {
          animation: modal-enter 0.5s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #6366f1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #4f46e5);
        }
      `}</style>
    </div>
  );
};



// const ResultsPage = () => (
//   <div className="min-h-screen pt-20">
//     {/* Hero Section - Similar to Admission Page */}
//     <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Results Portal</h1>
//         <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//           Access your academic performance and detailed reports with ease
//         </p>
//       </div>
//     </section>

//     {/* Main Content Section */}
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           {/* Login Form Section */}
//           <div>
//             <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
//               <div className="text-center mb-8">
//                 <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">Result Login</h2>
//                 <p className="text-gray-600">Enter your credentials to access your academic records</p>
//               </div>
              
//               <form className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Student ID</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Enter your student ID"
//                       className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">Date of Birth</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <input
//                       type="date"
//                       className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">PIN</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                       </svg>
//                     </div>
//                     <input
//                       type="password"
//                       placeholder="Enter your result PIN"
//                       className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   View Results
//                 </button>
//               </form>

//               {/* Quick Links */}
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <p className="text-sm text-gray-600 text-center mb-4">Need help?</p>
//                 <div className="flex justify-center space-x-4">
//                   <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300">
//                     Forgot PIN?
//                   </button>
//                   <span className="text-gray-300">|</span>
//                   <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300">
//                     Contact Support
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Section */}
//           <div className="space-y-8">
            
//             {/* Features Card */}
//             <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
//               <h3 className="text-2xl font-bold mb-6">What You Can Access</h3>
//               <div className="space-y-4">
//                 {[
//                   { icon: "📊", title: "Current Semester Results", desc: "View your latest academic performance" },
//                   { icon: "📈", title: "CGPA Tracking", desc: "Monitor your cumulative grade point average" },
//                   { icon: "📋", title: "Course Breakdown", desc: "Detailed analysis of each course performance" },
//                   { icon: "🎯", title: "Academic Standing", desc: "Check your current academic status" },
//                   { icon: "📑", title: "Official Transcripts", desc: "Download certified academic records" }
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
//                     <span className="text-2xl">{item.icon}</span>
//                     <div>
//                       <h4 className="font-bold text-white">{item.title}</h4>
//                       <p className="text-blue-100 text-sm">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Security Info */}
//             <div className="bg-white rounded-2xl shadow-lg p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Security & Privacy</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">SSL Encrypted Connection</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">Data Protection Compliant</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-700">Regular Security Audits</span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Notice Section */}
//         <div className="mt-16 max-w-4xl mx-auto">
//           <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-2xl p-8 shadow-lg">
//             <div className="flex items-start">
//               <div className="flex-shrink-0 mr-4">
//                 <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
//                   <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-amber-800 mb-2">Important Notice</h4>
//                 <p className="text-amber-700 leading-relaxed">
//                   This is a demonstration portal designed to showcase the user interface. For actual result checking and official academic records, please contact the school administration office or visit the campus with proper identification documents. All data shown here is for demonstration purposes only.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Support Section */}
//         <div className="mt-16">
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Assistance?</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <h4 className="font-bold text-gray-900 mb-2">Phone Support</h4>
//                 <p className="text-gray-600 text-sm"> +234-903-676-5662</p>
//               </div>
//               <div className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h4 className="font-bold text-gray-900 mb-2">Email Support</h4>
//                 <p className="text-gray-600 text-sm">results@lasu.edu.ng</p>
//               </div>
//               <div className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h4 className="font-bold text-gray-900 mb-2">Office Hours</h4>
//                 <p className="text-gray-600 text-sm">Mon-Fri: 8AM-5PM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// );


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Show notification
  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 6000);
  };

  // Handle form submission
  const handleSubmit = async () => {    
    if (!validateForm()) {
      showNotification('error', 'Please fix the errors below');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xgvzonvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        showNotification('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showNotification('error', 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Notification component
  const Notification = ({ type, message, onClose }) => (
    <div className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-start space-x-3">
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
        )}
        <p className="text-sm flex-1">{message}</p>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // Success Message Component
  const SuccessMessage = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
      <p className="text-xl text-gray-600 mb-8">
        Thank you for contacting us. We've received your message and will get back to you within 24 hours.
      </p>
      <button
        onClick={() => setSubmitted(false)}
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Send Another Message
      </button>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Notification */}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for any inquiries, support, or to learn more about LASU
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Monday - Friday, 8AM - 4PM</p>
              <p className="text-blue-600 font-semibold">+234-903-676-5662</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">We'll respond within 24hrs</p>
              <p className="text-red-600 font-semibold">draydml17@gmail.com</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">Lagos State University</p>
              <p className="text-green-600 font-semibold">Ojo, Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Lagos State University<br />
                        Ojo Campus, Ojo<br />
                        Lagos State, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Numbers</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">Main: +234-903-676-5662</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email Addresses</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">draydml17@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-blue-100">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-100">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-blue-100">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <SuccessMessage />
              ) : (
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Your first name"
                          className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Your last name"
                          className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234-XXX-XXX-XXXX"
                        className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                      >
                        <option>General Inquiry</option>
                        <option>Admission Information</option>
                        <option>Academic Support</option>
                        <option>Fee Payment</option>
                        <option>Technical Support</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Tell us how we can help you..."
                        className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our beautiful campus in Lagos</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.742256224228!2d3.1818465302562844!3d6.466376289254072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8696500590b1%3A0xf27b47e41fad6dab!2sLagos%20State%20University!5e0!3m2!1sen!2sng!4v1753039008655!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common inquiries</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What are your admission requirements?",
                answer: "We require JAMB UTME with minimum 180 score, 5 O'Level credits including English & Mathematics, and successful completion of our Post-UTME screening."
              },
              {
                question: "How can I schedule a campus tour?",
                answer: "You can schedule a campus tour by calling our admissions office at +234-903-676-5662 or sending an email to draydml17@gmail.com."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept bank transfers, online payments, and cash payments at our designated collection points."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
    </div>
    
    {/* Main Footer Content */}
    <div className="relative py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src='src\assets\logo.jpg' className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
              </img>
              <div>
                <h3 className="text-2xl font-bold">LASU</h3>
                <p className="text-sm text-blue-200">Lagos State University</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Building bright futures through quality education, character development, and innovative learning experiences that prepare students for global success.
            </p>
            
            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-l-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setCurrentPage(item.id)}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Academic Programs */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Academic Programs</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Undergraduate Studies</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Postgraduate Studies</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Research Programs</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Distance Learning</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Professional Development</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Certificate Courses</li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact & Connect</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Lagos State University</p>
                  <p>Ojo Campus, Lagos State</p>
                  <p>Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm"> +234-903-676-5662</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">draydml17@gmail.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, color: 'hover:bg-blue-600' },
                  { icon: Twitter, color: 'hover:bg-sky-500' },
                  { icon: Instagram, color: 'hover:bg-pink-600' },
                  { icon: Globe, color: 'hover:bg-green-600' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="relative border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Lagos State University. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Established 1983 • Accredited by NUC • ISO 9001:2015 Certified
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
  </footer>
);

  const WhatsAppButton = () => (
    <a
      href="https://wa.me/2348012345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'admission':
        return <AdmissionPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'results':
        return <ResultsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
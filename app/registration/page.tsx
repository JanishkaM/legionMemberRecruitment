'use client';

import React, { useState, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Hexagon, Terminal, User, Hash, Briefcase, Gamepad2, Shield, Phone, MessageCircle, Palette } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';

interface FormData {
  email: string;
  fullName: string;
  department: string;
  departmentOther: string;
  studentNo: string;
  year: string;
  contactMobile: string;
  contactWhatsapp: string;
  digitalPlatform: string[];
  gamingPlatform: string[];
  gamingPlatformOther: string;
  esportMention: string;
  esportFuture: string;
  creativePlatforms: string[];
  creativeFuture: string;
}

export default function RegistrationPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    fullName: '',
    department: 'Computing & Technology',
    departmentOther: '',
    studentNo: '',
    year: '1 st Year',
    contactMobile: '',
    contactWhatsapp: '',
    digitalPlatform: [],
    gamingPlatform: [],
    gamingPlatformOther: '',
    esportMention: '',
    esportFuture: '',
    creativePlatforms: [],
    creativeFuture: ''
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitFailed, setSubmitFailed] = useState(false);

  // Check if form has any data filled in
  const isFormDirty = () => {
    return (
      formData.email !== '' ||
      formData.fullName !== '' ||
      formData.department !== 'Computing & Technology' ||
      formData.departmentOther !== '' ||
      formData.studentNo !== '' ||
      formData.year !== '1 st Year' ||
      formData.contactMobile !== '' ||
      formData.contactWhatsapp !== '' ||
      formData.digitalPlatform.length > 0 ||
      formData.gamingPlatform.length > 0 ||
      formData.gamingPlatformOther !== '' ||
      formData.esportMention !== '' ||
      formData.esportFuture !== '' ||
      formData.creativePlatforms.length > 0 ||
      formData.creativeFuture !== ''
    );
  };

  // Add beforeunload event listener
  React.useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormDirty() && !submitted) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData, submitted]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleCheckboxChange = useCallback((name: keyof FormData, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[name] as string[];
      const newArray = checked 
        ? [...currentArray, value]
        : currentArray.filter(item => item !== value);
      return { ...prev, [name]: newArray };
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitFailed(false);

    // Require at least one digital platform selection
    if (formData.digitalPlatform.length === 0) {
      setSubmitError('Please select at least one digital platform.');
      return;
    }

    // Require departmentOther when Other is selected
    if (formData.department === '__other_option__' && !formData.departmentOther.trim()) {
      setSubmitError('Please specify your faculty/department.');
      return;
    }

    // Require gamingPlatformOther when Other is selected
    if (formData.gamingPlatform.includes('__other_option__') && !formData.gamingPlatformOther.trim()) {
      setSubmitError('Please specify your gaming platform when selecting Other.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build and submit a real HTML form to avoid fetch/CORS/401 issues
      const form = document.createElement('form');
      form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSddi6wjmBR90h4dLS-2bWuyRS9wKK14zoOR1cbHO28Q4EjW1g/formResponse';
      form.method = 'POST';
      form.target = 'hidden_iframe_submission';
      form.style.display = 'none';

      const appendField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      // Map form data to Google Form entry IDs - BASIC INFORMATION SECTION
      appendField('entry.1045781291', formData.email);
      appendField('entry.1065046570', formData.fullName);
      // Department - send "Other" if selected with custom value
      if (formData.department === '__other_option__') {
        appendField('entry.1166974658', '__other_option__');
        if (formData.departmentOther) {
          appendField('entry.1166974658.other_option_response', formData.departmentOther);
        }
      } else {
        appendField('entry.1166974658', formData.department);
      }
      appendField('entry.839337160', formData.studentNo);
      appendField('entry.242359914', formData.year);
      appendField('entry.1307958213', formData.contactMobile);
      appendField('entry.139130355', formData.contactWhatsapp);
      
      // E-SPORTS AND DIGITAL MEDIA SECTION
      // Digital platforms (checkbox multiple choice)
      formData.digitalPlatform.forEach(platform => {
        appendField('entry.1572804973', platform);
      });
      
      // Gaming platforms (checkbox multiple choice)
      formData.gamingPlatform.forEach(platform => {
        if (platform === '__other_option__') {
          appendField('entry.1399658961', '__other_option__');
          if (formData.gamingPlatformOther) {
            appendField('entry.1399658961.other_option_response', formData.gamingPlatformOther);
          }
        } else {
          appendField('entry.1399658961', platform);
        }
      });
      
      // Text responses
      if (formData.esportMention) {
        appendField('entry.1649045995', formData.esportMention);
      }
      if (formData.esportFuture) {
        appendField('entry.717224721', formData.esportFuture);
      }
      
      // Creative platforms (checkbox multiple choice)
      formData.creativePlatforms.forEach(platform => {
        appendField('entry.472243475', platform);
      });
      
      if (formData.creativeFuture) {
        appendField('entry.1181509242', formData.creativeFuture);
      }

      // Hidden iframe target
      let iframe = document.getElementById('hidden_iframe_submission') as HTMLIFrameElement | null;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe_submission';
        iframe.id = 'hidden_iframe_submission';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      document.body.appendChild(form);
      
      // Log form fields for debugging
      const formEntries = new FormData(form);
      console.log('Form submission data:', Object.fromEntries(formEntries));
      
      form.submit();
      form.remove();

      setSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitError('Access denied. Please try again or return home.');
      setSubmitFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitFailed && !submitted) {
    return (
      <div className="min-h-screen hex-pattern relative flex items-center justify-center p-4">
        <div className="scanline" />
        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-500 py-12">
          <Hexagon size={60} className="md:w-20 md:h-20 text-red-400 animate-spin-slow" strokeWidth={1} />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-widest uppercase glow-text">
            Access Denied
          </h2>
          <p className="text-red-200 font-mono text-base md:text-lg border-l-4 border-red-500 pl-4 bg-red-900/20 p-4 max-w-md skew-x-[-10deg]">
            <span className="skew-x-10 block">
              Submission failed on the server. Please try again or return home.
            </span>
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => {
                setSubmitError(null);
                setSubmitFailed(false);
              }}
              className="px-6 py-2 md:px-8 md:py-3 bg-red-600 hover:bg-red-500 text-black font-bold font-orbitron tracking-wider clip-path-button transition-all transform hover:scale-105"
            >
              TRY AGAIN
            </button>
            <Link 
              href="/dashboard"
              className="px-6 py-2 md:px-8 md:py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold font-orbitron tracking-wider clip-path-button transition-all transform hover:scale-105 flex items-center"
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen hex-pattern relative flex items-center justify-center p-4">
        <div className="scanline" />
        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-500 py-12">
          <Hexagon size={60} className="md:w-20 md:h-20 text-cyan-400 animate-spin-slow" strokeWidth={1} />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-widest uppercase glow-text mb-7 mt-3">
            Access Granted
          </h2>
          <p className="text-cyan-200 font-mono text-base md:text-lg border-l-4 border-cyan-500 bg-cyan-900/20 p-4 max-w-md skew-x-[-10deg] mx-4 md:mx-0">
            <span className="skew-x-10 block">
              Welcome to the Legion, <span className="text-white font-bold">{formData.fullName}</span>. 
              <br/>
              Your tactical profile has been uploaded to the Nanosuit network.
            </span>
          </p>
          <Link 
            href="/dashboard"
            className="mt-12 px-6 py-2 md:px-8 md:py-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold font-orbitron tracking-wider clip-path-button transition-all transform hover:scale-105 flex items-center"
          >
            RETURN TO DASHBOARD
          </Link>
        </div>
      </div>
    );
  }

  // Helper for input container style
  const renderInputGroup = (
    Icon: any, 
    label: string, 
    name: keyof FormData, 
    type: string = "text", 
    placeholder?: string,
    isRequired: boolean = true
  ) => (
    <div 
      className={`group relative transition-all duration-300 ${activeField === name ? 'scale-[1.02] md:scale-105 z-10' : 'opacity-80 hover:opacity-100'}`}
      onMouseEnter={() => setActiveField(name)}
      onMouseLeave={() => setActiveField(null)}
    >
      <label className="block text-cyan-400 text-[10px] md:text-xs font-orbitron tracking-widest mb-3 pl-2 uppercase">
        {activeField === name && <span className="animate-pulse mr-2">►</span>}
        {label}
      </label>
      <div className={`relative flex items-center bg-black/80 backdrop-blur-md border-l-4 ${activeField === name ? 'border-cyan-400 bg-cyan-900/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'border-gray-700'}`}>
        <div className="p-2 md:p-3 text-cyan-600 group-hover:text-cyan-400 transition-colors">
          <Icon size={18} className="md:w-5 md:h-5" />
        </div>
        <input
          type={type}
          name={name}
          value={formData[name] as string}
          onChange={handleChange}
          onFocus={() => setActiveField(name)}
          placeholder={placeholder}
          required={isRequired}
          className="w-full bg-transparent border-none text-white text-md md:text-base placeholder-gray-600 focus:ring-0 font-mono py-2 md:py-3 px-2 outline-none select-text pointer-events-auto"
        />
        {/* Decorative elements */}
        {activeField === name && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-3 md:h-4 bg-cyan-500 animate-pulse pointer-events-none"></div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen hex-pattern relative">
      <div className="scanline" />
      
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full pointer-events-auto">
            {/* 3D Container Header */}
            <div className="flex items-center justify-between mb-12 md:mb-8">
              <Link 
                href="/dashboard"
                className="text-cyan-600 hover:text-cyan-400 transition-colors flex items-center font-orbitron text-xs md:text-sm"
              >
                <ChevronLeft size={16} /> BACK
              </Link>
              <div className="text-right">
                <h1 className="text-xl md:text-3xl font-black font-orbitron text-white tracking-widest uppercase">
                  New Operative
                </h1>
                <div className="h-0.5 w-full bg-linear-to-l from-cyan-500 to-transparent"></div>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10 overflow-y-auto overflow-x-hidden px-4 md:px-8 pr-2">
              
              {/* Section 1: Basic Information */}
              <div className="grid gap-7">
                <h3 className="text-cyan-400 font-orbitron text-sm md:text-base tracking-wider border-b border-cyan-900 pb-2">BASIC INFORMATION</h3>
                
                {renderInputGroup(Terminal, "Email *", "email", "email", "your.email@example.com")}
                
                {renderInputGroup(User, "Full Name *", "fullName", "text", "Expand Initials")}
                
                <div className="group relative">
                  <label className="block text-cyan-400 text-[10px] md:text-xs font-orbitron tracking-widest mb-3 pl-2 uppercase">
                    Faculty / Department *
                  </label>
                  <div className="flex items-center bg-black/80 backdrop-blur-md border-l-4 border-gray-700 hover:border-cyan-500 transition-colors">
                    <div className="p-2 md:p-3 text-cyan-600">
                      <Briefcase size={18} className="md:w-5 md:h-5" />
                    </div>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-none text-white text-sm md:text-base focus:ring-0 font-mono py-2 md:py-3 px-2 outline-none appearance-none cursor-pointer select-text pointer-events-auto"
                    >
                      <option value="Computing & Technology" className="bg-slate-900 text-white">Computing & Technology</option>
                      <option value="Science" className="bg-slate-900 text-white">Science</option>
                      <option value="Medicine" className="bg-slate-900 text-white">Medicine</option>
                      <option value="Management" className="bg-slate-900 text-white">Management</option>
                      <option value="Social Sciences" className="bg-slate-900 text-white">Social Sciences</option>
                      <option value="Humanities" className="bg-slate-900 text-white">Humanities</option>
                      <option value="__other_option__" className="bg-slate-900 text-white">Other (Please specify)</option>
                    </select>
                    <div className="mr-2">
                      <ChevronRight size={16} className="text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  {formData.department === '__other_option__' && (
                    <div className="mt-2 bg-black/40 p-3 border-l-4 border-cyan-700">
                      <input
                        type="text"
                        name="departmentOther"
                        value={formData.departmentOther}
                        onChange={handleChange}
                        placeholder="Please specify your department"
                        className="w-full bg-black/60 border border-cyan-700 text-white text-sm px-3 py-2 font-mono focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  )}
                </div>

                {renderInputGroup(Hash, "Student No *", "studentNo", "text", "XX / 20XX / XXXXX")}

                <div className="group relative">
                  <label className="block text-cyan-400 text-[10px] md:text-xs font-orbitron tracking-widest mb-3 pl-2 uppercase">
                    Year *
                  </label>
                  <div className="flex items-center bg-black/80 backdrop-blur-md border-l-4 border-gray-700 hover:border-yellow-500 transition-colors">
                    <div className="p-2 md:p-3 text-cyan-600">
                      <Shield size={18} className="md:w-5 md:h-5" />
                    </div>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-none text-white text-sm md:text-base focus:ring-0 font-mono py-2 md:py-3 px-2 outline-none appearance-none cursor-pointer select-text pointer-events-auto"
                    >
                      <option value="1 st Year" className="bg-slate-900 text-white">1 st Year</option>
                      <option value="2 nd Year" className="bg-slate-900 text-white">2 nd Year</option>
                      <option value="3 rd Year" className="bg-slate-900 text-white">3 rd Year</option>
                      <option value="4 th Year" className="bg-slate-900 text-white">4 th Year</option>
                    </select>
                    <div className="mr-2">
                      <ChevronRight size={16} className="text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInputGroup(Phone, "Contact No (Mobile) *", "contactMobile", "text", "07XXXXXXXX")}
                  {renderInputGroup(MessageCircle, "Contact No (WhatsApp) *", "contactWhatsapp", "text", "07XXXXXXXX")}
                </div>
              </div>

              {/* Section 2: E-Sports and Digital Media */}
              <div className="grid gap-7 border-t border-cyan-900 pt-12">
                <h3 className="text-yellow-400 font-orbitron text-sm md:text-base tracking-wider border-b border-yellow-900 pb-2">E-SPORTS & DIGITAL MEDIA</h3>
                
                <div className="group relative">
                  <label className="block text-cyan-400 text-[10px] md:text-xs font-orbitron tracking-widest mb-2 pl-2 uppercase">
                    Digital Platform/s Interested In *
                  </label>
                  <div className="space-y-2 bg-black/40 p-3 border-l-4 border-cyan-700">
                    {['E - sports (Online Competitive multiplayer)', 'Digital creative platform (Photoshop, Illustrator,3D blender, Arduino, etc.)'].map(platform => (
                      <label key={platform} className="flex items-center gap-2 text-white text-sm hover:text-cyan-400 cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          checked={formData.digitalPlatform.includes(platform)}
                          onChange={(e) => handleCheckboxChange('digitalPlatform', platform, e.target.checked)}
                          className="w-4 h-4 text-md bg-black border-cyan-600 text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="font-mono">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-cyan-400 text-[10px] md:text-xs font-orbitron tracking-widest mb-3 pl-2 uppercase">
                    Gaming Platforms You Use
                  </label>
                  <div className="space-y-2 bg-black/40 p-3 border-l-4 border-cyan-700">
                    {['PC', 'Mobile'].map(platform => (
                      <label key={platform} className="flex items-center gap-2 text-white text-sm hover:text-cyan-400 cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          checked={formData.gamingPlatform.includes(platform)}
                          onChange={(e) => handleCheckboxChange('gamingPlatform', platform, e.target.checked)}
                          className="w-4 h-4 bg-black text-md border-cyan-600 text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="font-mono">{platform}</span>
                      </label>
                    ))}
                    <div className="flex items-center gap-2">
                      <label className="flex items-center gap-2 text-white text-sm hover:text-cyan-400 cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          checked={formData.gamingPlatform.includes('__other_option__')}
                          onChange={(e) => handleCheckboxChange('gamingPlatform', '__other_option__', e.target.checked)}
                          className="w-4 h-4 bg-black border-cyan-600 text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="font-mono">Other:</span>
                      </label>
                      {formData.gamingPlatform.includes('__other_option__') && (
                        <input
                          type="text"
                          name="gamingPlatformOther"
                          value={formData.gamingPlatformOther}
                          onChange={handleChange}
                          placeholder="Specify..."
                          className="flex-1 bg-black/60 border border-cyan-700 text-white text-sm px-2 py-1 font-mono focus:outline-none focus:border-cyan-500"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {renderInputGroup(Gamepad2, "E-sports You're Currently In (Optional)", "esportMention", "text", "Optional", false)}
                {renderInputGroup(Gamepad2, "E-sports You Want to Play (Optional)", "esportFuture", "text", "Optional", false)}

                <div className="group relative">
                  <label className="block text-cyan-400 text-[10px] md:text-xs font-orbitron tracking-widest mb-3 pl-2 uppercase">
                    Digital Creative Platforms You&apos;re Familiar/Interested With
                  </label>
                  <div className="space-y-2 bg-black/40 p-3 border-l-4 border-cyan-700 overflow-y-auto">
                    {['Graphic Design', '3D/2D Animation', 'Game Developing', 'Social Media Advertising', 'Audio Editing', 'Creative Writing', 'Film Making', 'Photography', 'Software Developing', 'Video Editing', 'Web Developing'].map(platform => (
                      <label key={platform} className="flex items-center gap-2 text-white text-sm hover:text-cyan-400 cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          checked={formData.creativePlatforms.includes(platform)}
                          onChange={(e) => handleCheckboxChange('creativePlatforms', platform, e.target.checked)}
                          className="w-4 h-4 bg-black text-md border-cyan-600 text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="font-mono">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {renderInputGroup(Palette, "Platforms You Want to Learn (Optional)", "creativeFuture", "text", "Optional", false)}
              </div>

              {submitError && (
                <div className="mt-4 px-4 py-3 bg-red-900/30 border border-red-500 text-red-100 font-mono text-sm">
                  {submitError}
                </div>
              )}

              <div className="pt-4 md:pt-8 flex justify-end mr-2 mt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-6 py-3 md:px-12 md:py-4 bg-transparent w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Button Backgrounds */}
                  <div className="absolute inset-0 w-full h-full bg-cyan-900/40 transform skew-x-[-20deg] border border-cyan-500 group-hover:bg-cyan-500/80 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]"></div>
                  
                  {/* Animated Bottom Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transform skew-x-[-20deg] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  {/* Content */}
                  <span className="relative flex items-center justify-center gap-3 text-cyan-100 font-orbitron font-bold tracking-widest uppercase group-hover:text-black transition-colors text-sm md:text-base">
                    Submit Registration <ChevronRight className="animate-pulse" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

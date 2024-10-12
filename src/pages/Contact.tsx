import React, { useState } from 'react';
import Select from 'react-select';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';


const countryOptions = [
  { value: 'Afghanistan', label: 'Afghanistan (+93)', code: '+93' },
  { value: 'Albania', label: 'Albania (+355)', code: '+355' },
  { value: 'Algeria', label: 'Algeria (+213)', code: '+213' },
  { value: 'Andorra', label: 'Andorra (+376)', code: '+376' },
  { value: 'Angola', label: 'Angola (+244)', code: '+244' },
  { value: 'Argentina', label: 'Argentina (+54)', code: '+54' },
  { value: 'Armenia', label: 'Armenia (+374)', code: '+374' },
  { value: 'Australia', label: 'Australia (+61)', code: '+61' },
  { value: 'Austria', label: 'Austria (+43)', code: '+43' },
  { value: 'Azerbaijan', label: 'Azerbaijan (+994)', code: '+994' },
  { value: 'Bahrain', label: 'Bahrain (+973)', code: '+973' },
  { value: 'Bangladesh', label: 'Bangladesh (+880)', code: '+880' },
  { value: 'Belarus', label: 'Belarus (+375)', code: '+375' },
  { value: 'Belgium', label: 'Belgium (+32)', code: '+32' },
  { value: 'Belize', label: 'Belize (+501)', code: '+501' },
  { value: 'Benin', label: 'Benin (+229)', code: '+229' },
  { value: 'Bhutan', label: 'Bhutan (+975)', code: '+975' },
  { value: 'Bolivia', label: 'Bolivia (+591)', code: '+591' },
  { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina (+387)', code: '+387' },
  { value: 'Botswana', label: 'Botswana (+267)', code: '+267' },
  { value: 'Brazil', label: 'Brazil (+55)', code: '+55' },
  { value: 'Bulgaria', label: 'Bulgaria (+359)', code: '+359' },
  { value: 'Burkina Faso', label: 'Burkina Faso (+226)', code: '+226' },
  { value: 'Burundi', label: 'Burundi (+257)', code: '+257' },
  { value: 'Cambodia', label: 'Cambodia (+855)', code: '+855' },
  { value: 'Cameroon', label: 'Cameroon (+237)', code: '+237' },
  { value: 'Canada', label: 'Canada (+1)', code: '+1' },
  { value: 'Cape Verde', label: 'Cape Verde (+238)', code: '+238' },
  { value: 'Central African Republic', label: 'Central African Republic (+236)', code: '+236' },
  { value: 'Chad', label: 'Chad (+235)', code: '+235' },
  { value: 'Chile', label: 'Chile (+56)', code: '+56' },
  { value: 'China', label: 'China (+86)', code: '+86' },
  { value: 'Colombia', label: 'Colombia (+57)', code: '+57' },
  { value: 'Comoros', label: 'Comoros (+269)', code: '+269' },
  { value: 'Congo', label: 'Congo (+242)', code: '+242' },
  { value: 'Congo, Democratic Republic', label: 'Congo, Democratic Republic (+243)', code: '+243' },
  { value: 'Costa Rica', label: 'Costa Rica (+506)', code: '+506' },
  { value: 'Croatia', label: 'Croatia (+385)', code: '+385' },
  { value: 'Cuba', label: 'Cuba (+53)', code: '+53' },
  { value: 'Cyprus', label: 'Cyprus (+357)', code: '+357' },
  { value: 'Czech Republic', label: 'Czech Republic (+420)', code: '+420' },
  { value: 'Denmark', label: 'Denmark (+45)', code: '+45' },
  { value: 'Djibouti', label: 'Djibouti (+253)', code: '+253' },
  { value: 'Dominica', label: 'Dominica (+1-767)', code: '+1-767' },
  { value: 'Dominican Republic', label: 'Dominican Republic (+1-809)', code: '+1-809' },
  { value: 'Ecuador', label: 'Ecuador (+593)', code: '+593' },
  { value: 'Egypt', label: 'Egypt (+20)', code: '+20' },
  { value: 'El Salvador', label: 'El Salvador (+503)', code: '+503' },
  { value: 'Equatorial Guinea', label: 'Equatorial Guinea (+240)', code: '+240' },
  { value: 'Eritrea', label: 'Eritrea (+291)', code: '+291' },
  { value: 'Estonia', label: 'Estonia (+372)', code: '+372' },
  { value: 'Eswatini', label: 'Eswatini (+268)', code: '+268' },
  { value: 'Ethiopia', label: 'Ethiopia (+251)', code: '+251' },
  { value: 'Fiji', label: 'Fiji (+679)', code: '+679' },
  { value: 'Finland', label: 'Finland (+358)', code: '+358' },
  { value: 'France', label: 'France (+33)', code: '+33' },
  { value: 'Gabon', label: 'Gabon (+241)', code: '+241' },
  { value: 'Gambia', label: 'Gambia (+220)', code: '+220' },
  { value: 'Georgia', label: 'Georgia (+995)', code: '+995' },
  { value: 'Germany', label: 'Germany (+49)', code: '+49' },
  { value: 'Ghana', label: 'Ghana (+233)', code: '+233' },
  { value: 'Greece', label: 'Greece (+30)', code: '+30' },
  { value: 'Grenada', label: 'Grenada (+1-473)', code: '+1-473' },
  { value: 'Guatemala', label: 'Guatemala (+502)', code: '+502' },
  { value: 'Guinea', label: 'Guinea (+224)', code: '+224' },
  { value: 'Guinea-Bissau', label: 'Guinea-Bissau (+245)', code: '+245' },
  { value: 'Guyana', label: 'Guyana (+592)', code: '+592' },
  { value: 'Haiti', label: 'Haiti (+509)', code: '+509' },
  { value: 'Honduras', label: 'Honduras (+504)', code: '+504' },
  { value: 'Hungary', label: 'Hungary (+36)', code: '+36' },
  { value: 'Iceland', label: 'Iceland (+354)', code: '+354' },
  { value: 'India', label: 'India (+91)', code: '+91' },
  { value: 'Indonesia', label: 'Indonesia (+62)', code: '+62' },
  { value: 'Iran', label: 'Iran (+98)', code: '+98' },
  { value: 'Iraq', label: 'Iraq (+964)', code: '+964' },
  { value: 'Ireland', label: 'Ireland (+353)', code: '+353' },
  { value: 'Israel', label: 'Israel (+972)', code: '+972' },
  { value: 'Italy', label: 'Italy (+39)', code: '+39' },
  { value: 'Jamaica', label: 'Jamaica (+1-876)', code: '+1-876' },
  { value: 'Japan', label: 'Japan (+81)', code: '+81' },
  { value: 'Jordan', label: 'Jordan (+962)', code: '+962' },
  { value: 'Kazakhstan', label: 'Kazakhstan (+7)', code: '+7' },
  { value: 'Kenya', label: 'Kenya (+254)', code: '+254' },
  { value: 'Kiribati', label: 'Kiribati (+686)', code: '+686' },
  { value: 'Kuwait', label: 'Kuwait (+965)', code: '+965' },
  { value: 'Kyrgyzstan', label: 'Kyrgyzstan (+996)', code: '+996' },
  { value: 'Laos', label: 'Laos (+856)', code: '+856' },
  { value: 'Latvia', label: 'Latvia (+371)', code: '+371' },
  { value: 'Lebanon', label: 'Lebanon (+961)', code: '+961' },
  { value: 'Lesotho', label: 'Lesotho (+266)', code: '+266' },
  { value: 'Liberia', label: 'Liberia (+231)', code: '+231' },
  { value: 'Libya', label: 'Libya (+218)', code: '+218' },
  { value: 'Liechtenstein', label: 'Liechtenstein (+423)', code: '+423' },
  { value: 'Lithuania', label: 'Lithuania (+370)', code: '+370' },
  { value: 'Luxembourg', label: 'Luxembourg (+352)', code: '+352' },
  { value: 'Madagascar', label: 'Madagascar (+261)', code: '+261' },
  { value: 'Malawi', label: 'Malawi (+265)', code: '+265' },
  { value: 'Malaysia', label: 'Malaysia (+60)', code: '+60' },
  { value: 'Maldives', label: 'Maldives (+960)', code: '+960' },
  { value: 'Mali', label: 'Mali (+223)', code: '+223' },
  { value: 'Malta', label: 'Malta (+356)', code: '+356' },
  { value: 'Marshall Islands', label: 'Marshall Islands (+692)', code: '+692' },
  { value: 'Mauritania', label: 'Mauritania (+222)', code: '+222' },
  { value: 'Mauritius', label: 'Mauritius (+230)', code: '+230' },
  { value: 'Mexico', label: 'Mexico (+52)', code: '+52' },
  { value: 'Micronesia', label: 'Micronesia (+691)', code: '+691' },
  { value: 'Moldova', label: 'Moldova (+373)', code: '+373' },
  { value: 'Monaco', label: 'Monaco (+377)', code: '+377' },
  { value: 'Mongolia', label: 'Mongolia (+976)', code: '+976' },
  { value: 'Montenegro', label: 'Montenegro (+382)', code: '+382' },
  { value: 'Morocco', label: 'Morocco (+212)', code: '+212' },
  { value: 'Mozambique', label: 'Mozambique (+258)', code: '+258' },
  { value: 'Myanmar', label: 'Myanmar (+95)', code: '+95' },
  { value: 'Namibia', label: 'Namibia (+264)', code: '+264' },
  { value: 'Nauru', label: 'Nauru (+674)', code: '+674' },
  { value: 'Nepal', label: 'Nepal (+977)', code: '+977' },
  { value: 'Netherlands', label: 'Netherlands (+31)', code: '+31' },
  { value: 'New Zealand', label: 'New Zealand (+64)', code: '+64' },
  { value: 'Nicaragua', label: 'Nicaragua (+505)', code: '+505' },
  { value: 'Niger', label: 'Niger (+227)', code: '+227' },
  { value: 'Nigeria', label: 'Nigeria (+234)', code: '+234' },
  { value: 'North Korea', label: 'North Korea (+850)', code: '+850' },
  { value: 'Norway', label: 'Norway (+47)', code: '+47' },
  { value: 'Oman', label: 'Oman (+968)', code: '+968' },
  { value: 'Pakistan', label: 'Pakistan (+92)', code: '+92' },
  { value: 'Palau', label: 'Palau (+680)', code: '+680' },
  { value: 'Palestine', label: 'Palestine (+970)', code: '+970' },
  { value: 'Panama', label: 'Panama (+507)', code: '+507' },
  { value: 'Papua New Guinea', label: 'Papua New Guinea (+675)', code: '+675' },
  { value: 'Paraguay', label: 'Paraguay (+595)', code: '+595' },
  { value: 'Peru', label: 'Peru (+51)', code: '+51' },
  { value: 'Philippines', label: 'Philippines (+63)', code: '+63' },
  { value: 'Poland', label: 'Poland (+48)', code: '+48' },
  { value: 'Portugal', label: 'Portugal (+351)', code: '+351' },
  { value: 'Qatar', label: 'Qatar (+974)', code: '+974' },
  { value: 'Romania', label: 'Romania (+40)', code: '+40' },
  { value: 'Russia', label: 'Russia (+7)', code: '+7' },
  { value: 'Rwanda', label: 'Rwanda (+250)', code: '+250' },
  { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis (+1-869)', code: '+1-869' },
  { value: 'Saint Lucia', label: 'Saint Lucia (+1-758)', code: '+1-758' },
  { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines (+1-784)', code: '+1-784' },
  { value: 'Samoa', label: 'Samoa (+685)', code: '+685' },
  { value: 'San Marino', label: 'San Marino (+378)', code: '+378' },
  { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe (+239)', code: '+239' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia (+966)', code: '+966' },
  { value: 'Senegal', label: 'Senegal (+221)', code: '+221' },
  { value: 'Serbia', label: 'Serbia (+381)', code: '+381' },
  { value: 'Seychelles', label: 'Seychelles (+248)', code: '+248' },
  { value: 'Sierra Leone', label: 'Sierra Leone (+232)', code: '+232' },
  { value: 'Singapore', label: 'Singapore (+65)', code: '+65' },
  { value: 'Slovakia', label: 'Slovakia (+421)', code: '+421' },
  { value: 'Slovenia', label: 'Slovenia (+386)', code: '+386' },
  { value: 'Solomon Islands', label: 'Solomon Islands (+677)', code: '+677' },
  { value: 'Somalia', label: 'Somalia (+252)', code: '+252' },
  { value: 'South Africa', label: 'South Africa (+27)', code: '+27' },
  { value: 'South Korea', label: 'South Korea (+82)', code: '+82' },
  { value: 'South Sudan', label: 'South Sudan (+211)', code: '+211' },
  { value: 'Spain', label: 'Spain (+34)', code: '+34' },
  { value: 'Sri Lanka', label: 'Sri Lanka (+94)', code: '+94' },
  { value: 'Sudan', label: 'Sudan (+249)', code: '+249' },
  { value: 'Suriname', label: 'Suriname (+597)', code: '+597' },
  { value: 'Sweden', label: 'Sweden (+46)', code: '+46' },
  { value: 'Switzerland', label: 'Switzerland (+41)', code: '+41' },
  { value: 'Syria', label: 'Syria (+963)', code: '+963' },
  { value: 'Taiwan', label: 'Taiwan (+886)', code: '+886' },
  { value: 'Tajikistan', label: 'Tajikistan (+992)', code: '+992' },
  { value: 'Tanzania', label: 'Tanzania (+255)', code: '+255' },
  { value: 'Thailand', label: 'Thailand (+66)', code: '+66' },
  { value: 'Timor-Leste', label: 'Timor-Leste (+670)', code: '+670' },
  { value: 'Togo', label: 'Togo (+228)', code: '+228' },
  { value: 'Tonga', label: 'Tonga (+676)', code: '+676' },
  { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago (+1-868)', code: '+1-868' },
  { value: 'Tunisia', label: 'Tunisia (+216)', code: '+216' },
  { value: 'Turkey', label: 'Turkey (+90)', code: '+90' },
  { value: 'Turkmenistan', label: 'Turkmenistan (+993)', code: '+993' },
  { value: 'Tuvalu', label: 'Tuvalu (+688)', code: '+688' },
  { value: 'Uganda', label: 'Uganda (+256)', code: '+256' },
  { value: 'Ukraine', label: 'Ukraine (+380)', code: '+380' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates (+971)', code: '+971' },
  { value: 'United Kingdom', label: 'United Kingdom (+44)', code: '+44' },
  { value: 'United States', label: 'United States (+1)', code: '+1' },
  { value: 'Uruguay', label: 'Uruguay (+598)', code: '+598' },
  { value: 'Uzbekistan', label: 'Uzbekistan (+998)', code: '+998' },
  { value: 'Vanuatu', label: 'Vanuatu (+678)', code: '+678' },
  { value: 'Vatican City', label: 'Vatican City (+379)', code: '+379' },
  { value: 'Venezuela', label: 'Venezuela (+58)', code: '+58' },
  { value: 'Vietnam', label: 'Vietnam (+84)', code: '+84' },
  { value: 'Yemen', label: 'Yemen (+967)', code: '+967' },
  { value: 'Zambia', label: 'Zambia (+260)', code: '+260' },
  { value: 'Zimbabwe', label: 'Zimbabwe (+263)', code: '+263' }
];


interface FormData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  country: string;
  message: string;
  countryCode: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    city: '',
    country: '',
    message: '',
    countryCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (selectedOption: any) => {
    setFormData({
      ...formData,
      country: selectedOption.value,
      countryCode: selectedOption.code, // Store the selected country's code
      mobile: selectedOption.code + formData.mobile.substring(selectedOption.code.length), // Keep the existing mobile number after code
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email.');
      return;
    }

    const userAgent = navigator.userAgent; // Get the User-Agent string
    const referrer = document.referrer; // Get the referrer URL
    const timestamp = new Date().toISOString(); // Get the current timestamp

    const dataToSend = {
      ...formData,
      userAgent, // Add User-Agent to form data
      referrer, // Add referrer to form data
      timestamp, // Add timestamp to form data
  };

  try {
      const response = await fetch('https://sbkashif-server.onrender.com/contactformsubmits', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      console.log('Form submitted:', await response.json());
  } catch (error) {
      console.error('Error submitting form:', error);
  }

    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-between text-zinc-500 space-y-6 md:space-y-0 overflow-hidden">
      <div className="flex flex-col md:w-[50%] w-full h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg p-4 md:p-8 text-sm md:text-base">
        <form onSubmit={handleSubmit} className="w-full h-fit space-y-4 md:space-y-6 text-zinc-800">
          <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 bg-transparent border border-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
            autoComplete="new-name"
          />
          
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Select
              options={countryOptions}
              onChange={handleCountryChange}
              placeholder="Select Country"
              className="w-full glassmorphism-dropdown text-inherit bg-inherit" // Custom class for styling
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  boxShadow: 'none',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: 'inherit', // Inherit color from the parent element
                }),
              }}
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 bg-transparent border border-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
              autoComplete="new-city"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 bg-transparent border border-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
              autoComplete="new-email"
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full p-2 bg-transparent border border-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
              autoComplete="new-mobile"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="w-full p-2 bg-transparent border border-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none" // Disable resizing
            required
            autoComplete="new-message"
          />

          <button
            type="submit"
            className="py-2 px-4 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-all mx-auto"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 md:mt-10 items-center h-full flex justify-center space-x-10">
          <a href="https://linkedin.com/in/sbkashif" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl md:text-3xl text-gray-800 hover:text-rose-500 transition-colors" />
          </a>
          <a href="https://github.com/shaik-baleeghuddin-kashif" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl md:text-3xl text-gray-800 hover:text-rose-500 transition-colors" />
          </a>
          <a href="https://x.com/baleeghuddin" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-xl md:text-3xl text-gray-800 hover:text-rose-500 transition-colors" />
          </a>
          <a href="mailto:hello@sbkashif.com" target="_blank" className="text-xl md:text-3xl text-gray-800 hover:text-rose-500 transition-colors" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="tel:+917287006488" target="_blank" className="text-xl md:text-3xl text-gray-800 hover:text-rose-500 transition-colors" rel="noopener noreferrer">
            <FaPhone />
          </a>
        </div>
      </div>

      <div className="hidden md:flex md:w-[50%] md:h-full md:justify-center md:items-center">
        <div className="relative p-4 max-w-[80%] bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg">
          <img
            src="/contact.jpg"
            alt="Contact"
            className="max-w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

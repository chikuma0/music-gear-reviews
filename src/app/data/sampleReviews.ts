import { GearReview, CategoryInfo } from '../types/gear';

export const categories: CategoryInfo[] = [
  {
    name: 'Synthesizers',
    slug: 'synthesizers',
    description: 'Analog, digital, and hybrid synthesizers',
    icon: '🎹'
  },
  {
    name: 'DAWs',
    slug: 'daws',
    description: 'Digital Audio Workstations and software',
    icon: '💻'
  },
  {
    name: 'Audio Interfaces',
    slug: 'audio-interfaces',
    description: 'Professional audio recording interfaces',
    icon: '🎚️'
  },
  {
    name: 'Studio Monitors',
    slug: 'studio-monitors',
    description: 'Reference monitors for mixing and mastering',
    icon: '🔊'
  },
  {
    name: 'Headphones',
    slug: 'headphones',
    description: 'Studio and reference headphones',
    icon: '🎧'
  },
  {
    name: 'MIDI Controllers',
    slug: 'midi-controllers',
    description: 'MIDI keyboards and control surfaces',
    icon: '🎛️'
  },
  {
    name: 'Effects Pedals',
    slug: 'effects-pedals',
    description: 'Guitar and synthesizer effects pedals',
    icon: '⚡'
  },
  {
    name: 'Microphones',
    slug: 'microphones',
    description: 'Recording and live performance microphones',
    icon: '🎤'
  }
];

export const sampleReviews: GearReview[] = [
  {
    id: 'moog-subsequent-37',
    title: 'Moog Subsequent 37: A Modern Classic',
    brand: 'Moog',
    model: 'Subsequent 37',
    category: 'synthesizers',
    price: {
      current: 1599,
      currency: 'USD',
      msrp: 1599
    },
    rating: {
      overall: 4.5,
      sound: 5.0,
      buildQuality: 4.5,
      value: 4.0,
      usability: 4.5
    },
    summary: 'The Moog Subsequent 37 delivers that legendary Moog sound in a modern, feature-packed package. Perfect for both studio and live performance.',
    pros: [
      'Iconic Moog sound quality',
      'Excellent build quality',
      'Intuitive interface',
      'Great for both bass and lead sounds',
      'Responsive keybed'
    ],
    cons: [
      'Expensive compared to digital alternatives',
      'Limited polyphony (paraphonic)',
      'No built-in effects',
      'Can be overwhelming for beginners'
    ],
    specs: {
      'Keys': '37-key semi-weighted',
      'Oscillators': '2 VCOs',
      'Filter': 'Moog ladder filter',
      'Polyphony': 'Paraphonic (2 notes)',
      'Connectivity': 'USB, MIDI, Audio Out',
      'Dimensions': '584 x 286 x 108 mm',
      'Weight': '6.4 kg'
    },
    images: {
      main: '/images/moog-subsequent-37-main.jpg',
      gallery: [
        '/images/moog-subsequent-37-1.jpg',
        '/images/moog-subsequent-37-2.jpg',
        '/images/moog-subsequent-37-3.jpg'
      ]
    },
    dateReviewed: '2024-01-15',
    author: 'Music Gear Reviews',
    content: {
      introduction: 'The Moog Subsequent 37 represents the evolution of the classic Sub 37, offering refined sound and enhanced features that make it a standout in the analog synthesizer world.',
      soundQuality: 'The sound quality is exceptional, delivering the warm, fat analog sound that Moog is famous for. The oscillators are rich and stable, and the filter is musical and responsive.',
      buildAndDesign: 'Built like a tank with a premium feel throughout. The knobs and sliders feel solid, and the overall aesthetic is both modern and classic.',
      features: 'Features include a comprehensive modulation matrix, arpeggiator, step sequencer, and extensive connectivity options. The interface is intuitive and encourages experimentation.',
      valueForMoney: 'While expensive, the build quality and sound justify the price for serious musicians and producers. Its a long-term investment that will hold its value.',
      conclusion: 'The Subsequent 37 is an excellent choice for anyone seeking authentic analog sound with modern functionality. Highly recommended for electronic music producers and keyboard players.'
    },
    tags: ['analog', 'monophonic', 'bass', 'lead', 'moog', 'synthesizer'],
    affiliate: {
      sweetwaterUrl: 'https://sweetwater.com/moog-subsequent-37'
    }
  },
  {
    id: 'focusrite-scarlett-2i2',
    title: 'Focusrite Scarlett 2i2: Best Budget Audio Interface',
    brand: 'Focusrite',
    model: 'Scarlett 2i2 (4th Gen)',
    category: 'audio-interfaces',
    price: {
      current: 199,
      currency: 'USD',
      msrp: 199
    },
    rating: {
      overall: 4.3,
      sound: 4.0,
      buildQuality: 4.2,
      value: 4.8,
      usability: 4.5
    },
    summary: 'The Focusrite Scarlett 2i2 offers professional-quality recording at an accessible price point, making it perfect for home studio setups.',
    pros: [
      'Excellent value for money',
      'Clean preamps',
      'Solid build quality',
      'Easy to use',
      'Good software bundle included',
      'Low latency monitoring'
    ],
    cons: [
      'Limited I/O options',
      'No MIDI connectivity',
      'Basic metering',
      'Plastic construction'
    ],
    specs: {
      'Inputs': '2 x XLR/TRS combo',
      'Outputs': '2 x TRS (balanced)',
      'Sample Rate': 'Up to 192 kHz',
      'Bit Depth': '24-bit',
      'Connectivity': 'USB-C',
      'Phantom Power': '+48V',
      'Dimensions': '150 x 95 x 55 mm',
      'Weight': '0.7 kg'
    },
    images: {
      main: '/images/focusrite-2i2-main.jpg',
      gallery: [
        '/images/focusrite-2i2-1.jpg',
        '/images/focusrite-2i2-2.jpg'
      ]
    },
    dateReviewed: '2024-01-20',
    author: 'Music Gear Reviews',
    content: {
      introduction: 'The 4th generation Focusrite Scarlett 2i2 continues the legacy of being one of the most popular audio interfaces for home recording.',
      soundQuality: 'The preamps are clean and transparent, offering plenty of headroom for most recording applications. The converters provide good detail and clarity.',
      buildAndDesign: 'Compact and sturdy design with a classic red finish. The gain knobs feel solid and the LED halo provides clear visual feedback.',
      features: 'Simple and straightforward operation with direct monitoring, phantom power, and pad switches. The included software bundle adds significant value.',
      valueForMoney: 'Outstanding value proposition. You get professional recording quality at a very reasonable price point.',
      conclusion: 'The Scarlett 2i2 remains the go-to choice for beginners and home studio enthusiasts who need reliable, good-sounding recording capabilities.'
    },
    tags: ['audio-interface', 'home-studio', 'budget', 'usb', 'recording'],
    affiliate: {
      amazonUrl: 'https://amazon.com/focusrite-scarlett-2i2',
      sweetwaterUrl: 'https://sweetwater.com/focusrite-scarlett-2i2'
    }
  },
  {
    id: 'ableton-live-12',
    title: 'Ableton Live 12: The Producer\'s Dream DAW',
    brand: 'Ableton',
    model: 'Live 12 Suite',
    category: 'daws',
    price: {
      current: 799,
      currency: 'USD',
      msrp: 799
    },
    rating: {
      overall: 4.7,
      sound: 4.5,
      buildQuality: 4.8,
      value: 4.5,
      usability: 4.8
    },
    summary: 'Ableton Live 12 pushes the boundaries of music production with innovative features and an intuitive workflow that inspires creativity.',
    pros: [
      'Innovative Session View',
      'Excellent for live performance',
      'Intuitive workflow',
      'Great built-in instruments and effects',
      'Strong community and resources',
      'Excellent time-stretching algorithms'
    ],
    cons: [
      'Expensive',
      'Steep learning curve for traditional DAW users',
      'Limited MIDI editing compared to other DAWs',
      'Audio editing could be more advanced'
    ],
    specs: {
      'Tracks': 'Unlimited audio and MIDI tracks',
      'Effects': '60+ audio effects and Max for Live devices',
      'Instruments': '17+ instruments including Wavetable and Bass',
      'Samples': '6GB+ core library',
      'Max for Live': 'Included in Suite version',
      'Platform': 'Windows, macOS',
      'Format': 'VST, AU plugin support'
    },
    images: {
      main: '/images/ableton-live-12-main.jpg',
      gallery: [
        '/images/ableton-live-12-1.jpg',
        '/images/ableton-live-12-2.jpg',
        '/images/ableton-live-12-3.jpg'
      ]
    },
    dateReviewed: '2024-02-01',
    author: 'Music Gear Reviews',
    content: {
      introduction: 'Ableton Live 12 represents years of refinement in digital audio workstation design, offering unique approaches to music creation and performance.',
      soundQuality: 'The audio engine is pristine with excellent time-stretching and pitch-shifting capabilities. Built-in effects and instruments sound professional.',
      buildAndDesign: 'The interface is clean and functional, with the unique Session View providing a different perspective on music arrangement and performance.',
      features: 'Session View for live looping, comprehensive MIDI tools, Max for Live integration, and an ever-growing library of sounds and presets.',
      valueForMoney: 'While expensive, the feature set and unique workflow justify the cost for serious producers and performers.',
      conclusion: 'Live 12 is perfect for electronic music producers and live performers who want a DAW that thinks differently about music creation.'
    },
    tags: ['daw', 'electronic-music', 'live-performance', 'production', 'software'],
    affiliate: {
      sweetwaterUrl: 'https://sweetwater.com/ableton-live-12'
    }
  }
];
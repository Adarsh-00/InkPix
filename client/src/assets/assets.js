import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import profile_1 from './profile_1.jpg'
import profile_2 from './profile_2.jpg'
import profile_3 from './profile_3.png'
import profile_4 from './profile_4.jpg'
import profile_5 from './profile_5.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    profile_1,
    profile_2,
    profile_3,
    profile_4,
    profile_5,
    
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
  {
    name: "Peter Parker",
    role: "Freelance Photographer",
    image: profile_4,
    stars: 5,
    text: "Taking photos for the Daily Bugle is tough, but InkPix makes my shots look so good even J. Jonah Jameson couldn’t complain. Well… almost."
  },
  {
    name: "Steve Rogers",
    role: "Captain America",
    image: profile_2,
    stars: 5,
    text: "I may be from the 1940s, but even I know a great tool when I see one. InkPix makes creating visuals faster than I can throw my shield."
  },
  {
    name: "Tony Stark",
    role: "Billionaire",
    image: profile_3,
    stars: 4,
    text: "Honestly, I could’ve built this myself... but why bother? InkPix nailed it. Even J.A.R.V.I.S. approves."
  },
  {
    name: "Deadpool",
    role: "Merc with a Mouth",
    image: profile_1,
    stars: 5,
    text: "This site is so good, it almost distracts me from chimichangas. Almost. 10/10 would generate again."
  },
  {
    name: "Thor Odinson",
    role: "God of Thunder",
    image: profile_5,
    stars: 4,
    text: "By Odin’s beard! With InkPix, even mortals can summon art worthy of Asgard. Truly electrifying!"
  }
]


export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]
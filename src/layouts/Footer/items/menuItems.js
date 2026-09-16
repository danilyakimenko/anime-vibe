const menuItems = [
  {
    title: 'Home',
    links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
    href: "/",
  },
  {
    title: 'Movies',
    links: ['Genres', 'Trending', 'New Release', 'Popular'],
    href: "/movies",
  },
  {
    title: 'Shows',
    links: ['Genres', 'Trending', 'New Release', 'Popular'],
    href: "/movie",
  },
  {
    title: 'Support',
    links: ['Contact Us'],
    href: "/support",
  },
  {
    title: 'Subscription',
    links: ['Plans', 'Features'],
    href: "/subscriptions",
  },
  {
    title: 'Connect With Us',
    socialLinks: [
      {
        label: 'Facebook',
        iconSrc: "/src/assets/sprite/facebook.svg"
      },
      {
        label: 'Twitter',
        iconSrc: "/src/assets/sprite/twitter.svg"
      },
      {
        label: 'LinkedIn',
        iconSrc: "/src/assets/sprite/linked-in.svg"
      }
    ]
  }
]

export default menuItems
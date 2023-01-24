/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  ChipIcon,
  XIcon,
  ArrowCircleRightIcon, 
  CubeTransparentIcon, 
  LightningBoltIcon, 
  TrendingUpIcon,
  QrcodeIcon, 
  SpeakerphoneIcon, 
  ViewGridAddIcon, 
  ArrowsExpandIcon, 
  MailOpenIcon, 
  ArrowNarrowRightIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon,  } from '@heroicons/react/solid'
import { IconOne, IconTwo, IconThree } from '../../icons'



const solutions = [
  {
    name: 'Media Advertising',
    href: '/solutions#media-advertising',
    description: 'Get a better understanding of where your traffic is coming from',
    icon: ArrowsExpandIcon,
  },
  // {
  //   name: 'Google Advertising',
  //   href: '#',
  //   description: 'Speak directly to your customers in a more meaningful way.',
  //   icon: IconTwo,
  // },
 
  {
    name: 'eCommerce Strategy',
    href: '/solutions#ecommerce-strategy',
    description: "Speak directly to your customers in a more meaningful way",
    icon: TrendingUpIcon,
  },
  {
    name: 'Email Marketing',
    href: '/solutions#email-marketing',
    description: "Perfectly time customer engagement with well-placed email campaigns",
    icon: MailOpenIcon,
  },
  {
    name: 'Conversion Rate Optimization',
    href: '/solutions#cvr-optimization',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: ViewGridAddIcon,
  },
  {
    name: 'Analytics',
    href: '/solutions#analytics',
    description: 'Get a better understanding of where your traffic is coming from and how its performing',
    icon: CubeTransparentIcon,

  },
 
  {
    name: 'Automations',
    href: '/solutions#automations',
    description: "Build strategic funnels that will drive your customers to convert",
    icon: LightningBoltIcon,
  },
  
]
const resources = [
  
  { name: 'Purpose', description: 'Learn how to maximize our platform to get the most out of it.', href: '/about#purpose' },
  { name: 'Beliefs', description: 'See what meet-ups and other events we might be planning near you.', href: '/about#belief' },
  { name: 'Background', description: 'Understand how we take your privacy seriously.', href: '/about#background' },
]


export default function Nav() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start  lg:w-0 lg:flex-1">
          
            <span className="sr-only">Kickbord</span>
            <Link href="/">
            <img
              className="h-12 w-auto border-2 border-black cursor-pointer rounded-md p-1 sm:h-10"
              src="/images/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            
                          >
                            <div className="-m-3 p-3 flex cursor-pointer items-start rounded-lg hover:bg-gray-100">
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-sky-100 text-sky-600 sm:h-12 sm:w-12">
                                <solution.icon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{solution.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                              </div>
                            </div>
                            
                          </Link>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <Link href="/solutions" >
                          <div className="-m-3 p-3 flow-root cursor-pointer rounded-md hover:bg-gray-100">
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">See all Solutions</div>
                              {/* <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-sky-100 text-sky-800">
                                New
                              </span> */}
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your entire team with even more advanced tools.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link href="/about" >
            <div className="text-base cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                About
            </div>
           
          </Link >
          {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Docs
          </a> */}

        {/* MORE Nav Drop down */}
        
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                  )}
                >
                  <span>More</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.href}
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium text-gray-900">{resource.name}</p>
                            {/* <p className="mt-1 text-sm text-gray-500">{resource.description}</p> */}
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
         <Link href="/schedule-a-call">
          <div>
          <div className="ml-8 whitespace-nowrap cursor-pointer inline-flex items-center shadow-md justify-center px-4 py-2 border border-transparent rounded-md  text-base font-medium text-white bg-sky-500 hover:bg-sky-700">
            <p>
               Get Started  <span className="ml-2" aria-hidden="true">&rarr;</span>{' '}
            </p>
            <div>
            <ArrowNarrowRightIcon />  
            </div>
             
          </div>
          

          </div>
         
         
          
        </Link>
          
        </div>
      </div>
{/* Mobile Nav */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 z-50 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="border-2 border-black rounded">
                  <img
                    className="h-12 w-auto"
                    src="/images/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  <h1 className="text-md font-bold text-gray-600 ">Solutions</h1>
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-sky-100 text-sky-500">
                          <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{solution.name}</div>
                    </a>
                  ))}
                 
                </nav>
                
              </div>
             
            </div>
            
            <div className="py-6 px-5">
              
              <div className="grid grid-cols-2 gap-4">
                <Link href="/about" >
                  <div className="text-base cursor-pointer font-medium text-gray-900 hover:text-gray-700">
                      About
                  </div>
                  
                </Link>

                 {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Purpose
                </a> 

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Belief 
                </a> */}
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/schedule-a-call"
                 
                >
                  <div  className="w-full mx-auto flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700">
                  <h3 className="bg-sky-600 mx-auto">Get Started</h3>
                  {/* <ArrowNarrowRightIcon /> */}
                  </div>
                  
                  
                </Link>
                {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-sky-600 hover:text-sky-500">
                    Sign in
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

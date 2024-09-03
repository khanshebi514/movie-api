import { RiSmartphoneFill, RiTabletFill } from "react-icons/ri";
import { IoGameControllerOutline, IoLaptop, IoTv } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import { BsHeadsetVr } from "react-icons/bs";

export const CATEGORIES = [
    {
        key:'1',
        imageUrl:'/home/Container.png',
        title:'Action'
    },
    {
        key:'2',
        imageUrl:'/home/Container-1.png',
        title:'Advanture'
    },
    {
        key:'3',
        imageUrl:'/home/Container-2.png',
        title:'Comedy'
    },
    {
        key:'4',
        imageUrl:'/home/Container-3.png',
        title:'Drama'
    },
    {
        key:'5',
        imageUrl:'/home/Container-4.png',
        title:'horror'
    },
   

]

export const DEVICES = [
    {
        key:'1',
        iconUrl:<RiSmartphoneFill size={30} className="text-red-600"/>,
        description:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        bageText:'Smart Phones'
    },
    {
        key:'2',
        iconUrl:<RiTabletFill size={30} className="text-red-600"/>,
        description:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        bageText:'Tablets'
    },
    {
        key:'3',
        iconUrl:<IoTv size={30} className="text-red-600"/>,
        description:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        bageText:'Tv Screen'
    },
    {
        key:'4',
        iconUrl:<IoLaptop size={30} className="text-red-600"/>,
        description:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        bageText:'Laptops'
    },
    {
        key:'5',
        iconUrl:<FaGamepad size={30} className="text-red-600"/>,
        description:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        bageText:'Gaming Console'
    },
    {
        key:'6',
        iconUrl:<BsHeadsetVr size={30} className="text-red-600"/>,
        description:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        bageText:'VR Headsets'
    }

]

export const PRICES =[
    {
        key:'1',
        title:"Basic",
        Price:"9.99",
        description:"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",

    },
    {
        key:'2',
        title:"Standard",
        Price:"12.99",
        description:"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        
    },
    {
        key:'3',
        title:"Premium",
        Price:"14.99",
        description:"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        
    },



]
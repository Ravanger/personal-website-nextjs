export interface ArtType {
  name: string
  type: "VIDEO" | "STILL"
  image: string
  instagram: string
  base64?: string
  video_still?: string
}

const Art: ArtType[] = [
  {
    name: "Sour",
    type: "VIDEO",
    image: "/art/inktober2021-sour.mp4",
    video_still: "/art/inktober2021-sour_thumb.jpg",
    instagram: "https://www.instagram.com/p/CU6qp72AHbk/",
  },
  {
    name: "Watch",
    type: "VIDEO",
    image: "/art/inktober2021-watch.mp4",
    video_still: "/art/inktober2021-watch_thumb.jpg",
    instagram: "https://www.instagram.com/p/CUy3qEggMCj/",
  },
  {
    name: "Fan",
    type: "VIDEO",
    image: "/art/inktober2021-fan.mp4",
    video_still: "/art/inktober2021-fan_thumb.jpg",
    instagram: "https://www.instagram.com/p/CUwi6JngXUZ/",
  },
  {
    name: "Suit",
    type: "VIDEO",
    image: "/art/inktober2021-suit.mp4",
    video_still: "/art/inktober2021-suit_thumb.jpg",
    instagram: "https://www.instagram.com/p/CUjbITBg1XB/",
  },
  {
    name: "Crystal",
    type: "VIDEO",
    image: "/art/inktober2021-crystal.mp4",
    video_still: "/art/inktober2021-crystal_thumb.jpg",
    instagram: "https://www.instagram.com/p/CUhMpScjF-f/",
  },
  {
    name: "Minimalism",
    type: "STILL",
    image: "/art/blender52-minimalism.png",
    instagram: "https://www.instagram.com/p/CLFveCujy1_/",
  },
  {
    name: "Dreams",
    type: "STILL",
    image: "/art/blender52-dreams.png",
    instagram: "https://www.instagram.com/p/CKK089Sj3KY/",
  },
  {
    name: "Retro",
    type: "STILL",
    image: "/art/blender52-retro.png",
    instagram: "https://www.instagram.com/p/CJset7QDNAb/",
  },
  {
    name: "Nick's House",
    type: "STILL",
    image: "/art/nicks_house.png",
    instagram: "https://www.instagram.com/p/CISJerrDyT_/",
  },
]

export default Art

npm install -g react-devtools

## commands 
    As during initalization of project where we would be using shadcn it also installs typescript,tailwind and eslint
    https://ui.shadcn.com/docs/installation/next
    npx create-next-app@latest --typescript --tailwind --eslint
    npx shadcn-ui@latest init
    
    updation in layout.tsx and tailwind.config.ts

    Example layout code
    <!-- import './globals.css'
    import { Inter as FontSans } from "next/font/google"

    import { cn } from "@/lib/utils"
    import { Metadata } from 'next'

    const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    })
    export const metadata: Metadata={
    title:"LiveDocs",
    description:"A live collaborative editor",
    }

    export default function RootLayout({ children }:{children:React.ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
            )}
        >
            {children}
        </body>
        </html>
    )
    } -->


npm i jsm-editor
npm i lexical
npm i @lexical/react

index.d.ts
 
live blocks 

npm install @liveblocks/client @liveblocks/react @liveblocks/react-ui @liveblocks/react-lexical lexical @lexical/react

npx create-liveblocks-app@latest --init --framework react
https://liveblocks.io/dashboard/ireOlMhpMAJYbyufX0z9r/projects/669b6101a3b4b32bb8fb86c4/quickstart

https://liveblocks.io/docs/api-reference/liveblocks-node

npm install @clerk/nextjs
https://dashboard.clerk.com/apps/app_2jVJU3Vk4pJBLFjVtet6jkKCaiy/instances/ins_2jVJU2i6S8lrHileArcA3Bcxhqs

 npm i @liveblocks/react-lexical
 npx shadcn-ui@latest add dialog
  npx shadcn-ui@latest add label
npx shadcn-ui@latest add select 
npx shadcn-ui@latest add popover
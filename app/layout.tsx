import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Orbit Four — Human vs. Machine',description:'Connect four, outsmart NOVA, and track your victories. A free browser-powered AI strategy game.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="dark"><body>{children}</body></html>}

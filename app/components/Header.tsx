export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 panel border-b border-cyan-400/30">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded transform rotate-45" />
                    <span className="text-xs text-gray-400">LOC: DALUGAMA, KELANIYA</span>
                </div>
                {/* <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/dashboard" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              DASHBOARD
            </Link>
            <Link href="/missions" className="text-gray-400 hover:text-cyan-400 transition-colors">
              MISSIONS
            </Link>
            <Link href="/intel" className="text-gray-400 hover:text-cyan-400 transition-colors">
              INTEL
            </Link>
            <Link href="/archive" className="text-gray-400 hover:text-cyan-400 transition-colors">
              ARCHIVE
            </Link>
          </nav> */}
                <div className="text-right">
                    <div className="text-xs text-cyan-400">SYSTEM IDLE</div>
                    <div className="text-xs text-green-400">SECURE CONNECTION ESTABLISHED</div>
                </div>
            </div>
        </header>
    )
}